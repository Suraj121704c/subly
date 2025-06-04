import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//user-define Import files
import {Route} from './constants';
import BottomTabNavigator from './bottomTabNavigator';

const AfterLoginStack = createNativeStackNavigator();

const AfterLoginCustomerNavigator = () => {
  return (
    <AfterLoginStack.Navigator screenOptions={{headerShown: false}}>
      <AfterLoginStack.Screen
        name={Route.BottomTabNavigator}
        component={BottomTabNavigator}
      />
    </AfterLoginStack.Navigator>
  );
};

export default AfterLoginCustomerNavigator;
