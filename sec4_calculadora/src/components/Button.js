import React from 'react';
import { SafeAreaView, StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native';

export default (props) => {

    const stylesButton = [style.button];

    if(props.isDouble) stylesButton.push(style.buttonDouble);
    if(props.isTriple) stylesButton.push(style.buttonTriple);
    if(props.isOperation) stylesButton.push(style.operationButton);

    return(
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    );
}

const style = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor:'#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    operationButton: {
        backgroundColor: '#E5890A',
        color: '#fff',
    },
    buttonDouble: {
        width: 2 * Dimensions.get('window').width / 4,
    },
    buttonTriple: {
        width: 3 * Dimensions.get('window').width / 4,
    }
});
