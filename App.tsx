import {Provider} from 'react-redux';
import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import {getApp} from '@react-native-firebase/app';
import {
  AuthorizationStatus,
  getMessaging,
  getToken,
  registerDeviceForRemoteMessages,
  requestPermission,
} from '@react-native-firebase/messaging';
import {LogBox, Text, TextInput} from 'react-native';
import {ToastProvider} from 'react-native-toast-notifications';

//user-define Import files
import store from './src/Redux/store';
import Navigator from './src/Navigation/navigator';
import * as Storage from './src/Services/AsyncStoreConfig';

import {
  createChannels,
  notificationPermission,
  onMessageReceived,
} from './src/Helper/notification';

//@ts-ignore
Text.defaultProps = Text.defaultProps || {};
//@ts-ignore
Text.defaultProps.allowFontScaling = false;
//@ts-ignore
(TextInput as any).defaultProps = {
  ...((TextInput as any).defaultProps || {}),
  allowFontScaling: false,
};
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const App = () => {
  const checkToken = async () => {
    const app = getApp();
    const messaging = getMessaging(app);

    // Ask user for permission
    const authStatus = await requestPermission(messaging);
    const enabled =
      authStatus === AuthorizationStatus.AUTHORIZED ||
      authStatus === AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      try {
        // 🔐 Must call this before getToken
        await registerDeviceForRemoteMessages(messaging);

        const fcmToken = await getToken(messaging);
        if (fcmToken) {
          console.log('✅ FCM Token:', fcmToken);
          await Storage.saveData('fcmToken', fcmToken);
        } else {
          console.log('❌ No FCM token returned');
        }
      } catch (error) {
        console.log('🔥 Error getting token:', error);
      }
    } else {
      console.log('🚫 Notification permission not granted');
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    (async () => {
      await notificationPermission();
      await createChannels();
    })();

    const unsubscribe = messaging().onMessage(onMessageReceived);
    return unsubscribe;
  }, []);

  return (
    <Provider store={store}>
      <ToastProvider
        offset={60}
        successColor="#1fb138"
        warningColor="#f79d1b"
        dangerColor="#fc4b4b">
        <Navigator />
      </ToastProvider>
    </Provider>
  );
};

export default App;
