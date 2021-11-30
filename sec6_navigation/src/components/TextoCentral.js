import React from 'react';
import { Text, View } from 'react-native';
// import styles from './styles';

export default (props) => {

    return(
        <View style={{
            alignItems: 'center',
            backgroundColor: props.bgColor || '#000',
            flex: 1,
            justifyContent: 'center',
        }}>
            <Text style={{
                color: props.textColor || '#fff',
                fontSize: 50,
            }}>
                {props.children}
            </Text>
        </View>
    );
}