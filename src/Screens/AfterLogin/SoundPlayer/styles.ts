import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    paddingVertical: hp(1.2),
  },
  headerText: {
    fontSize: wp(4),
    color: '#a6a6a6',
  },
  backicon: {
    width: wp(2),
    height: hp(2),
  },
  icon: {
    width: wp(6),
    height: wp(6),
  },
  coverContainer: {
    width: wp(90),
    height: wp(90),
    alignSelf: 'center',
    marginVertical: hp(2.5),
    borderRadius: wp(5),
    overflow: 'hidden',
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },
  trackInfo: {
    paddingHorizontal: wp(5),
    marginBottom: hp(2.5),
  },
  trackTitle: {
    fontSize: wp(6),
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: hp(1),
  },
  trackSubtitle: {
    fontSize: wp(4),
    color: '#6B7280',
  },
  progressContainer: {
    paddingHorizontal: wp(5),
  },
  progressBar: {
    width: '100%',
    height: hp(5),
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(-1.2),
  },
  timeText: {
    fontSize: wp(3.5),
    color: '#6B7280',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(10),
    marginTop: hp(2.5),
  },
  playIcon: {
    width: hp(8),
    height: hp(8),
    borderRadius: hp(8),
  },
});
