import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

export default (props) => {

    return(
        <View style={[styles.container, props.style]}>
            <Icon name={props.icon} size={20} style={styles.icon} />
            <TextInput {...props} style={styles.input} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#EEE',
        borderRadius: 20,
        flexDirection: 'row',
        height: 40,
        width: '100%',
    },
    icon: {
        color: '#333',
        marginLeft: 10,
    },
    input: {
        marginLeft: 20,
        width: '70%',
    }
})