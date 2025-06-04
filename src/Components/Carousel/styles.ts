import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//user-defined import files
import {Colors} from '../../Utils/colors';
import {fonts} from '../../Utils/fonts';

export const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(5),
    marginHorizontal: wp(4),
  },
  loginBtnView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  signUpBtn: {
    height: hp(5),
    width: wp(28),
    borderRadius: wp(2),
    overflow: 'hidden',
  },
  signUpBtnTxt: {
    color: Colors.white,
    fontSize: hp(1.6),
    fontFamily: fonts.bold,
  },
  loginBtn: {
    height: hp(5),
    width: wp(28),
    borderRadius: wp(2),
    overflow: 'hidden',
    marginLeft: wp(4),
    borderWidth: wp(0.2),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.lightGrey2,
  },
  loginBtnTxt: {
    color: Colors.lightGrey,
    fontSize: hp(1.6),
    fontFamily: fonts.bold,
  },
  indicatorView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.6,
  },
});
