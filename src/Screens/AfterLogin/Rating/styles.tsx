import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {fonts} from '../../../Utils/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: wp(6),
    paddingTop: hp(2),
  },
  ratingContainer: {
    marginHorizontal: wp(5),
    paddingTop: hp(2),
  },
  backBtn: {
    width: wp(9),
    height: wp(9),
    borderRadius: wp(5),
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: wp(4),
    height: wp(4),
    resizeMode: 'contain',
  },
  header: {
    alignItems: 'center',
    marginTop: hp(2),
  },
  logoText: {
    fontSize: hp(2.5),
    fontWeight: '600',
    color: '#111',
  },
  cross: {
    fontWeight: 'bold',
  },
  purple: {
    color: '#9333ea',
  },
  starImage: {
    width: hp(30),
    height: hp(15),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: hp(3),
  },
  title: {
    fontSize: hp(2.7),
    fontFamily: fonts.regular,
    textAlign: 'center',
    color: '#111',
    marginBottom: hp(1),
  },
  subtitle: {
    textAlign: 'center',
    fontSize: hp(2.1),
    color: '#666',
    marginBottom: hp(4),
    marginTop: hp(2),
  },
  testimonialWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: hp(4),
    marginTop: hp(4),
  },
  userImage: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
    marginRight: wp(3),
  },
  testimonialBox: {
    backgroundColor: '#EEEEEE',
    borderRadius: wp(3),
    padding: wp(5),
    flex: 1,
    marginTop: hp(3),
  },
  userName: {
    color: '#9333ea',
    fontSize: hp(1.9),
    fontWeight: '500',
    marginBottom: hp(1),
  },
  testimonialText: {
    fontSize: hp(2.3),
    color: '#222',
    fontFamily: fonts.regular,
  },
  ctaButton: {
    backgroundColor: '#9333ea',
    paddingVertical: hp(1.8),
    borderRadius: wp(10),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: hp(3),
    left: wp(5),
    right: wp(5),
  },
  ctaText: {
    color: '#fff',
    fontSize: hp(2.2),
    fontWeight: '600',
  },
  avatarStack: {
    position: 'absolute',
    right: wp(4),
    flexDirection: 'row',
  },
  avatar1: {
    width: wp(9),
    height: wp(9),
    borderRadius: wp(5),
    borderWidth: 2,
    borderColor: '#fff',
    zIndex: 2,
  },
  avatar2: {
    width: wp(9),
    height: wp(9),
    borderRadius: wp(5),
    borderWidth: 2,
    borderColor: '#fff',
    marginLeft: -wp(3.5),
    zIndex: 1,
  },
  logoImage: {
    width: wp(45),
    height: hp(3),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
