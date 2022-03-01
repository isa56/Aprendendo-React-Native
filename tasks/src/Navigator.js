import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Auth from './screens/Auth';
import TaskList from './screens/TaskList';

const mainRoutes = {
    Auth: {
        name: 'Auth',
        screen: Auth
    },
    Home: {
        name: 'Home',
        screen: TaskList
    }
};

const mainNavigator = createSwitchNavigator(mainRoutes, {
    initialRouteName: 'Auth'
});

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="Home" component={TaskList} />
        </Stack.Navigator>
    );
};

const Navigator = () => {
    return (
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    );
};

export default Navigator;

//export default createAppContainer(mainNavigator);
