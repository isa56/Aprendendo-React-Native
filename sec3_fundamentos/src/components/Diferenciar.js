import React from 'react';
import { SafeAreaView, StyleSheet, Text, Platform } from 'react-native';
import styles from './estilo';

export default (props) => {

    if (Platform.OS === 'android') {
        return ( <Text>Android</Text> );
    } else if (Platform.OS === 'ios') {
        return ( <Text>IOS</Text> );
    } else {
        return ( <Text>Uai??</Text> );
    }
}