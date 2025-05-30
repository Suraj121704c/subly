import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors} from '../../../Utils/colors';
import {fonts} from '../../../Utils/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: wp(5),
  },
  header: {
    marginBottom: hp(2),
    marginHorizontal: wp(5),
  },
  logo: {
    width: wp(35),
    height: hp(2.5),
  },
  logoPurple: {
    color: Colors.purple,
  },
  sectionTitle: {
    fontSize: hp(2.5),
    fontFamily: fonts.spectralRegular,
    color: Colors.black,
    marginTop: hp(3),
    marginBottom: hp(1),
  },
  card: {
    backgroundColor: '#f3f4f6',
    borderRadius: wp(4),
    padding: wp(4),
    marginBottom: hp(3),
  },
  listItem: {
    backgroundColor: '#fff',
    borderRadius: wp(3),
    paddingVertical: hp(1.6),
    paddingHorizontal: wp(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp(1.5),
  },
  iconLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIcon: {
    width: wp(5),
    height: wp(5),
    marginRight: wp(3),
    resizeMode: 'contain',
  },
  itemText: {
    fontSize: hp(1.9),
    fontFamily: fonts.regular,
    color: Colors.black,
  },
  itemArrow: {
    fontSize: hp(2.4),
    color: Colors.purple,
  },
  deleteText: {
    fontSize: hp(1.9),
    fontFamily: fonts.regular,
    color: '#ef4444',
  },
  emailText: {
    fontSize: hp(2.1),
    fontFamily: fonts.spectralRegular,
    color: Colors.black,
    marginBottom: hp(1.5),
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#d1d5db',
    marginVertical: hp(1),
  },
});
