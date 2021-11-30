import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import styles from './estilo';
import If from './If';

export default (props) => {

    const usuario = props.usuario || {};

    return (
        <>
        <If>
            <If test={  usuario && Object.keys(usuario).length !== 0  }/>
                <Text style={styles.bigTextStyle}>{usuario.nome} - {usuario.email}</Text>
            </If>
        </>
    );
}