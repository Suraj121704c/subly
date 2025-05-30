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
  couplePhoto: {
    width: wp(90),
    height: hp(70),
    borderRadius: wp(5),
    overflow: 'hidden',
    padding: wp(5),
  },
  couplePhotoView: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: wp(5),
  },
  miniImageBackground: {
    flex: 1,
    marginVertical: hp(1),
    borderRadius: wp(4),
    borderWidth: wp(0.3),
    borderColor: Colors.purple,
    paddingVertical: hp(2),
  },
  nextButton: {
    backgroundColor: Colors.purple,
    margin: wp(5),
    paddingVertical: hp(1.8),
    borderRadius: wp(12),
    alignItems: 'center',
    position: 'absolute',
    bottom: hp(2),
    left: 0,
    right: 0,
    width: wp(90),
  },
  nextText: {
    color: '#fff',
    fontSize: hp(2),
    fontFamily: fonts.bold,
  },
  paginationContainer: {
    alignItems: 'center',
  },
  pageText: {
    fontSize: hp(1.8),
    color: Colors.black,
    marginBottom: hp(1),
    textAlign: 'left',
    marginTop: hp(5),
    marginHorizontal: wp(5),
  },
  progressBar: {
    width: wp(90),
    height: 5,
    flexDirection: 'row',
    backgroundColor: '#eee',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressFilled: {
    flex: 1,
    backgroundColor: Colors.purple,
  },

  progressEmpty: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  verseCard: {
    width: wp(90),
    height: hp(60),
    borderRadius: wp(5),
    overflow: 'hidden',
    padding: wp(5),
    justifyContent: 'space-between',
  },
  categoryText: {
    color: Colors.black,
    fontSize: hp(1.8),
    fontFamily: fonts.medium,
    marginBottom: hp(1),
  },
  verseContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  verseText: {
    color: Colors.black,
    fontSize: hp(2.6),
    fontFamily: fonts.spectralMedium,
    textAlign: 'left',
  },
  verseRef: {
    marginTop: hp(2),
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignSelf: 'flex-start',
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.5),
    borderRadius: wp(3),
    overflow: 'hidden',
    color: Colors.black,
    fontSize: hp(1.6),
    fontFamily: fonts.medium,
  },
  shareButton: {
    backgroundColor: Colors.purple,
    paddingVertical: hp(1.2),
    borderRadius: wp(6),
    alignItems: 'center',
    flexDirection: 'row',
    gap: wp(2),
    justifyContent: 'center',
  },
  knowMoreButton: {
    paddingVertical: hp(1.2),
    borderRadius: wp(6),
    alignItems: 'center',
    marginBottom: hp(2),
    backgroundColor: Colors.white,
  },
  shareText: {
    color: Colors.white,
    fontSize: hp(2),
    fontFamily: fonts.medium,
  },
  knowMoreText: {
    color: Colors.black,
    fontSize: hp(2),
    fontFamily: fonts.medium,
  },
  shareIcon: {
    width: hp(3),
    height: hp(3),
  },
  segmentedProgressBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(90),
    marginTop: hp(1),
    gap: wp(2),
  },
  segment: {
    flex: 1,
    height: 6,
    borderRadius: 3,
  },
});
