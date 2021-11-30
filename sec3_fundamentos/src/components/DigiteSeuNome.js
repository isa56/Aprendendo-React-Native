import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';
import styles from './estilo';

export default (props) => {

    const [nome, setNome] = useState('Teste');

    // let nome = 'Teste';

    return(
        <SafeAreaView>
            <Text style={styles.bigTextStyle}>Digite seu nome:</Text>
            <TextInput
                placeholder="Digite seu Nome"
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
            <Text>{nome}</Text>
        </SafeAreaView>
    );
}