import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import TelaD from '../views/TelaD';


const Drawer = createDrawerNavigator();

export default (props) => {

    return(
        
        <Drawer.Navigator initialRouteName="TelaA" >

            <Drawer.Screen name="TelaA" component={TelaA} /> 
            <Drawer.Screen name="TelaB" component={TelaB} /> 
            <Drawer.Screen name="TelaC" component={TelaC} /> 
            <Drawer.Screen name="TelaD" component={TelaD} /> 

        </Drawer.Navigator>

    );
}

// export default createAppContainer(Drawer);