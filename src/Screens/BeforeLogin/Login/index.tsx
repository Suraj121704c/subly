import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import appleAuth from '@invertase/react-native-apple-authentication';
import {useDispatch} from 'react-redux';

//user-defined Import files
import {styles} from './styles';
import {Images} from '../../../Utils/images';
import {supabase} from '../../../Client/superbase';
import {loginAction} from './Controller/action';
import * as Storage from '../../../Services/AsyncStoreConfig';

const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const step = async () => {
      const step = await Storage.getData('step');
      console.log('step', step);
    };
    step();
  }, []);

  async function appleLogin() {
    try {
      // First check if Apple authentication is available
      const isAppleAuthAvailable = await appleAuth.isSupported;
      if (!isAppleAuthAvailable) {
        Alert.alert(
          'Error',
          'Apple authentication is not available on this device',
        );
        return;
      }

      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
      });

      const {identityToken, nonce} = appleAuthRequestResponse;

      if (!identityToken) {
        throw new Error('No identity token received from Apple');
      }

      const fcmToken = await Storage.getData('fcmToken');

      // Sign in with Supabase
      const {data, error} = await supabase.auth.signInWithIdToken({
        provider: 'apple',
        token: identityToken,
        nonce,
      });

      if (error) {
        throw error;
      }

      if (!data?.user) {
        throw new Error('No user data received from Supabase');
      }

      // Update device token if available
      if (fcmToken) {
        try {
          await supabase.from('user_profile').upsert(
            {
              user_id: data.user.id,
              device_token: fcmToken,
            },
            {
              onConflict: 'user_id',
            },
          );
        } catch (profileError) {
          console.warn('Failed to update device token:', profileError);
          // Continue with login even if device token update fails
        }
      }

      // Dispatch login action
      await dispatch(loginAction(data));
    } catch (error: any) {
      console.error('Apple sign-in failed:', error);

      // Handle specific error cases
      if (error.code === 'ERR_CANCELED') {
        // User canceled the login
        return;
      }

      Alert.alert(
        'Login Failed',
        error.message || 'An error occurred during login. Please try again.',
      );
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Image source={Images.couplePhoto} style={styles.couplePhoto} />
        <View style={styles.bottomView}>
          <Image source={Images.coupleBible} style={styles.coupleBible} />
          <View style={styles.titleContainer}>
            <Text style={styles.titleBlack}>Closer to </Text>
            <Text style={styles.title}>God, </Text>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleBlack}>Closer to </Text>
            <Text style={styles.title}>Each Other</Text>
          </View>
          <Text style={styles.description}>
            Read the Bible, pray, and grow in faith — together, one day at a
            time.
          </Text>
        </View>
        <TouchableOpacity style={styles.registerBtn} onPress={appleLogin}>
          <Image source={Images.appleLogo} style={styles.appleLogo} />
          <Text style={styles.loginBtnText}>Continue with Apple</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Login;
