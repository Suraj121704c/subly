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
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp(4),
    borderWidth: wp(0.2),
    borderRadius: wp(2),
    paddingHorizontal: wp(2),
    backgroundColor: Colors.white,
    marginBottom: hp(2),
    paddingVertical: hp(0.4),
    borderColor: Colors.purple,
  },
  flatListContainer: {
    flexGrow: 1,
  },
  headerBtn: {
    flex: 1,
    height: hp(4),
    width: wp(35),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(2),
  },
  headerBtnTxt: {
    fontSize: hp(1.5),
    fontFamily: fonts.bold,
    color: Colors.white,
  },
  headerTxt: {
    fontSize: hp(2.5),
    color: Colors.purple,
    fontFamily: fonts.medium,
    alignSelf: 'center',
    marginBottom: hp(1),
  },
  cardView: {
    backgroundColor: Colors.white,
    marginHorizontal: wp(4),
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    borderRadius: wp(3),
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleTxt: {
    fontSize: hp(1.8),
    fontFamily: fonts.medium,
    color: Colors.purple,
  },
  dayCountTxt: {
    fontSize: hp(1.5),
    fontFamily: fonts.medium,
    color: Colors.black,
    alignSelf: 'flex-end',
    marginTop: hp(0.4),
  },
  durationTxt: {
    fontSize: hp(1.5),
    fontFamily: fonts.medium,
    color: Colors.black,
  },
  descriptionTxt: {
    fontSize: hp(1.8),
    fontFamily: fonts.medium,
    color: Colors.black,
  },
  separator: {
    marginVertical: hp(1),
  },
  startBtn: {
    height: hp(4),
    borderRadius: wp(2),
    overflow: 'hidden',
    flex: 1,
    alignSelf: 'flex-end',
    width: wp(35),
    marginTop: hp(1),
  },
  startBtnTxt: {
    color: Colors.white,
    fontSize: hp(1.5),
    fontFamily: fonts.bold,
  },
});
