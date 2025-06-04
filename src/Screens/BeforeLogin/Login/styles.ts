import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//user-define Import files
import {Colors} from '../../../Utils/colors';
import {fonts} from '../../../Utils/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  innerContainer: {
    marginHorizontal: wp(4),
    flex: 1,
  },
  headerTxt: {
    color: Colors.black,
    fontSize: hp(2.5),
    fontFamily: fonts.bold,
    width: wp(60),
    marginTop: hp(8),
  },
  errorTxt: {
    color: Colors.red,
    fontSize: hp(1.25),
    fontFamily: fonts.medium,
    marginTop: hp(0.2),
  },
  headerTxt2: {
    color: Colors.lightGrey,
    fontFamily: fonts.medium,
    fontSize: hp(1.8),
  },
  phoneInputContainer: {
    backgroundColor: Colors.white,
    borderRadius: wp(2),
    width: wp(92),
    height: hp(5),
    paddingHorizontal: 0,
    borderWidth: wp(0.2),
    borderColor: Colors.lightGrey,
    marginTop: hp(10),
  },
  phoneTxtContainer: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    backgroundColor: Colors.white,
    borderTopRightRadius: wp(5),
    borderBottomRightRadius: wp(5),
  },
  phoneCodeTxtStyle: {
    padding: 0,
    paddingHorizontal: wp(2),
    fontSize: hp(1.6),
  },
  phoneInputStyle: {
    height: hp(5),
    fontSize: hp(1.8),
  },
  loginBtn: {
    height: hp(5),
    borderRadius: wp(5),
    overflow: 'hidden',
    marginTop: hp(3),
  },
  loginBtnTxt: {
    color: Colors.white,
    fontSize: hp(1.8),
    fontFamily: fonts.bold,
  },
  signUpBtnView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(1),
  },
  signUpBtnTxt: {
    color: Colors.red,
    fontSize: hp(1.8),
  },
  loginWithView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(8),
    marginHorizontal: wp(4),
  },
  drawLine: {
    backgroundColor: Colors.lightGrey,
    flex: 1,
    height: wp(0.1),
  },
  orLoginWithTxt: {
    marginHorizontal: wp(4),
    color: Colors.lightGrey,
    fontSize: hp(1.5),
    fontFamily: fonts.medium,
  },
  appleIcn: {
    height: hp(6),
    width: wp(12),
    resizeMode: 'contain',
  },
  socialBtnView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: wp(4),
    marginVertical: hp(8),
  },
});
