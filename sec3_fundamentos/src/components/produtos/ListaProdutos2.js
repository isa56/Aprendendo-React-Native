import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import styles from '../estilo';

import produtos from './produtos';

export default (props) => {

    const renderProdutos = ( {  item: p } ) => {
        return <Text key={p.id}> {p.id}) {p.nome} R$ {p.preco}</Text>
    }

    return(
        <>
            <Text style={styles.bigTextStyle}>Lista de Produtos 2!</Text>
            
            <FlatList
                data={produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={renderProdutos}
            />
        </>
    );
}