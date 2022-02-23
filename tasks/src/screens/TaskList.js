/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { ImageBackground, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import moment from 'moment';
import 'moment/locale/pt-br';

import todayImage from '../../assets/imgs/today.jpg';
import commonStyles from '../commonStyles';
import Task from '../components/Task';

export default class TaskList extends Component {

    state = {
        tasks: [
            {
                id: Math.random(),
                desc: 'Comprar Livro de React Native',
                estimeAt: new Date(),
                doneAt: new Date(),
            },

            {
                id: Math.random(),
                desc: 'Ler Livro de React Native',
                estimeAt: new Date(),
                doneAt: new Date(),
            },
            {
                id: Math.random(),
                desc: 'Estudar Livro de React Native',
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

        this.setState({ tasks });

    }

    render() {

        const today = moment().locale('pt-br').format('ddd, D [de] MMMM [/] Y');

        return (

            <SafeAreaView style={styles.container}>

                <ImageBackground source={todayImage} style={styles.background}>

                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>

                </ImageBackground>

                <View style={styles.taskList}>

                    <FlatList data={this.state.tasks}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => <Task {...item} toggleTask={this.toggleTask} />}
                    />



                </View>

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
});
