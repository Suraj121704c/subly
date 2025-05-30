import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// user-defined Import files
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 20,
    color: '#000',
    marginTop: 20,
    marginBottom: 8,
  },
  scoreText: {
    fontSize: hp(2.6),
    fontFamily: fonts.regular,
    color: Colors.black,
    marginBottom: 20,
  },
  finishButton: {
    backgroundColor: '#9333ea',
    paddingVertical: hp(1.8),
    alignItems: 'center',
    borderRadius: wp(10),
    position: 'absolute',
    bottom: hp(4),
    left: 0,
    right: 0,
    marginHorizontal: wp(5),
    width: wp(90),
    alignSelf: 'center',
  },
  finishButtonText: {
    fontSize: hp(1.8),
    fontFamily: fonts.regular,
    color: Colors.white,
  },

  quizCompletionContainer: {
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
  },
  completionImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  completionImage: {
    width: hp(10),
    height: hp(10),
    alignSelf: 'center',
  },
  completionText: {
    fontSize: hp(3.1),
    fontFamily: fonts.spectralMedium,
    color: '#000',
    marginTop: hp(1.8),
  },
  completionSubText: {
    fontSize: hp(1.8),
    fontFamily: fonts.medium,
    color: `${Colors.black}80`,
    marginBottom: hp(1.8),
  },
  resultCard: {
    borderRadius: 12,
    paddingVertical: hp(2),
    elevation: 3,
    marginBottom: 20,
    backgroundColor: '#F7F7F7',
    marginHorizontal: wp(4),
    height: hp(45),
  },

  stats: {
    marginVertical: hp(2.8),
  },
  statText: {
    fontSize: hp(2.2),
    fontFamily: fonts.medium,
    color: Colors.gray,
    marginBottom: hp(1.8),
  },
  playAgainButton: {
    borderWidth: 1,
    borderColor: '#9333ea',
    paddingVertical: hp(1.8),
    borderRadius: wp(10),
    marginBottom: hp(2.8),
    marginHorizontal: wp(4),
  },
  shareButton: {
    backgroundColor: '#cccccc',
    paddingVertical: hp(1.8),
    borderRadius: wp(10),
    marginHorizontal: wp(4),
    marginTop: hp(10),
  },
  buttonText: {
    fontSize: hp(1.8),
    fontFamily: fonts.regular,
    color: Colors.black,
    textAlign: 'center',
  },
  scoreContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: wp(4),
  },
  scoreText2: {
    fontSize: 24,
    color: '#9333ea',
    marginBottom: 20,
    fontFamily: fonts.spectralItalic,
  },
  statContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: wp(4),
  },
  drawLine: {
    backgroundColor: Colors.gray,
    height: wp(0.1),
  },
  summeryBtn: {
    marginLeft: wp(4),
  },
  summeryBtnTxt: {
    color: Colors.purple,
    fontFamily: fonts.medium,
    fontSize: hp(1.8),
    textDecorationLine: 'underline',
    textDecorationColor: Colors.purple,
  },
});
