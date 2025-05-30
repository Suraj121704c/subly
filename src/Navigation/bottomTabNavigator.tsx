import React, {useEffect, useState} from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Superwall from '@superwall/react-native-superwall';

//import User-define files
import {fonts} from '../Utils/fonts';
import {Route} from './constants';
import {Images} from '../Utils/images';
import Home from '../Screens/AfterLogin/Home';
import {Colors} from '../Utils/colors';
import Profile from '../Screens/AfterLogin/Profile';
import Plans from '../Screens/AfterLogin/Plans';
import BibleVersions from '../Screens/AfterLogin/BibleVersion';

const BottomStack = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const [isHomeScreenVisible, setIsHomeScreenVisible] = useState(true);

  // useEffect(() => {
  //   const checkAndShowPaywall = async () => {
  //     try {
  //       await Superwall.configure({
  //         apiKey: 'pk_da187f1ba33d54d5151202eb779374da8436c614259127ff',
  //       });

  //       const status = await Superwall.shared.getSubscriptionStatus();

  //       if (status.status !== 'ACTIVE') {
  //         await Superwall.shared.register({
  //           placement: 'campaign_trigger',
  //           handler: {
  //             onPresent: info => console.log('Paywall shown:', info.name),
  //             onDismiss: async () => {
  //               const updatedStatus =
  //                 await Superwall.shared.getSubscriptionStatus();
  //               if (updatedStatus.status === 'ACTIVE') {
  //                 console.log('User subscribed after dismiss');
  //               }
  //             },
  //             onError: err => console.error('Paywall error:', err),
  //             onSkip: reason => {
  //               console.warn('Skipped:', reason);
  //               // setIsHomeScreenVisible(true);
  //             },
  //             onDismissHandler: () => {
  //               console.log('dismissed');
  //               setIsHomeScreenVisible(true);
  //             },
  //           },
  //         });
  //       } else {
  //         console.log('User is already subscribed');
  //         setIsHomeScreenVisible(true);
  //       }
  //     } catch (err) {
  //       console.error('[Superwall] Error during flow:', err);
  //     }
  //   };

  //   checkAndShowPaywall();
  // }, []);

  const CustomTab = (props: any) => {
    const {focused, icon, iconStyle} = props;
    return (
      <View
        style={[
          styles.bottomBtnView,
          {backgroundColor: focused ? '#F6E7FE' : Colors.white},
        ]}>
        <Image
          source={icon}
          style={{
            ...iconStyle,
            tintColor: focused ? Colors.purple : Colors.gray,
          }}
        />
        <Text
          style={[
            styles.bottomBtnTxt,
            {color: focused ? Colors.purple : Colors.gray},
          ]}>
          {props?.label}
        </Text>
      </View>
    );
  };

  return (
    <>
      {isHomeScreenVisible && (
        <BottomStack.Navigator
          initialRouteName={Route.Home}
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              height: Platform.OS == 'android' ? hp(8) : hp(13),
            },
          }}>
          <BottomStack.Screen
            options={{
              tabBarIcon: ({focused}) => (
                <CustomTab
                  focused={focused}
                  icon={Images.home}
                  iconStyle={styles.bottomImg}
                  label="Today"
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
                  icon={Images.tactic}
                  iconStyle={styles.bottomImg}
                  label="Plans"
                />
              ),
            }}
            name={Route.Plans}
            component={Plans}
          />
          <BottomStack.Screen
            options={{
              tabBarIcon: ({focused}) => (
                <CustomTab
                  focused={focused}
                  icon={Images.book}
                  iconStyle={styles.bottomImg}
                  label="Bible"
                />
              ),
            }}
            name={Route.Bible}
            component={BibleVersions}
          />

          <BottomStack.Screen
            options={{
              tabBarIcon: ({focused}) => (
                <CustomTab
                  focused={focused}
                  icon={Images.profile}
                  iconStyle={styles.bottomImg}
                  label="Profile"
                />
              ),
            }}
            name={Route.Profile}
            component={Profile}
          />
        </BottomStack.Navigator>
      )}
    </>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  bottomBtnView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(1),
    paddingHorizontal: wp(5),
    borderRadius: wp(10),
    marginBottom: hp(1),
  },
  bottomImg: {
    width: hp(2.5),
    height: hp(2.5),
    resizeMode: 'cover',
  },
  homeTab: {
    height: hp(3),
    width: wp(6),
    resizeMode: 'contain',
  },
  bottomBtnTxt: {
    fontFamily: fonts.bold,
    fontSize: hp(1.5),
    color: Colors.gray,
  },
});
