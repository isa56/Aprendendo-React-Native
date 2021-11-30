import React from 'react';
import { Text } from 'react-native';

function generateRandomNumber(min, max) {
    let randomNumber = Math.floor((Math.random()) * (max-min+1) + min);
    return randomNumber;
}

export default (props) => <Text>O valor aleatório é {generateRandomNumber(props.min, props.max)} </Text>