import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import PassoStack from '../components/PassoStack';

const Stack = createNativeStackNavigator();

export default (props) => {


    return(

        <Stack.Navigator
            /*screenOptions={{headerShown: false}} */>

            <Stack.Screen 
                // component={TelaA}
                name="TelaA"
                options={{title:'Tela A - Informações Iniciais'}}>
                    {props => (
                        <PassoStack {...props} avancar="TelaB">
                            <TelaA />
                        </PassoStack>
                    )}
            </Stack.Screen>

            <Stack.Screen
                //component={TelaB}
                name="TelaB">
                    {props => (
                        <PassoStack {...props} avancar="TelaC" voltar avancarParam={2000}>
                            <TelaB />
                        </PassoStack>
                    )}

            </Stack.Screen>

            <Stack.Screen
            // component={TelaC}
            name="TelaC" >
                {props => (
                    <PassoStack {...props} voltar avancar="TelaC" avancarParam={props.avancarParam}>
                        <TelaC {...props} />
                    </PassoStack>
                )}
            </Stack.Screen>
        </Stack.Navigator>
    );
}