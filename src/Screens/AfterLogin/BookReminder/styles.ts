import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// user defined imports
import {Colors} from '../../../Utils/colors';
import {fonts} from '../../../Utils/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  backButton: {
    position: 'absolute',
    top: hp(8),
    left: wp(5),
  },
  contentContainer: {
    alignItems: 'center',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  bellImg: {
    height: hp(10),
    width: wp(20),
    resizeMode: 'contain',
  },
  description: {
    fontSize: 16,
    color: Colors.black,
    textAlign: 'center',
  },
  chooseTimeBtn: {
    borderRadius: wp(2),
    backgroundColor: Colors.gray2,
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    marginTop: hp(2),
    borderWidth: wp(0.2),
    borderColor: Colors.purple,
  },
  startBtn: {
    height: hp(5),
    borderRadius: wp(2),
    overflow: 'hidden',
    marginVertical: hp(2),
    marginHorizontal: wp(8),
  },
  startBtnTxt: {
    color: Colors.white,
    fontSize: hp(1.5),
    fontFamily: fonts.bold,
  },
});
