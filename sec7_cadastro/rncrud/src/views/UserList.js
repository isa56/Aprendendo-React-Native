import React, { useContext } from 'react';
import { FlatList, View, StyleSheet, Text, Alert } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Avatar, Button, Icon } from 'react-native-elements/';
import UsersContext from '../context/UsersContext';

// import users from '../Data/users';

export default (props) => {

    const { state, dispatch } = useContext(UsersContext)

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja mesmo excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    dispatch( {
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: 'Não',
            },
        ])
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem>
                <ListItem.Content>
                    <Avatar source={{ uri: user.avatarUrl }} />
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <Button
                    onPress={() => {
                        props.navigation.navigate('UserForm', user)
                    }}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={() => { confirmUserDeletion(user) }}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </ListItem>
        )
    }

    return (
        <View>

            <FlatList
                data={state.users}
                keyExtractor={user => user.id.toString()}
                renderItem={getUserItem}
            />

        </View>
    );
}