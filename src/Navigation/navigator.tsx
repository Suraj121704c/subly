import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';

//user-define Import files
import NavigationService from './NavigationService';
import {Route} from './constants';
import BeforeLoginNavigator from './beforeLoginNavigator';
import AfterLoginNavigator from './afterLoginNavigator';
import LoaderScreen, {Loading} from '../Components/Loader';
import {authenticationAction} from '../Redux/Actions/authenticationAction';

const RootStack = createNativeStackNavigator();

const Navigator = () => {
  const loginRecord = useSelector((state: any) => state.login);
  const {isLoading} = useSelector((state: any) => state?.loadingReducer);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(authenticationAction());
  }, []);

  const linking = {
    prefixes: [
      'https://couplebiblebackend-production.up.railway.app',
      'coupleBible://',
    ],
    config: {
      screens: {
        AppStack: '/',
        AuthStack: '/',
      },
    },
  };

  return (
    <NavigationContainer
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
      linking={linking}>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        {loginRecord?.hideProgress && (
          <RootStack.Screen name={Route.Loader} component={LoaderScreen} />
        )}
        {!loginRecord?.hideProgress && loginRecord?.loginData ? (
          <RootStack.Screen
            name={Route.AppStack}
            component={AfterLoginNavigator}
          />
        ) : (
          <RootStack.Screen
            name={Route.AuthStack}
            component={BeforeLoginNavigator}
          />
        )}
      </RootStack.Navigator>
      {isLoading && <Loading />}
    </NavigationContainer>
  );
};

export default Navigator;
