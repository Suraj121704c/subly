import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// user-defined imports
import {Colors} from '../../../Utils/colors';
import {fonts} from '../../../Utils/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  imageHeader: {
    width: '100%',
    height: hp(55),
  },
  content: {
    paddingHorizontal: wp(5),
    alignItems: 'center',
    marginTop: hp(2),
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(6),
  },
  crossIcon: {
    width: wp(40),
    height: hp(2.5),
    resizeMode: 'contain',
    marginRight: wp(2),
  },
  logoText: {
    fontFamily: fonts.bold,
    fontSize: hp(2.3),
    color: Colors.black,
  },
  logoPurple: {
    color: Colors.purple,
  },
  questionText: {
    fontFamily: fonts.spectralMedium,
    fontSize: hp(2.5),
    marginTop: hp(1),
    textAlign: 'center',
    color: Colors.black,
    marginBottom: hp(4),
  },
  button: {
    backgroundColor: Colors.purple,
    paddingVertical: hp(1.8),
    borderRadius: wp(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(80),

    // iOS Shadow
    shadowColor: 'purple',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 1,
    shadowRadius: 20,

    // Android Shadow
    elevation: 10,
  },

  buttonText: {
    fontFamily: fonts.bold,
    fontSize: hp(2),
    color: Colors.white,
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  shareButton: {
    backgroundColor: '#EDEDED',
    paddingVertical: hp(0.5),
    borderRadius: wp(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(70),
    alignSelf: 'center',
    marginBottom: hp(2),
  },
  shareText: {
    color: Colors.black,
    fontFamily: fonts.regular,
    fontSize: hp(2),
    textAlign: 'center',
  },
  shareIcon: {
    width: wp(5),
    height: hp(5),
    resizeMode: 'contain',
    marginRight: wp(2),
    tintColor: Colors.black,
  },
});
