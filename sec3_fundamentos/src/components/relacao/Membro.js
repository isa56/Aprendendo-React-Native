import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import styles from '../estilo';

export default (props) => {

    return(
        <>
            <Text style={styles.bigTextStyle}>
                {props.nome} {props.sobrenome}
            </Text>
        </>
    );
}