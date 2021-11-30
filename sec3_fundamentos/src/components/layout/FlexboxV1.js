import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Quadrado from './Quadrado';

export default (props) => {

    return (
        <View style={style.FlexV1}>
            <Quadrado cor={`#F00`} />
            <Quadrado cor={`#FF0`} />
            <Quadrado cor={`#0F0`} />
            <Quadrado cor={`#0FF`} />
            <Quadrado cor={`#00F`} />
            <Quadrado cor={`#F0F`} />
        </View>
    );
}

const style = StyleSheet.create({
    FlexV1: {
        backgroundColor: '#000',
        flexGrow: 1,
        justifyContent: 'space-between',
    }
})