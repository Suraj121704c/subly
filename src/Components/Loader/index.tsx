import {View, ActivityIndicator, Modal} from 'react-native';
import React from 'react';

//user-define Import files
import {styles} from './styles';
import {Colors} from '../../Utils/colors';

const LoaderScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.red} />
    </View>
  );
};

export default LoaderScreen;

export const Loading = () => {
  return (
    <View style={styles.modalView}>
      <View style={styles.modalInnerView}>
        <ActivityIndicator size="large" color={Colors.red} />
      </View>
    </View>
  );
};

export const LoadMoreLoading = () => {
  return (
    <View style={styles.loaderView}>
      <ActivityIndicator size="small" color={Colors.red} />
    </View>
  );
};
