import {View, ActivityIndicator, Text} from 'react-native';
import React from 'react';

//user-define Import files
import {styles} from './styles';
import {Colors} from '../../Utils/colors';

const LoaderScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#000000" />
    </View>
  );
};

export const Loading = () => {
  return (
    <View style={styles.modalView}>
      <View style={styles.modalInnerView}>
        <ActivityIndicator
          size="large"
          color={Colors.purple}
          style={styles.loadingStyle}
        />
        <Text style={styles.processTxt}>Processing...</Text>
      </View>
    </View>
  );
};

export default LoaderScreen;
