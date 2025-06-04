import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//user-defined Import files
import {Route} from './constants';
import Login from '../Screens/BeforeLogin/Login';
import OnBoarding from '../Screens/BeforeLogin/OnBoarding';

const BeforeLoginStack = createNativeStackNavigator();

const BeforeLoginNavigator = () => {
  return (
    <BeforeLoginStack.Navigator screenOptions={{headerShown: false}}>
      <BeforeLoginStack.Screen name={Route.OnBoarding} component={OnBoarding} />
      <BeforeLoginStack.Screen name={Route.Login} component={Login} />
    </BeforeLoginStack.Navigator>
  );
};

export default BeforeLoginNavigator;
