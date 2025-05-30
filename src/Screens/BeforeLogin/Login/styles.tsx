import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//user-define Import files
import {fonts} from '../../../Utils/fonts';
import {Colors} from '../../../Utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  couplePhoto: {
    width: wp(90),
    height: hp(50),
    // resizeMode: 'contain',
    alignSelf: 'center',
    borderRadius: wp(5),
  },
  bottomView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },
  coupleBible: {
    height: hp(8),
    resizeMode: 'contain',
    marginBottom: hp(2),
    marginTop: hp(2),
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },
  titleBlack: {
    fontSize: hp(3.5),
    fontFamily: fonts.spectralRegular,
    color: Colors.black,
    textAlign: 'center',
  },
  title: {
    fontSize: hp(4),
    fontFamily: fonts.spectralMedium,
    color: Colors.purple,
  },
  description: {
    fontSize: hp(2.3),
    fontFamily: fonts.regular,
    color: `${Colors.black}80`,
    textAlign: 'center',
    marginTop: hp(2),
  },
  registerBtn: {
    backgroundColor: Colors.purple,
    paddingVertical: hp(2),
    paddingHorizontal: wp(10),
    borderRadius: wp(10),
    position: 'absolute',
    bottom: hp(1),
    width: wp(90),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtnText: {
    color: Colors.white,
    fontSize: hp(2),
    fontFamily: fonts.regular,
  },
  appleLogo: {
    width: wp(5),
    height: hp(2),
    resizeMode: 'contain',
    marginRight: wp(2),
  },
});
