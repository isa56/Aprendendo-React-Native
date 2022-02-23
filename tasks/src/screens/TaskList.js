/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Alert, ImageBackground, FlatList, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import moment from 'moment';
import 'moment/locale/pt-br';
import Icon from 'react-native-vector-icons/FontAwesome';

import todayImage from '../../assets/imgs/today.jpg';
import commonStyles from '../commonStyles';
import Task from '../components/Task';
import AddTask from './AddTask';

export default class TaskList extends Component {

    state = {
        showDoneTasks: true,
        visibleTasks: [],
        showAddTaskModal: false,
        tasks: [
            {
                id: Math.random(),
                description: 'Comprar Livro de React Native',
                estimeAt: new Date(),
                doneAt: new Date(),
            },

            {
                id: Math.random(),
                description: 'Ler Livro de React Native',
                estimeAt: new Date(),
                doneAt: new Date(),
            },
        ],
    };

    toggleTask = (taskId) => {
        const tasks = [...this.state.tasks];
        tasks.forEach(task => {
            if (task.id === taskId) {
                task.doneAt = task.doneAt ? null : new Date();
            };
        });

        this.setState({ tasks }, this.filterTasks);
    };

    componentDidMount = () => {
        this.filterTasks();
    }

    toggleFilter = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks }, this.filterTasks);
    };


    filterTasks = () => {

        let visibleTasks = null;

        if (this.state.showDoneTasks) {
            visibleTasks = [...this.state.tasks];
        } else {
            const pending = (task) => task.doneAt === null;
            visibleTasks = this.state.tasks.filter(this.isPending);
        }

        this.setState({ visibleTasks });
    };

    addTask = (newTask) => {
        if (!newTask.desc || !newTask.desc.trim()) {
            Alert.alert("Dados Inválidos", "Descrição não informada!");
            return;
        };

        if (!newTask.date) {
            newTask.date = new Date();
        };

        const tasks = [...this.state.tasks];

        tasks.push({
            id: Math.random(),
            description: newTask.description,
            estimeAt: newTask.date
        });

        this.setState({ tasks, showAddTaskModal: false}, this.filterTasks);

    };

    render() {

        const today = moment().locale('pt-br').format('ddd, D [de] MMMM [/] Y');

        return (

            <SafeAreaView style={styles.container}>
                <AddTask isVisible={this.state.showAddTaskModal} onCancel={() => this.setState({ showAddTaskModal: false })} onSave={this.addTask} />

                <ImageBackground source={todayImage} style={styles.background}>

                    <View style={styles.iconBar} >
                        <TouchableOpacity onPress={this.toggleFilter} >
                            <Icon name={this.state.showDoneTasks ? 'eye' : 'eye-slash'} size={20} color={commonStyles.colors.secondary} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>

                </ImageBackground>

                <View style={styles.taskList}>

                    <FlatList data={this.state.visibleTasks}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => <Task {...item} toggleTask={this.toggleTask} />}
                    />

                </View>

                <TouchableOpacity
                    style={[styles.addButton,
                    { backgroundColor: commonStyles.colors.today }]}
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
        justifyContent: 'flex-end',
        marginHorizontal: 30,
        marginTop: Platform.OS === 'ios' ? 40 : 30,
    },
    addButton: {
        alignItems: 'center',
        backgroundColor: commonStyles.colors.today,
        borderRadius: 25,
        bottom: 30,
        height: 50,
        justifyContent: 'center',
        position: 'absolute',
        right: 30,
        width: 50,
    }
});
