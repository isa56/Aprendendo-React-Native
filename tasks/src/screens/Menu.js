import React from 'react'
import { Platform, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { CommonActions } from '@react-navigation/native';
import { Gravatar } from 'react-native-gravatar'
import commonStyles from '../commonStyles'

import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome'

export default props => {

    const logout = () => {
        delete axios.defaults.headers.common['Authorization'];
        AsyncStorage.removeItem('userData');
        props.navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'Auth', }, ],
            })
        );
    };

    return (
        <DrawerContentScrollView>
            <View style={styles.header}>
                <Text style={styles.title}>Tarefas</Text>
                <Gravatar style={styles.avatar}
                    options={{
                        email: props.email,
                        secure: true
                    }} />
                <View style={styles.userInfo}>
                    <Text style={styles.name}>
                        {props.name}
                    </Text>
                    <Text style={styles.email}>
                        {props.email}
                    </Text>
                </View>
                <TouchableOpacity onPress={logout}>
                    <View style={styles.logoutIcon}>
                        <Icon name='sign-out' size={30} color='#800' />
                    </View>
                </TouchableOpacity>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#DDD'
    },
    title: {
        color: '#000',
        fontFamily: commonStyles.fontFamily,
        fontSize: 30,
        padding: 10,
        paddingTop: Platform.OS === 'ios' ? 70 : 30,
    },
    avatar: {
        backgroundColor: '#222',
        borderRadius: 30,
        borderWidth: 3,
        margin: 10,
        height: 60,
        width: 60,
    },
    userInfo: {
        alignItems: 'center',
        //marginLeft: 10,
    },
    name: {
        color: commonStyles.colors.mainText,
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        marginBottom: 5,
    },
    email: {
        color: commonStyles.colors.subText,
        fontFamily: commonStyles.fontFamily,
        fontSize: 15,
        marginBottom: 10,
    },
    logoutIcon: {
        marginBottom: 10,
        marginLeft: 10,
    }
})