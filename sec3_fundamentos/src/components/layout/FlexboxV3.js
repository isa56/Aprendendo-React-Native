import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Quadrado from './Quadrado';

export default (props) => {

    return (
        <View style={style.FlexV3}>
            <Quadrado cor={`#F00`} lado={20} />
            <Quadrado cor={`#FF0`} lado={30} />
            <Quadrado cor={`#0F0`} lado={40} />
            <Quadrado cor={`#0FF`} lado={50} />
            <Quadrado cor={`#00F`} lado={60} />
            <Quadrado cor={`#F0F`} lado={70} />
        </View>
    );
}
const style = StyleSheet.create({
    FlexV3: {
        backgroundColor: '#000',
        flexDirection: 'row',
        // height: 350,
        justifyContent: 'center',
        width: '100%',
    }
})