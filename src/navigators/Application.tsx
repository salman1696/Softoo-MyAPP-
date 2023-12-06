import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { Startup } from '../screens';
import { useTheme } from '../hooks';
import MainNavigator from './Main';
import { ApplicationStackParamList } from '../../@types/navigation';
import { Login } from '../screens';
import AuthNavigator from './Auth';

const Stack = createStackNavigator<ApplicationStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme();
  const { colors } = NavigationTheme;

  const navigationRef = useNavigationContainerRef();


  return (
    <NavigationContainer theme={NavigationTheme} ref={navigationRef}>

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Startup" component={Startup} />

        <Stack.Screen name="Main" component={MainNavigator} />
        <Stack.Screen name="Auth" component={AuthNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
