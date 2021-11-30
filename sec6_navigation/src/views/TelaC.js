import React from 'react';
import { Text } from 'react-native';
import TextoCentral from '../components/TextoCentral';

export default (props) => {

    const route = props.route || {params: {numero: 0}}

    return(
        <>
            <TextoCentral bgColor="#9932cd">
                Tela C - {props.route.params.avancarParam ? props.route.params.avancarParam : props.route.params.numero}
            </TextoCentral>
        </>
    );
}