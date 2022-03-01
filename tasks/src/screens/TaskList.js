/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Alert, ImageBackground, FlatList, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import moment from 'moment';
import 'moment/locale/pt-br';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import AsyncStorage from "@react-native-community/async-storage";


import { server, showError } from '../common';
import commonStyles from '../commonStyles';
import Task from '../components/Task';
import AddTask from './AddTask';

import todayImage from '../../assets/imgs/today.jpg';
import tomorrowImage from '../../assets/imgs/tomorrow.jpg';
import weekImage from '../../assets/imgs/week.jpg';
import monthImage from '../../assets/imgs/month.jpg';

const initialState = {
    showDoneTasks: true,
    visibleTasks: [],
    showAddTaskModal: false,
    tasks: [],
}

export default class TaskList extends Component {

    state = {
        ...initialState,
    };

    getImage = () => {
        switch (this.props.daysAhead) {
            case 0: return todayImage;
            case 1: return tomorrowImage;
            case 7: return weekImage;
            default: return monthImage;
        }
    }

    getColor = () => {
        switch (this.props.daysAhead) {
            case 0: return commonStyles.colors.today;
            case 1: return commonStyles.colors.tomorrow;
            case 7: return commonStyles.colors.week;
            default: return commonStyles.colors.month;
        }
    }

    toggleTask = async (taskId) => {

        try {
            await axios.put(`${server}/tasks/${taskId}/toggle`);
            await this.loadTasks();
        } catch (e) {
            showError(e);
        }
    };


    toggleFilter = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks }, this.filterTasks);
    };


    componentDidMount = async () => {
        const stateString = await AsyncStorage.getItem('tasksState');
        const savedState = JSON.parse(stateString) || initialState;

        this.setState({ showDoneTasks: savedState.showDoneTasks }, this.filterTasks);

        this.loadTasks();

    }

    loadTasks = async () => {
        try {
            const maxDate = moment()
                .add({ days: this.props.daysAhead })
                .format('YYYY-MM-DD 23:59:59')
            const res = await axios.get(`${server}/tasks?date=${maxDate}`)
            this.setState({ tasks: res.data }, this.filterTasks)
        } catch (e) {
            showError(e);
        }
    }

    filterTasks = () => {

        let visibleTasks = null;

        if (this.state.showDoneTasks) {
            visibleTasks = [...this.state.tasks];
        } else {
            const pending = (task) => task.doneAt === null;
            visibleTasks = this.state.tasks.filter(pending);
        }

        this.setState({ visibleTasks });

        AsyncStorage.setItem('tasksState', JSON.stringify(this.state));
    };

    deleteTask = async (taskId) => {
        try {
            await axios.delete(`${server}/tasks/${taskId}`);
            await this.loadTasks();
        } catch (e) {
            showError(e);
        }
    }

    addTask = async (newTask) => {
        if (!newTask.description || !newTask.description.trim()) {
            Alert.alert('Dados Inválidos', 'Descrição não informada!')
            return
        }

        if (!newTask.date) {
            newTask.date = new Date();
        };
        try {
            await axios.post(`${server}/tasks`, {
                description: newTask.description,
                estimateAt: newTask.date
            })

            this.setState({ showAddTask: false }, this.loadTasks);
        } catch (e) {
            showError(e)
        }
    };

    render() {

        const today = moment().locale('pt-br').format('ddd, D [de] MMMM [/] Y');

        return (

            <SafeAreaView style={styles.container}>
                <AddTask isVisible={this.state.showAddTaskModal} onCancel={() => this.setState({ showAddTaskModal: false })} onSave={this.addTask} />

                <ImageBackground source={this.getImage()} style={styles.background}>

                    <View style={styles.iconBar} >

                        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
                            <Icon name='bars' size={20} color={commonStyles.colors.secondary} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.toggleFilter} >
                            <Icon name={this.state.showDoneTasks ? 'eye' : 'eye-slash'} size={20} color={commonStyles.colors.secondary} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.titleBar}>
                        <Text style={styles.title}>{this.props.title}</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>

                </ImageBackground>

                <View style={styles.taskList}>

                    <FlatList data={this.state.visibleTasks}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => <Task {...item} onToggleTask={this.toggleTask} onDelete={this.deleteTask} />}
                    />

                </View>

                <TouchableOpacity
                    style={[styles.addButton,
                    { backgroundColor: this.getColor() }]}
                    activeOpacity={0.7}
                    onPress={() => this.setState({ showAddTaskModal: true })}
                >

                    <Icon name="plus" size={20} color={commonStyles.colors.secondary} />

                </TouchableOpacity>

            </SafeAreaView>

        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3,
    },
    taskList: {
        flex: 7,
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    title: {
        color: commonStyles.colors.secondary,
        fontFamily: commonStyles.fontFamily,
        fontSize: commonStyles.titleFontSize,
        marginLeft: commonStyles.backgroundMargin,
        marginBottom: commonStyles.backgroundMargin,
    },
    subtitle: {
        color: commonStyles.colors.secondary,
        fontFamily: commonStyles.fontFamily,
        fontSize: commonStyles.subtitleFontSize,
        marginLeft: commonStyles.backgroundMargin,
        marginBottom: commonStyles.backgroundMargin,
    },
    iconBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        marginTop: Platform.OS === 'ios' ? 40 : 30,
    },
    addButton: {
        alignItems: 'center',
        borderRadius: 25,
        bottom: 30,
        height: 50,
        justifyContent: 'center',
        position: 'absolute',
        right: 30,
        width: 50,
    }
});
