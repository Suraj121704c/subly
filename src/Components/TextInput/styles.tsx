import {StyleSheet} from 'react-native';

//user-define Import files
import {fonts} from '../../Utils/fonts';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  icnStyle: {
    resizeMode: 'contain',
  },
  input: {
    fontFamily: fonts.medium,
    flex: 1,
    padding: 0,
  },
});
