import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextInput,
  TextStyle,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//user-defined import files
import {Colors} from '../../Utils/colors';
import {fonts} from '../../Utils/fonts';

interface propsType {
  message: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const NoDataFound = (props: propsType) => {
  const {message, style, textStyle} = props;
  return (
    <View style={[styles.conatiner, style]}>
      <Text style={[styles.txtStyle, textStyle]}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtStyle: {
    color: Colors.black,
    fontSize: hp(1.8),
    fontFamily: fonts.medium,
  },
});

export default NoDataFound;
