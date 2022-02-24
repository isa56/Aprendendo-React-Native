import React, { Component } from 'react';
import { Modal, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import commonStyles from '../commonStyles';

const initialState = { description: '', date: new Date(), showDatePicker: false };

export default class AddTask extends Component {

    state = {
        ...initialState
    };

    saveTask = () => {
        const newTask = {
            description: this.state.description,
            date: this.state.date,
        }

        this.props.onSave && this.props.onSave(newTask);

        this.setState({ ...initialState });

    }

    getDatePicker = () => {
        let datePicker = <DateTimePicker
            value={this.state.date}
            onChange={(_, date) => this.setState({ date, showDatePicker: false })}
            mode='date' />

        const dateString = moment(this.state.date).format('D/MM/YYYY');

        if (Platform.OS === 'android') {
            datePicker = (
                <View>
                    <TouchableOpacity onPress={() => this.setState({ showDatePicker: true })}>
                        <Text style={styles.dateLabel}>Escolha a Data:</Text>
                        <Text style={styles.date}> {dateString} </Text>
                    </TouchableOpacity>
                    {this.state.showDatePicker && datePicker}
                </View>
            );
        }

        return datePicker;

    }

    render() {
        return (
            <Modal transparent={true} visible={this.props.isVisible} onRequestClose={this.props.onCancel} animationType='slide'>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.overlay}></View>
                </TouchableWithoutFeedback>

                <View style={styles.container}>

                    <Text style={styles.header}>Nova Tarefa</Text>

                    <TextInput style={styles.input} placeholder="Informe a Descrição" onChangeText={(description) => this.setState({ description })} value={this.state.description} />

                    {this.getDatePicker()}

                    <View style={styles.addButtons}>

                        <TouchableOpacity onPress={this.props.onCancel}>
                            <Text style={styles.button}>Cancelar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.saveTask} >
                            <Text style={styles.button}>Salvar</Text>
                        </TouchableOpacity>

                    </View>

                </View>

                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.overlay}></View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        flex: 1,
    },
    container: {
        backgroundColor: '#FFF',
    },
    header: {
        backgroundColor: commonStyles.colors.today,
        color: commonStyles.colors.secondary,
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        padding: 15,
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#FFF',
        borderColor: '#E3E3E3',
        borderRadius: 6,
        borderWidth: 1,
        fontFamily: commonStyles.fontFamily,
        height: 40,
        margin: 15,
        width: '90%',
    },
    addButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    button: {
        color: commonStyles.colors.today,
        margin: 20,
        marginRight: 30,
    },
    dateLabel: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 16,
        marginLeft: 15,
    },
    date: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 14,
        marginLeft: 15,
    }
})