import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Estilo from '../estilo'

export default (props) => {

    return(
        <>
            <Text style={Estilo.bigTextStyle}>{props.a} || {props.b}</Text>
        </>
    );
}

