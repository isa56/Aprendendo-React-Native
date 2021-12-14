import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

export default ({ route, navigation }) => {

    const [user, setUser] = useState(route.params ? route.params : {});

    return (

        <View style={style.form} >
            <Text>Name</Text>
            <TextInput
                onChangeText={name => setUser({...user, name})}
                style={style.input}
                placeholder='Informe o Nome'
                value={user.name}
            />

            <Text>E-Mail</Text>
            <TextInput
                onChangeText={email => setUser({...user, email})}
                style={style.input}
                placeholder='Informe o Nome'
                value={user.email}
            />

            <Text>URL do Avatar</Text>
            <TextInput
                onChangeText={avatarUrl => setUser({...user, avatarUrl})}
                style={style.input}
                placeholder='Informe a URL do Avatar'
                value={user.avatarUrl}
            />

            <Button
                icon={<Icon name="save" size={25} color="white" />}
                onPress={() => {
                    navigation.goBack();
                }}
                title="Salvar"
            />

        </View>
    );

}

const style = StyleSheet.create({
    form: {
        padding: 12,
    }, 
    input: {
        borderColor: 'gray',
        borderRadius: 5,
        borderWidth: 1,
        height: 40,
        marginBottom: 15,
    },
})