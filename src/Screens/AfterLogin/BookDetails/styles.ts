import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// user-defined imports
import {Colors} from '../../../Utils/colors';
import {fonts} from '../../../Utils/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: wp(4),
  },
  title: {
    fontSize: hp(2.2),
    color: Colors.black,
    fontFamily: fonts.medium,
  },
  duration: {
    fontSize: hp(1.5),
    color: Colors.purple,
    fontFamily: fonts.medium,
  },
  description: {
    fontSize: hp(1.6),
    color: Colors.black,
    fontFamily: fonts.medium,
  },
  startBtn: {
    height: hp(4),
    borderRadius: wp(2),
    overflow: 'hidden',
    width: wp(25),
    marginVertical: hp(2),
    alignSelf: 'center',
  },
  startBtnTxt: {
    color: Colors.white,
    fontSize: hp(1.5),
    fontFamily: fonts.bold,
  },
  dayCard: {
    backgroundColor: Colors.white,
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    borderRadius: wp(3),
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  separator: {
    marginVertical: hp(1),
  },
  dayLabel: {
    fontSize: hp(1.7),
    color: Colors.purple,
    fontFamily: fonts.medium,
  },
  dayTitle: {
    fontSize: hp(1.5),
    color: Colors.black,
    fontFamily: fonts.medium,
  },
  dayLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  completedContainer: {
    backgroundColor: Colors.purple,
    paddingHorizontal: wp(2),
    paddingVertical: hp(0.5),
    borderRadius: wp(2),
  },
  completedText: {
    color: Colors.white,
    fontSize: hp(1.2),
    fontFamily: fonts.medium,
  },
});
