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
    backgroundColor: '#FFFFFF',
  },
  btnOpacity: {
    backgroundColor: 'green',
    height: hp(4),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp(5),
    marginVertical: hp(1),
    borderRadius: wp(4),
  },
  feedBackBtn: {
    marginHorizontal: wp(2),
    borderRadius: wp(4),
  },
  gradientStyle: {
    borderRadius: wp(4),
    paddingHorizontal: wp(10),
    paddingVertical: hp(1),
  },
  feedBackBtnView: {
    flexDirection: 'row',
  },
  rocketImg: {
    height: hp(2),
    width: wp(4),
    resizeMode: 'contain',
    marginTop: hp(0.3),
    marginRight: wp(2),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: wp(5),
    marginVertical: hp(1),
  },
  btn: {
    color: '#FFFFFF',
    fontFamily: fonts.bold,
    fontSize: hp(1.6),
  },
  postCounting: {
    fontFamily: fonts.bold,
    color: '#000000',
    fontSize: hp(2),
    alignSelf: 'center',
  },
  internalContainer: {
    paddingHorizontal: wp(5),
    flex: 1,
  },
  couplePhoto: {
    width: wp(45),
    height: hp(2.5),
    resizeMode: 'contain',
  },
  card: {
    backgroundColor: '#f9f8ff',
    borderRadius: wp(3),
    padding: wp(4),
    marginBottom: hp(2),
    marginTop: hp(2),
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(0.5),
  },
  title: {
    fontSize: hp(2.2),
    fontFamily: fonts.spectralMedium,
    color: Colors.black,
  },
  subTitle: {
    color: '#666',
    fontSize: hp(1.7),
    marginBottom: hp(1),
    fontFamily: fonts.spectralMedium,
  },
  linkIcon: {
    fontSize: hp(2.5),
    color: '#a855f7',
  },
  verseBox: {
    backgroundColor: '#f4edff',
    padding: wp(4),
    borderRadius: wp(2),
  },
  verseText: {
    fontSize: hp(2.5),
    color: Colors.black,
    textAlign: 'left',
    fontFamily: fonts.spectralRegular,
    marginBottom: hp(2),
  },
  progressCircle: {
    backgroundColor: '#e9d5ff',
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressText: {
    color: '#9333ea',
    fontWeight: 'bold',
  },
  progressBar: {
    height: 6,
    borderRadius: 3,
    backgroundColor: '#e5e7eb',
    marginVertical: hp(1),
    overflow: 'hidden',
  },
  progressFill: {
    width: '33%',
    height: '100%',
    backgroundColor: '#9333ea',
  },
  primaryButton: {
    backgroundColor: '#9333ea',
    borderRadius: wp(3),
    paddingVertical: hp(1.2),
    alignItems: 'center',
    marginTop: hp(1),
  },
  secondaryButton: {
    // backgroundColor: '#ddd6fe',
    backgroundColor: Colors.purple,
    borderRadius: wp(3),
    paddingVertical: hp(1),
    alignItems: 'center',
    marginTop: hp(1),
  },
  buttonText: {
    color: Colors.white,
    fontFamily: fonts.medium,
    fontSize: hp(1.7),
  },
  feedBackBtnTxt: {
    color: Colors.white,
    fontSize: hp(1.6),
    fontFamily: fonts.medium,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: hp(2),
    fontWeight: '600',
    marginVertical: hp(1),
  },
  miniImageBackground: {
    marginVertical: hp(1),
    borderRadius: wp(4),
    borderWidth: wp(0.3),
    borderColor: Colors.purple,
  },
  bigImageBackground: {
    borderRadius: wp(5),
    overflow: 'hidden',
  },
  missionCard: {
    borderRadius: wp(5),
    paddingVertical: hp(1),
    paddingHorizontal: wp(5),
    marginBottom: hp(0.5),
  },
  dailyCard: {
    backgroundColor: '#256CBD',
    borderRadius: wp(10),
    paddingVertical: hp(1),
    paddingHorizontal: wp(5),
    marginTop: hp(1.5),
    marginBottom: hp(0.5),
  },
  dailyQuizCard: {
    paddingHorizontal: wp(5),
    marginTop: hp(1.5),
    marginBottom: hp(2),
  },
  missionTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(0.5),
    marginTop: hp(1),
  },
  missionTitle: {
    fontSize: hp(1.9),
    fontFamily: fonts.medium,
    color: Colors.black,
  },
  dailyTitle: {
    fontSize: hp(1.9),
    fontFamily: fonts.regular,
    color: Colors.black,
  },
  missionTime: {
    fontSize: hp(1.7),
    color: Colors.black,
    fontFamily: fonts.regular,
  },
  dailyView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(2),
  },
  dailyTime: {
    fontSize: hp(1.7),
    color: Colors.black,
    fontFamily: fonts.regular,
  },
  dailyText: {
    fontSize: hp(2),
    color: Colors.black,
    textAlign: 'center',
    fontFamily: fonts.spectralMedium,
    marginBottom: hp(1),
  },
  quizText: {
    fontSize: hp(2.2),
    color: Colors.black,
    textAlign: 'left',
    fontFamily: fonts.spectralMedium,
    marginTop: hp(1),
    marginBottom: hp(1),
  },
  shareIcon: {
    width: hp(5),
    height: hp(5),
    borderRadius: hp(5),
    resizeMode: 'contain',
  },
  checkIcon: {
    width: hp(4),
    height: hp(4),
    resizeMode: 'contain',
  },
  circleIcon: {
    width: hp(2),
    height: hp(2),
    resizeMode: 'contain',
  },
  progressBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: hp(1),
    gap: wp(2),
  },

  progressSegment: {
    flex: 1,
    height: 6,
    borderRadius: 3,
  },
  missionContainer: {
    marginTop: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(2),
  },
  missionText: {
    color: Colors.black,
    fontSize: hp(2),
    fontFamily: fonts.regular,
  },
  tickIcon: {
    width: hp(3),
    height: hp(3),
    resizeMode: 'contain',
  },
});
