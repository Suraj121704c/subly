import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//user-define Import files
import {fonts} from '../../Utils/fonts';
import {Colors} from '../../Utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(3),
  },
  input: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(2),
    textAlign: 'center',
    fontSize: hp(1.8),
    fontFamily: fonts.bold,
    color: Colors.black,
    backgroundColor: Colors.white,
    borderWidth: wp(0.2),
    borderColor: Colors.lightGrey,
  },
});
