import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import styles from '../estilo';

export default (props) => {

    return(
        <View style={style.Container}>
            <Text style={style.Num}>{props.num}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    Container: {
        alignItems: 'center',
        backgroundColor: '#000',
        borderRadius: 35,
        height: 70,
        justifyContent: 'center',
        width: 70,
    },
    Num: {
        color: '#fff',
        fontSize: '12px',
    }
})
