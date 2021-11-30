import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import styles from '../estilo';

import produtos from './produtos';

export default (props) => {

    function obterLista() {
        return produtos.map(p => {
            return <Text key={p.id}> {p.id}) {p.nome} -- R$ {p.preco}</Text>
        });
    }

    return(
        <>
            <Text style={styles.bigTextStyle}>Lista de Produtos</Text>
            
            {obterLista()}
        </>
    );
}