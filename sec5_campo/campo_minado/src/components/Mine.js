import React from 'react';
import { StyleSheet, View } from 'react-native';

export default (props) => {

    return(
        <View style={style.container}>
            <View style={style.coreMine} />
            <View style={style.line} />
            <View style={[style.line, {transform: [{ rotate: '45deg' }] } ]} />
            <View style={[style.line, {transform: [{ rotate: '90deg' }] } ]} />
            <View style={[style.line, {transform: [{ rotate: '135deg' }] } ]} />

        </View>
    );
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    coreMine: {
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 10,
        height: 14,
        justifyContent: 'center',
        width: 14,
    },

    line: {
        backgroundColor: 'black',
        borderReadius: 3,
        height: 14,
        position: 'absolute',
        width: 14,
    },

});