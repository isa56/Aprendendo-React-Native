import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';
import styles from '../estilo';

import ContadorDisplay from './ContadorDisplay';

export default (props) => {

    const [num, setNum] = useState(0);

    const incrementa = () => setNum(num+1);

    const decrementa = () => setNum(num-1);




    return(
        <>
            <Text style={styles.bigTextStyle}>
                Contador
            </Text>
            <ContadorDisplay num={num} funcaoIncrementa={incrementa} funcaoDecrementa={decrementa} />
        </>
    );
}