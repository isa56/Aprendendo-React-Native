import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';
import styles from '../estilo';

export default (props) => {

    function gerarNumero(min, max) {
        let fator = (max - min + 1);
        console.warn(fator);
        let aleatorio = (Math.random() * fator) + min;
        return parseInt(aleatorio);
    }

    return(
        <>
            <Button
                title="Executar"
                onPress={function(){ 
                    const n = gerarNumero(props.min, props.max);
                    props.funcao(n, "O valor é: ");
                }}
            />
        </>
    );
}