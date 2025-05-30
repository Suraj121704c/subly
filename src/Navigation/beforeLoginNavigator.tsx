import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//user-defined Import files
import LoginScreen from '../Screens/BeforeLogin/Login';
import {Route} from './constants';
import Register from '../Screens/BeforeLogin/Register';
import QuizSlide from '../Screens/AfterLogin/QuizSlide';
import Intro from '../Screens/BeforeLogin/Intro';
import ImageSllider from '../Screens/AfterLogin/ImageSlider';
import CoupleGraph from '../Screens/AfterLogin/CoupleGraph';
import AnimatedCouple from '../Screens/AfterLogin/AnimatedCouple';
import IntoScreen from '../Screens/AfterLogin/IntoScreen';

const BeforeLoginStack = createNativeStackNavigator();

const BeforeLoginNavigator = () => {
  return (
    <BeforeLoginStack.Navigator screenOptions={{headerShown: false}}>
      <BeforeLoginStack.Screen name={Route.Login} component={LoginScreen} />
      <BeforeLoginStack.Screen name={Route.Register} component={Register} />
    </BeforeLoginStack.Navigator>
  );
};

export default BeforeLoginNavigator;
