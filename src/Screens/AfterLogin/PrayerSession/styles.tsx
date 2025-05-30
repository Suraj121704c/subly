import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//user-defined Import files
import {Colors} from '../../../Utils/colors';
import {fonts} from '../../../Utils/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 16,
  },
  content: {
    flexGrow: 1,
  },
  headerView: {
    paddingVertical: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backIcon: {
    width: hp(5),
    height: hp(5),
  },
  bibleView: {
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    paddingBottom: hp(12),
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  focusText: {
    fontSize: hp(2.6),
    color: '#666',
    fontFamily: fonts.spectralMedium,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: `${Colors.black}80`,
    marginBottom: 20,
  },
  subTitle: {
    fontSize: hp(1.8),
    color: Colors.black,
    fontFamily: fonts.spectralMedium,
  },
  questionTxt: {
    fontSize: hp(1.7),
    color: Colors.gray,
    fontFamily: fonts.spectralMedium,
    marginBottom: hp(1),
  },
  startWith: {
    fontSize: hp(2),
    color: Colors.black,
    fontFamily: fonts.spectralMedium,
    marginBottom: hp(1),
  },
  textInput: {
    borderWidth: wp(0.2),
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    borderRadius: wp(2),
    borderColor: Colors.gray,
    height: hp(15),
    textAlignVertical: 'top',
    color: Colors.black,
    fontSize: hp(1.7),
    fontFamily: fonts.spectralMedium,
    padding: 0,
  },
  suggestionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  suggestionButton: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginRight: 8,
    marginBottom: 8,
  },
  suggestionText: {
    fontSize: 14,
    color: '#000',
  },
  submitButton: {
    backgroundColor: '#9333ea',
    borderRadius: wp(10),
    paddingVertical: 12,
    alignItems: 'center',
    position: 'absolute',
    bottom: hp(2),
    left: wp(5),
    right: wp(5),
    width: wp(90),
    alignSelf: 'center',
  },
  submitText: {
    fontSize: hp(1.8),
    color: '#fff',
    fontFamily: fonts.medium,
  },
});
