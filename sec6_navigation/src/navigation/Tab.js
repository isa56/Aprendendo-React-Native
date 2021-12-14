import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';


const Tab = createBottomTabNavigator();

export default (props) => {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch(route.name) {
                        case 'TelaA':
                            iconName = focused
                            ? 'ios-flame'
                            : 'ios-flame-outline';
                            break;
                        case 'TelaB':
                            iconName = focused ? 'ios-cafe' : 'ios-cafe-outline';
                            break;
                        case 'TelaC':
                            iconName = focused ? 'ios-cut' : 'ios-cut-outline';
                            break;
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
            initialRouteName="TelaA" >

            <Tab.Screen name="TelaA" component={TelaA} options={{title:'Inicial'}} />
            <Tab.Screen name="TelaB" component={TelaB} options={{title:'Meio'}} />
            <Tab.Screen name="TelaC" component={TelaC} options={{title:'Fim'}} />

        </Tab.Navigator>
    );
}