import React from 'react';  // , { Fragment }
import { Text } from 'react-native';
import Estilo from './estilo'

export default props => (
    <React.Fragment>    
        <Text style={Estilo.bigTextStyle}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </React.Fragment>
)

// <Fragment></Fragment> ou <></>