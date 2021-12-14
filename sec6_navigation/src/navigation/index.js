import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Stack from './Stack';
import Tab from './Tab';

export default (props) => {

    return(
        <SafeAreaView style={{flex: 1}} >
            <NavigationContainer initialRouteName="TelaA">
                <Tab />
                {/* <Stack /> */}
            </NavigationContainer>
        </SafeAreaView>
    );
}