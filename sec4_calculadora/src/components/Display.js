import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';

export default (props) => {

    return(
        <View style={style.display}>
            <Text style={style.displayValue} numberOfLines={1}>{props.value}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    display: {
        alignItems: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.7)',
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    displayValue: {
        color: '#fff',
        fontSize: 60,
    },
});