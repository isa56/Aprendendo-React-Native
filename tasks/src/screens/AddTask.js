import React, { Component } from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

import commonStyles from '../commonStyles';

const initialState = { desc: '' };

export default class AddTask extends Component {

    state = {
        ...initialState
    };

    saveTask = () => {

    };

    render() {
        return (
            <Modal transparent={true} visible={this.props.isVisible} onRequestClose={this.props.onCancel} animationType='slide'>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.overlay}></View>
                </TouchableWithoutFeedback>

                <View style={styles.container}>

                    <Text style={styles.header}>Nova Tarefa</Text>

                    <TextInput style={styles.input} placeholder="Informe a Descrição" onChangeText={desc => this.setState({ desc })} value={this.state.desc} />

                    <View style={styles.addButtons}>

                        <TouchableOpacity onPress={this.props.onCancel}>
                            <Text style={styles.button}>Cancelar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity  >
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
        flex: 2,
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
})