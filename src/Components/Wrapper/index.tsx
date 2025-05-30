import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

//user-define Import files
import {styles} from './styles';

const Wrapper = ({children}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default Wrapper;
