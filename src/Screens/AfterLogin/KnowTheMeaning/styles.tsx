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
    backgroundColor: '#fff',
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
    fontSize: hp(2),
    fontFamily: fonts.regular,
    color: Colors.black,
  },
  nextButton: {
    backgroundColor: Colors.purple,
    marginHorizontal: wp(5),
    paddingVertical: hp(1.8),
    borderRadius: wp(12),
    alignItems: 'center',
    width: wp(90),
    alignSelf: 'center',
    marginTop: hp(3),
  },
  nextText: {
    color: '#fff',
    fontSize: hp(2),
    fontFamily: fonts.bold,
  },
  contentView: {
    marginHorizontal: wp(5),
    marginTop: hp(2),
  },
  verseText: {
    fontSize: hp(2.4),
    fontFamily: fonts.spectralMedium,
    color: Colors.black,
    marginBottom: hp(1.5),
  },
  tagContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#eee',
    borderRadius: wp(4),
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.5),
    marginBottom: hp(2),
  },
  tagText: {
    fontSize: hp(1.8),
    color: Colors.black,
    fontFamily: fonts.medium,
  },
  sectionTitle: {
    fontSize: hp(2),
    color: '#999',
    fontFamily: fonts.medium,
    marginTop: hp(2),
  },
  paragraph: {
    fontSize: hp(1.9),
    color: '#333',
    fontFamily: fonts.regular,
    marginTop: hp(1),
    lineHeight: hp(3),
  },
  bulletPoint: {
    fontSize: hp(1.9),
    color: '#333',
    fontFamily: fonts.regular,
    marginTop: hp(1),
    lineHeight: hp(3),
  },
});
