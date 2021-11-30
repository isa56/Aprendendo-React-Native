import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Quadrado from './Quadrado';

export default (props) => {

    return (
        <View style={style.FlexV2}>
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
    FlexV2: {
        alignItems: 'flex-end',
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'space-evenly',
        width: '100%',
    }
})