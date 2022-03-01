import React, { Component } from 'react';
import { Alert, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { CommonActions } from '@react-navigation/native';

import AuthInput from '../components/AuthInput';

import commonStyles from '../commonStyles';
import backgroundImage from '../../assets/imgs/login.jpg';

import { server, showError, showSuccess } from '../common';

const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    stageNew: false,
}

export default class Auth extends Component {

    state = {
        ...initialState
    }

    signinOrSignup = () => {
        if (this.state.stageNew) {
            this.signup();
        } else {
            this.signin();
        }
    };

    signup = async () => {
        try {
            await axios.post(`${server}/signup`, {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword,
            });

            showSuccess("Usuário cadastrado!");
            this.setState({ ...initialState });

        } catch (e) {
            showError(e);
        }
    };

    signin = async () => {

        try {
            const res = await axios.post(`${server}/signin`, {
                email: this.state.email,
                password: this.state.password,
            });

            AsyncStorage.setItem('userData', JSON.stringify(res.data));

            axios.defaults.headers.common['Authorization'] = `bearer ${res.data.token}`;

            this.props.navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        {
                            name: 'Home',
                            params: res.data,
                        },
                    ],
                })
            );

        } catch (e) {
            showError(e);
        }

    };


    render() {
        
        const validations = [];
        validations.push(this.state.email && this.state.email.includes('@'));
        validations.push(this.state.password && this.state.password.length >= 6);

        if (this.state.stageNew) {
            validations.push(this.state.name && this.state.name.trim().length >= 3);
            validations.push(this.state.password === this.state.confirmPassword);
        }

        const validForm = validations.reduce((t, a) => t && a);

        return (

            <ImageBackground source={backgroundImage} style={styles.background}>

                <Text style={styles.title}>
                    Tarefas
                </Text>

                <View style={styles.formContainer}>

                    <Text style={styles.subtitle}>
                        {this.state.stageNew ? 'Cria a sua conta' : 'Informe a sua conta'}
                    </Text>


                    {this.state.stageNew &&
                        <AuthInput icon='user' placeholder='Nome'
                            value={this.state.name}
                            style={styles.input}
                            onChangeText={name => this.setState({ name })} />
                    }
                    <AuthInput icon='at' placeholder='E-mail'
                        value={this.state.email}
                        style={styles.input}
                        onChangeText={email => this.setState({ email })} />
                    <AuthInput icon='lock' placeholder='Senha'
                        value={this.state.password}
                        style={styles.input} secureTextEntry={true}
                        onChangeText={password => this.setState({ password })} />
                    {this.state.stageNew &&
                        <AuthInput icon='asterisk'
                            placeholder='Confirmação de Senha'
                            value={this.state.confirmPassword}
                            style={styles.input} secureTextEntry={true}
                            onChangeText={confirmPassword => this.setState({ confirmPassword })} />
                    }

                    <TouchableOpacity onPress={this.signinOrSignup} disabled={!validForm}>
                        <View style={[styles.button, validForm ? {} : { backgroundColor: '#AAA' }]}>
                            <Text style={styles.buttonText}>
                                {this.state.stageNew ? 'Criar conta' : 'Entrar'}
                            </Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => this.setState({ stageNew: !this.state.stageNew })} >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                {!this.state.stageNew ? 'Criar conta' : 'Voltar'}
                            </Text>
                        </View>
                    </TouchableOpacity>

                </View>

            </ImageBackground>

        )
    }

}

const styles = StyleSheet.create({
    background: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        width: '100%',
    },
    title: {
        color: commonStyles.colors.secondary,
        fontFamily: commonStyles.fontFamily,
        fontSize: 70,
        marginBottom: 10,
    },
    formContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 20,
        width: '90%',
    },
    subtitle: {
        color: '#FFF',
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#FFF',
        marginTop: 15,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#080',
        borderRadius: 20,
        marginTop: 20,
        padding: 10,
    },
    buttonText: {
        color: '#FFF',
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
    },

})