import React, { Component } from 'react';
import { Alert, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';

import AuthInput from '../components/AuthInput';

import commonStyles from '../commonStyles';
import backgroundImage from '../../assets/imgs/login.jpg';

import { server, showError, showSuccess} from '../common';

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
            Alert.alert("Sucesso!", "Logar");

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
            this.setState({ stageNew: false })

        } catch (e) {
            showError(e);
        }
    };



    render() {

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
                        <AuthInput icon='user' placeholder='Nome' value={this.state.name} style={styles.input} onChangeText={(name) => this.setState({ name })} />
                    }
                    <AuthInput icon='at' placeholder='E-Mail' value={this.state.email} style={styles.input} onChangeText={(email) => this.setState({ email })} />
                    <AuthInput icon='lock' placeholder='Senha' value={this.state.password} style={styles.input} onChangeText={(password) => this.setState({ password })} secureTextEntry={true} />
                    {this.state.stageNew &&
                        <AuthInput icon='lock' placeholder='Confirmar a Senha' value={this.state.confirmPassword} style={styles.input} onChangeText={(confirmPassword) => this.setState({ confirmPassword })} secureTextEntry={true} />
                    }

                    <TouchableOpacity onPress={this.signinOrSignup}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                {this.state.stageNew ? 'Criar conta' : 'Entrar'}
                            </Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => this.setState({stageNew: !this.state.stageNew})} >
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
        padding: 10,
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