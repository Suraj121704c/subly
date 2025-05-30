import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// user defined imports
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
    paddingBottom: 20,
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
  quizContainer: {
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
  },
  backButton: {
    marginTop: 20,
    marginBottom: 10,
  },
  backText: {
    fontSize: 24,
    color: '#000',
  },
  title: {
    fontSize: hp(2.2),
    color: Colors.gray,
    marginBottom: 10,
    fontFamily:fonts.regular
  },
  subTitle: {
    fontSize: hp(2.6),
    fontFamily: fonts.spectralMedium,
    color: Colors.black,
    marginBottom: hp(1),
    textAlign: 'center',
  },
  description: {
    fontSize: hp(1.9),
    fontFamily: fonts.regular,
    color: `${Colors.black}80`,
    marginBottom: hp(1),
    textAlign: 'center',
    width: wp(80),
    alignSelf: 'center',
  },
  rulesContainer: {
    backgroundColor: '#FBFBFB',
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    borderRadius: wp(2),
    marginVertical: hp(5),
    borderWidth: 1,
    borderColor: '#AA27F0',
  },
  rulesTitle: {
    fontSize: 18,
    color: '#000',
    fontFamily:fonts.spectralMedium,
    marginBottom: 8,
  },
  rulesText: {
    fontSize: 16,
    color: '#666',
  },
  selectDifficultyText: {
    fontSize: 18,
    color: '#000',
    marginBottom: 12,
    fontFamily:fonts.spectralMedium
  },
  difficultyButtonsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  difficultyButton: {
    backgroundColor: '#F1F1F1',
    paddingVertical: hp(1),
    paddingHorizontal: wp(5),
    marginRight: wp(2),
    borderRadius: wp(5),
    flexDirection:"row",
    alignItems:"center"
  },
  tickImg:{
    height:hp(2),
    width:wp(4),
    resizeMode:"contain"
  },
  selectedDifficultyButton: {
    backgroundColor: '#9333ea',
  },
  difficultyButtonText: {
    fontSize: hp(1.8),
    fontFamily: fonts.regular,
    color: Colors.black,
    marginLeft:wp(2)
  },
  selectedDifficultyButtonText: {
    color: '#fff',
  },
  startButton: {
    backgroundColor: '#9333ea',
    borderRadius: wp(10),
    height:hp(6),
    alignItems: 'center',
    position: 'absolute',
    bottom: hp(2),
    left: wp(5),
    right: wp(5),
    width: wp(90),
    alignSelf: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
  },
  startButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  startButtonIcon: {
    height: hp(4),
    width: hp(4),
  },
});
