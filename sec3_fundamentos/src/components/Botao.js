import React from 'react';
import { Button } from 'react-native';

function executar() {
    console.warn("Executandooo!");
}

export default props => (
    <>
        <Button
            title={props.title} onPress={executar}
        />
        <Button
            title={props.title+" #2"} onPress={function(){ console.warn("Executando #2 hehe!")}}
        />
        <Button
            title={props.title+" #3"} onPress={() => console.warn("Executando... #3")}
        />
    </>
)