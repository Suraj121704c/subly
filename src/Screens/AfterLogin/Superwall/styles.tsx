import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { fonts } from '../../../Utils/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topImage: {
    width: '100%',
    height: hp(55),
  },
  bottomContainer: {
    marginTop: -hp(6),
    borderTopLeftRadius: wp(8),
    borderTopRightRadius: wp(8),
    paddingHorizontal: wp(8),
    paddingTop: hp(6),
    flex: 1,
  },
  title: {
    fontSize: hp(2.8),
    textAlign: 'center',
    marginBottom: hp(3),
    fontFamily:fonts.spectralMedium,
    color: '#000',
  },
  bulletWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(1.8),
  },
  bulletIcon: {
    width: wp(4.5),
    height: wp(4.5),
    resizeMode: 'contain',
    marginRight: wp(3),
  },
  bulletText: {
    fontSize: hp(1.9),
    color: '#333',
    flexShrink: 1,
  },
  priceText: {
    color: '#9333ea',
    fontSize: hp(1.8),
    alignSelf:"center",
    marginVertical:hp(2)
  },
  ctaButton: {
    backgroundColor: '#9333ea',
    paddingVertical: hp(1.8),
    alignItems: 'center',
    borderRadius: wp(6),
  },
  ctaText: {
    color: '#fff',
    fontSize: hp(2.2),
    fontWeight: '600',
  },
});
