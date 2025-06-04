import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ToastProvider} from 'react-native-toast-notifications';

//user-define Import files
import RootNavigation from './src/Navigation/RootNavigation';
import store from './src/Redux/store';
import toastOptions from './src/Helper/toast';

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <Provider store={store}>
          <ToastProvider offset={40} {...toastOptions}>
            <RootNavigation />
          </ToastProvider>
        </Provider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
