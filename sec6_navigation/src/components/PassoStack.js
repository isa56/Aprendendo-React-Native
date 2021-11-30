import React from 'react';
import { Button, Text, View } from 'react-native';

export default (props) => {

    return(
        <View style={{flex: 1}}>

            <View>
                {props.avancar 
                    ? <Button
                        onPress={() => { /*props.navigation.navigate(props.avancar)*/ props.navigation.push(
                            props.avancar,
                            props.avancarParam || { numero: parseInt(Math.random() * 100)}
                            ) }}
                        title="Avançar" />
                    : false
                }
                {props.voltar
                    ? <Button
                        onPress={() => { props.navigation.goBack(props.voltar) }}
                        title="Voltar" />
                    : false
                }

            </View>

            <View style={{flex: 1}}>
                {props.children}
            </View>

        </View>
    );
}