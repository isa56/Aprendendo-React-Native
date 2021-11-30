import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';
import styles from '../estilo';

export default (props) => {

    return (
        <>
            <Text style={styles.bigTextStyle}>
                {props.num}
            </Text>
            <Button title="Aumentar" onPress={props.funcaoIncrementa}></Button>
            <Button title="Diminuir" onPress={props.funcaoDecrementa}></Button>
        </>
    );
}