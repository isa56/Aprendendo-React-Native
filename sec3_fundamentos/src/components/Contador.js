import React, { useState } from 'react';
import { Text, Button } from 'react-native';
import Estilo from './estilo';

export default ({initialValue=0, step=1}) => {

    const [numero, setNumero] = useState(initialValue)

    const inc = () => setNumero(numero + step)
    const dec = () => setNumero(numero - step)

    return(
        <>
            <Text style={Estilo.bigTextStyle}>{numero}</Text>
            <Button title="+" onPress={inc} />
            <Button title="-" onPress={dec} />
        </>
    );
    
}
