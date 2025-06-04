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
  },
  logoImg: {
    height: hp(4),
    width: wp(20),
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: 100,
    marginTop: hp(5),
    marginLeft: wp(4),
  },
  innerContainer: {
    flex: 1,
  },
  carouselContainer: {
    width: wp(100),
    flex: 1,
  },
  carouselView: {
    justifyContent: 'center',
    flex: 1,
  },
  carouselImg: {
    resizeMode: 'cover',
    height: hp(40),
    width: wp(100),
  },
  title: {
    color: Colors.black,
    fontSize: hp(4),
    fontFamily: fonts.bold,
    marginTop: hp(4),
    width: wp(70),
    marginLeft: wp(4),
  },
  descriptionTxt: {
    color: Colors.lightGrey,
    fontSize: hp(2),
    fontFamily: fonts.regular,
    alignSelf: 'center',
    width: wp(90),
    marginTop: hp(2),
  },
});
