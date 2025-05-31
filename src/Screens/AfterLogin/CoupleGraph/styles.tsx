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
    paddingVertical: hp(1.5),
    borderRadius: wp(3),
    width: wp(90),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: hp(4),
  },
  buttonText: {
    fontSize: hp(1.8),
    fontFamily: fonts.medium,
    color: Colors.white,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  questionTxt: {
    fontSize: hp(2.2),
    fontFamily: fonts.spectralMedium,
    color: Colors.black,
    marginTop: hp(2),
    textAlign: 'center',
    width: wp(90),
  },
  radioContainer: {
    width: '100%',
    paddingHorizontal: wp(4),
    marginTop: hp(2),
    borderWidth: wp(0.5),
    borderColor: '#F2F2F3',
    borderRadius: wp(2),
    paddingVertical: hp(2),
  },
  checkBoxBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(1.8),
    backgroundColor: '#F2F2F3',
    borderRadius: wp(2),
    paddingHorizontal: wp(2),
    marginBottom: hp(1),
  },
  checkBoxView: {
    width: wp(6),
    height: wp(6),
    borderRadius: wp(3),
    borderWidth: 2,
    borderColor: Colors.purple,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp(3),
  },
  checkBoxInnerView: {
    width: wp(3),
    height: wp(3),
    borderRadius: wp(1.5),
    backgroundColor: Colors.purple,
  },
  ansTxt: {
    fontSize: hp(1.6),
    fontFamily: fonts.regular,
    color: Colors.black,
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    paddingTop: hp(4),
    paddingHorizontal: wp(4),
  },
  mostEffectiveTxt: {
    fontSize: hp(1.5),
    fontFamily: fonts.bold,
    color: Colors.purple,
  },
  mostEffectiveView: {
    backgroundColor: '#AA27F01A',
    paddingHorizontal: wp(2),
    paddingVertical: hp(0.5),
    borderRadius: wp(4),
  },
});
