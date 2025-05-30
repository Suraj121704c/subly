import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//user-define Import files
import {fonts} from '../../Utils/fonts';
import {Colors} from '../../Utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.transparent,
  },
  innerView: {
    backgroundColor: Colors.white,
    width: wp(90),
    borderRadius: wp(4),
  },
  closeBtn: {
    height: wp(7),
    width: wp(7),
    borderRadius: wp(4),
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: wp(2),
  },
  closeImg: {
    height: wp(5),
    width: wp(5),
    resizeMode: 'contain',
    tintColor: Colors.purple,
  },
  headerView: {
    backgroundColor: Colors.purple,
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: wp(4),
    borderTopRightRadius: wp(4),
  },
  summaryView: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
  },
  headerTxt: {
    color: Colors.white,
    fontSize: hp(1.8),
    fontFamily: fonts.medium,
  },
  questionTxt: {
    color: Colors.black,
    fontFamily: fonts.medium,
    fontSize: hp(1.8),
  },
  ansView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(1),
  },
  ansLabelTxt: {
    color: Colors.gray,
    fontFamily: fonts.regular,
    fontSize: hp(1.8),
  },
  ansTxt: {
    color: Colors.green,
    fontFamily: fonts.medium,
    fontSize: hp(1.8),
    marginLeft: wp(2),
  },
});
