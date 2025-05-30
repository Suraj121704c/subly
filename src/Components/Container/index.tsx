import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar, View} from 'react-native';

const Container = (props: any) => {
  const {children, statusBarColor, containerColor, barStyle} = props;
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: statusBarColor}}
      edges={['right', 'left', 'top']}>
      <View style={{flex: 1, backgroundColor: containerColor}}>
        <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
        {children}
      </View>
    </SafeAreaView>
  );
};

export default Container;

export const Container2 = (props: any) => {
  const {children, statusBarColor, containerColor} = props;
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: statusBarColor}}
      edges={['right', 'left', 'top']}>
      <View style={{flex: 1, backgroundColor: containerColor}}>{children}</View>
    </SafeAreaView>
  );
};
