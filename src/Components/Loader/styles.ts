import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//user-define Import files
import {Colors} from '../../Utils/colors';

export const styles = StyleSheet.create({
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
    paddingHorizontal: wp(12),
    paddingVertical: hp(5),
    borderRadius: wp(4),
  },
  loaderView: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
});
