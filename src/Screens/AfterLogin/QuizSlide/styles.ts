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
  innerView: {
    flex: 1,
    marginHorizontal: wp(2),
    marginVertical: hp(1),
  },
  couplePhoto: {
    width: wp(45),
    height: hp(5),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  slideView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginTop: 0,
    marginLeft: wp(2),
  },
  slideStepView: {
    backgroundColor: Colors.purple,
    flex: 1,
    height: hp(0.5),
    borderRadius: wp(2),
    marginHorizontal: hp(0.4),
  },
  questionTxt: {
    color: Colors.black,
    fontSize: hp(2.5),
    fontFamily: fonts.spectralMedium,
    marginTop: hp(8),
    textAlign: 'center',
    width: wp(60),
    alignSelf: 'center',
  },
  continueBtn: {
    backgroundColor: Colors.purple,
    marginHorizontal: wp(4),
    height: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(5),
  },
  continueBtnTxt: {
    color: Colors.white,
    fontSize: hp(1.8),
    fontFamily: fonts.medium,
  },
  radioContainer: {
    marginHorizontal: wp(4),
    marginVertical: hp(1),
    paddingHorizontal: wp(2),
    paddingVertical: hp(1),
    borderRadius: wp(2),
    borderWidth: wp(0.22),
    borderColor: Colors.gray,
  },
  checkBoxBtn: {
    backgroundColor: `${Colors.gray}40`,
    height: hp(5),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(3),
    borderRadius: wp(2),
  },
  checkBoxView: {
    height: wp(6),
    width: wp(6),
    borderRadius: wp(4),
    borderWidth: wp(0.3),
    borderColor: Colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkBoxInnerView: {
    height: wp(4),
    width: wp(4),
    borderRadius: wp(2),
    backgroundColor: Colors.purple,
  },
  ansTxt: {
    color: Colors.black,
    fontSize: hp(1.8),
    fontFamily: fonts.regular,
    marginLeft: wp(2),
  },
  skipQuizBtn: {
    alignSelf: 'center',
    marginTop: hp(1),
  },
  skipQuizBtnTxt: {
    color: Colors.gray,
    fontSize: hp(1.8),
    fontFamily: fonts.regular,
  },
  yesNoView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(2),
    marginHorizontal: wp(16),
    marginVertical: hp(1.4),
  },
  noBtn: {
    backgroundColor: Colors.gray,
    width: wp(25),
    height: hp(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(5),
  },
  yesBtn: {
    backgroundColor: Colors.purple,
    flex: 1,
    height: hp(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(4),
  },
  noBtnTxt: {
    color: Colors.black,
    fontSize: hp(1.6),
    fontFamily: fonts.regular,
  },
  yesBtnTxt: {
    color: Colors.white,
    fontSize: hp(1.6),
    fontFamily: fonts.regular,
  },
  godImg: {
    height: hp(30),
    width: wp(80),
    borderRadius: wp(4),
    resizeMode: 'cover',
    alignSelf: 'center',
    marginTop: hp(8),
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(2),
    paddingHorizontal: wp(2),
  },
  backButton: {
    padding: wp(1),
  },
  backIcon: {
    width: wp(10),
    height: wp(10),
    resizeMode: 'contain',
    borderWidth: wp(0.2),
    borderColor: Colors.gray,
    borderRadius: wp(5),
  },
});
