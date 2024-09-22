import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './Routes';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Profile} component={Profile} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
