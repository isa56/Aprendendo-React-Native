import React from 'react';
import { Text } from 'react-native';
import TextoCentral from '../components/TextoCentral';

export default (props) => {

    const r = props.route;
    const numero = r && r.params && r.params.numero ? r.numero : 0;


    return(
        <>
            <TextoCentral bgColor="#9932cd">
                {/* Tela C - {props.route.params.avancarParam ? props.route.params.avancarParam : props.route.params.numero} */}
                Tela C - {numero}
            </TextoCentral>
        </>
    );
}