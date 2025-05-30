import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// user defined imports
import {fonts} from '../../../Utils/fonts';
import {Colors} from '../../../Utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    paddingTop: hp(3),
  },
  logo: {
    width: wp(45),
    height: hp(2.5),
    marginBottom: hp(2),
    resizeMode: 'contain',
  },
  logoPurple: {
    color: Colors.purple,
  },
  image: {
    width: wp(90),
    height: hp(40),
    borderRadius: wp(5),
    resizeMode: 'cover',
    marginBottom: hp(4),
  },
  progressContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: hp(4),
  },
  percentTextContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentText: {
    fontSize: hp(3.4),
    fontFamily: fonts.bold,
    color: Colors.black,
  },
  title: {
    fontSize: hp(2.5),
    fontFamily: fonts.spectralMedium,
    color: Colors.black,
    textAlign: 'center',
    marginBottom: hp(1),
  },
  subTitle: {
    fontSize: hp(1.8),
    fontFamily: fonts.regular,
    color: Colors.gray,
    textAlign: 'center',
    lineHeight: hp(2.8),
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
