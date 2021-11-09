import React from 'react';
import { Text } from 'react-native';
import estilo from './estilo';

export default (props) => {
    console.warn(props);
    let maior = props.valorX;
    let menor = props.valorY;
    if(maior < menor) {
        let aux = maior;
        maior = menor;
        menor = aux;
    }
    return (
        <Text style={estilo.bigTextStyle}> O valor {maior} é maior que o valor {menor}! </Text>
    )
}
