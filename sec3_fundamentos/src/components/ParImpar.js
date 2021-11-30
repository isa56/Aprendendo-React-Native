import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import styles from './estilo';

export default ({ num = 0 }) => {

    // if(props.num % 2 === 0)
    //     return( <Text style={styles.bigTextStyle}>Par</Text>);
    // else
    //     return( <Text style={styles.bigTextStyle}>Ímpar</Text>);

    return (
    <>
            <Text>O resultado é:</Text>

            {num % 2 === 0
                ? <Text style={styles.bigTextStyle}>Par</Text>
            : <Text style={styles.bigTextStyle}>Ímpar</Text>
    }
    </>
    );

}