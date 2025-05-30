import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// User-defined imports
import {Colors} from '../../../Utils/colors';
import {fonts} from '../../../Utils/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    paddingHorizontal: wp(5),
    paddingTop: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(5),
  },
  logo: {
    width: wp(40),
    height: hp(5),
    resizeMode: 'contain',
  },
  backIcon: {
    width: hp(4),
    height: hp(4),
    resizeMode: 'contain',
  },
  logoText: {
    fontSize: hp(2.2),
    fontFamily: fonts.bold,
    color: Colors.black,
  },
  logoBold: {
    fontFamily: fonts.bold,
  },
  logoPurple: {
    color: Colors.purple,
  },
  graphImage: {
    width: wp(80),
    height: hp(35),
    marginVertical: hp(5),
    marginHorizontal: wp(5),
  },
  researchLabel: {
    fontSize: hp(1.8),
    fontFamily: fonts.regular,
    color: `${Colors.black}85`,
    marginTop: hp(8),
  },
  researchText: {
    fontSize: hp(2.5),
    fontFamily: fonts.spectralMedium,
    color: Colors.black,
    textAlign: 'center',
  },
  button: {
    backgroundColor: Colors.purple,
    paddingVertical: hp(1.8),
    borderRadius: wp(10),
    width: wp(80),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: hp(4),
  },
  buttonText: {
    fontSize: hp(2),
    fontFamily: fonts.medium,
    color: Colors.white,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
