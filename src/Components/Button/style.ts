import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  icon: {
    height: hp(4),
    width: wp(8),
    resizeMode: 'contain',
  },
});
