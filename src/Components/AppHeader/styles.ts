import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//user-define Import files
import {Colors} from '../../Utils/colors';
import {fonts} from '../../Utils/fonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    justifyContent: 'space-between',
  },
  backIcnOpacity: {
    backgroundColor: Colors.white,
    height: wp(10),
    width: wp(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(5),
    borderWidth: wp(0.22),
    borderColor: Colors.red,
  },
  backImg: {
    height: hp(2.5),
    width: wp(5),
    resizeMode: 'contain',
  },
  gradientContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(2),
    alignItems: 'center',
    marginTop: Platform.OS == 'android' ? hp(1) : hp(0),
    marginBottom: hp(1.2),
  },
  titleStyle: {
    color: Colors.white,
    fontSize: hp(2.2),
    fontFamily: fonts.semiBold,
  },
  userImg: {
    height: wp(12),
    width: wp(12),
    resizeMode: 'cover',
    marginLeft: wp(2),
  },
  callBtn: {
    height: wp(8),
    width: wp(8),
    borderRadius: wp(4),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  callImg: {
    height: wp(4),
    width: wp(4),
    resizeMode: 'contain',
    tintColor: Colors.blueColor,
  },
});
