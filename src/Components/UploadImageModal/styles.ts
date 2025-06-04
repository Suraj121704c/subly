import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//user-defined Import files
import {Colors} from '../../Utils/colors';
import {fonts} from '../../Utils/fonts';

export const styles = StyleSheet.create({
  modalView: {
    backgroundColor: Colors.transparent,
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalInnerView: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: wp(8),
    borderTopRightRadius: wp(8),
    paddingVertical: hp(4),
  },
  selectPhotoBtnOpacity: {
    alignSelf: 'center',
  },
  selectPhotoBtnTxt: {
    color: Colors.black,
    fontSize: hp(1.8),
    fontFamily: fonts.medium,
  },
  drawLine: {
    backgroundColor: Colors.lightGrey,
    height: wp(0.12),
    marginHorizontal: wp(4),
    marginVertical: hp(2),
  },
});
