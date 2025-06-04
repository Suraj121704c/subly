import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//user-defined Import files
import {Colors} from '../../../Utils/colors';
import {fonts} from '../../../Utils/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: wp(5),
    width:wp(50),
    height:hp(4),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.red,
  },
  counterTxt:{
    fontSize:wp(4),
    fontFamily:fonts.bold,
    color:Colors.red,
    marginVertical:hp(2)
  },
  btnTxt:{
    color:Colors.white,
    fontSize:wp(4),
    fontFamily:fonts.bold,
  }
});
