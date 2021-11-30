import React from 'react';
import { StyleSheet, View } from 'react-native';

export default (props) => {

    return(
        <View style={style.container}>
            <View style={[style.flagpole, props.bigger ? style.flagpoleBigger : null]} />
            <View style={[style.flag, props.bigger ? style.flagBigger : null]} />
            <View style={[style.base1, props.bigger ? style.base1Bigger : null]} />
            <View style={[style.base2, props.bigger ? style.base2Bigger : null]} />
        </View>
    );
}

const style = StyleSheet.create({

    container: {
        marginTop: 2,
    },

    flagpole: {
        backgroundColor: '#222',
        height: 14,
        marginLeft: 9,
        position: 'absolute',
        width: 2,
    },

    flag: {
        backgroundColor: '#f22',
        height: 5,
        marginLeft: 2,
        position: 'absolute',
        width: 6,
    },

    base1: {
        backgroundColor: '#222',
        height: 2,
        marginLeft: 7,
        marginTop: 10,
        position: 'absolute',
        width: 6,
    },

    base2: {
        backgroundColor: '#222',
        height: 2,
        marginLeft: 5,
        marginTop: 12,
        position: 'absolute',
        width: 10,
    },

    flagpoleBigger: {
        height: 28,
        marginLeft: 16,
        width: 4,
    },

    flagBigger: {
        height: 10,
        marginLeft: 3,
        width: 14,
    },

    base1Bigger: {
        height: 4,
        marginLeft: 12,
        marginTop: 20,
        width: 12,
    },

    base2Bigger: {
        height: 4,
        marginLeft: 8,
        marginTop: 20,
        width: 20,
    }

});