import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fonts} from '../../../Utils/fonts';
import {Colors} from '../../../Utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  content: {
    flexGrow: 1,
  },
  headerView: {
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backIcon: {
    width: hp(5),
    height: hp(5),
  },
  questionContainer: {
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  question: {
    fontSize: hp(2.5),
    color: '#666',
    marginBottom: hp(1.5),
    fontFamily: fonts.regular,
    textAlign: 'center',
  },
  questionText: {
    fontSize: hp(2.5),
    color: '#000',
    marginBottom: hp(1.5),
    fontFamily: fonts.spectralMedium,
    textAlign: 'center',
  },
  optionsContainer: {
    marginVertical: hp(1.5),
    borderWidth: wp(0.2),
    paddingHorizontal: wp(2),
    paddingVertical: hp(1),
    borderRadius: wp(2),
    borderColor: Colors.gray,
  },
  optionButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 12,
    marginBottom: 12,
    borderRadius: 8,
  },
  selectedOptionButton: {
    backgroundColor: '#9333ea',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
  slideView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp(5),
    position: 'absolute',
    bottom: hp(8),
  },
  slideStepView: {
    backgroundColor: Colors.purple,
    flex: 1,
    height: hp(0.5),
    borderRadius: wp(2),
    marginHorizontal: hp(0.4),
  },
  nextButton: {
    backgroundColor: '#9333ea',
    height: hp(5),
    alignItems: 'center',
    borderRadius: wp(10),
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    marginHorizontal: wp(5),
    width: wp(90),
    alignSelf: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  subTitle: {
    fontSize: 20,
    color: '#000',
    marginTop: 20,
    marginBottom: 8,
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#9333ea',
    marginBottom: 20,
  },
  finishButton: {
    backgroundColor: '#9333ea',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  finishButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  startButtonIcon: {
    width: hp(4),
    height: hp(4),
    resizeMode: 'contain',
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
});
