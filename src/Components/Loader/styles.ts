import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//user-defined imports
import {Colors} from '../../Utils/colors';
import {fonts} from '../../Utils/fonts';

export const styles = StyleSheet.create({
  spinnerTxt: {
    color: '#000000',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  modalView: {
    backgroundColor: '#00000010',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 100,
    height: hp(100),
    width: wp(100),
  },
  modalInnerView: {
    backgroundColor: Colors.white,
    borderRadius: wp(4),
    width: wp(36),
    height: hp(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderView: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  loadingStyle: {
    position: 'absolute',
    top: hp(2.5),
  },
  processTxt: {
    position: 'absolute',
    bottom: hp(2),
    color: Colors.black,
    fontSize: hp(1.8),
    fontFamily: fonts.medium,
  },
});
