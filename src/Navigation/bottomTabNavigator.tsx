import React from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//import User-define files
import {fonts} from '../Utils/fonts';
import {Route} from './constants';
import Home from '../Screens/AfterLogin/Home';
import {Images} from '../Utils/images';
import Earning from '../Screens/AfterLogin/Earning';
import {Colors} from '../Utils/colors';
import Account from '../Screens/AfterLogin/Account';
import MyOrders from '../Screens/AfterLogin/MyOrders';

const BottomStack = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const CustomTab = (props: any) => {
    const {focused, icon, title} = props;
    return (
      <View style={styles.bottomBtnView}>
        <Image
          source={icon}
          style={{
            ...styles.bottomImg,
            tintColor: focused ? Colors.black : Colors.lightGrey,
          }}
        />
        <Text
          style={{
            ...styles.bottomBtnTxt,
            color: focused ? Colors.black : Colors.lightGrey,
          }}>
          {title}
        </Text>
      </View>
    );
  };
  return (
    <BottomStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: Platform.OS == 'android' ? hp(8) : hp(10),
        },
      }}>
      <BottomStack.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <CustomTab
              focused={focused}
              icon={Images.bottomHome}
              title="Home"
            />
          ),
        }}
        name={Route.Home}
        component={Home}
      />
      <BottomStack.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <CustomTab
              focused={focused}
              icon={Images.bottomWallet}
              title="My Orders"
            />
          ),
        }}
        name={Route.MyOrders}
        component={MyOrders}
      />
      <BottomStack.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <CustomTab
              focused={focused}
              icon={Images.bottomWallet}
              title="Earnings"
            />
          ),
        }}
        name={Route.Earning}
        component={Earning}
      />
      <BottomStack.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <CustomTab
              focused={focused}
              icon={Images.account}
              title="Account"
            />
          ),
        }}
        name={Route.Account}
        component={Account}
      />
    </BottomStack.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  bottomBtnView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(2),
  },
  bottomImg: {
    height: hp(3),
    width: wp(6),
    resizeMode: 'contain',
  },
  bottomBtnTxt: {
    fontFamily: fonts.bold,
    fontSize: hp(1.6),
  },
});
