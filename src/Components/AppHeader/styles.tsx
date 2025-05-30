import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//user-define Import files
import {fonts} from '../../Utils/fonts';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backIconOpacity: {
    height: hp(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    height: hp(5),
    width: wp(10),
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: hp(2.5),
    color: '#000000',
    fontFamily: fonts.bold,
    flex: 1,
    textAlign: 'center',
  },
  rightBtnTxt: {
    fontSize: hp(1.9),
    color: '#000000',
    fontFamily: fonts.bold,
  },
});
