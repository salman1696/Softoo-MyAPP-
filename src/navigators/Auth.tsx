import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// @refresh reset
const AuthNavigator = () => {
    return (
        //add auth screens here
        <Stack.Navigator screenOptions={{ headerShown: false }}>

        </Stack.Navigator>
    );
};

export default AuthNavigator;
