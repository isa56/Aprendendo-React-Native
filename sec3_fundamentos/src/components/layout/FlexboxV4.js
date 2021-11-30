import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Quadrado from './Quadrado';

export default (props) => {

    return (
        <View style={style.FlexV4}>
            <View style={style.View0} />
            <View style={style.View1} />
            <View style={style.View2} />

        </View>
    );
}
const style = StyleSheet.create({
    FlexV4: {
        backgroundColor: '#000',
        flexGrow: 1,
        width: 100,
    },

    View0: {
        backgroundColor: '#36c9a7',
        height: 200,
    },

    View1: {
        backgroundColor: '#ff801a',
        flexGrow: 3,
    },

    View2: {
        backgroundColor: '#801aff',
        flexGrow: 1,
    }
})