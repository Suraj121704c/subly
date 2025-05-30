import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//user-define Import files
import {Colors} from '../../../Utils/colors';
import {fonts} from '../../../Utils/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  coupleBibleImage: {
    height: hp(5.5),
    width: wp(45),
    resizeMode: 'contain',
  },
  innerContainer: {
    flex: 1,
  },
  carouselContainer: {
    width: wp(100),
    padding: wp(2),
    flex: 1,
  },
  carouselView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  carouselImg: {
    resizeMode: 'contain',
    height: hp(40),
    width: wp(80),
  },
  carouselImg2: {
    resizeMode: 'contain',
    height: hp(20),
    width: wp(40),
    alignSelf: 'center',
  },
  carouselImg3: {
    resizeMode: 'contain',
    height: hp(40),
    alignSelf: 'center',
  },
  title: {
    color: Colors.black,
    fontSize: hp(2.5),
    fontFamily: fonts.spectralMedium,
    textAlign: 'center',
    marginBottom: hp(1),
  },
  descriptionTxt: {
    color: `${Colors.black}85`,
    fontSize: hp(1.8),
    fontFamily: fonts.regular,
    width: wp(75),
    textAlign: 'center',
  },
  nextBtn: {
    backgroundColor: Colors.purple,
    marginTop: hp(2),
    height: hp(5),
    width: wp(90),
    alignSelf: 'center',
    borderRadius: wp(5),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(3),
  },
  nextBtnTxt: {
    color: Colors.white,
    fontSize: hp(1.8),
    fontFamily: fonts.bold,
  },
  skipBtn: {
    backgroundColor: Colors.white,
    height: hp(5),
    width: wp(90),
    alignSelf: 'center',
    borderRadius: wp(5),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp(2),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  skipBtnTxt: {
    color: Colors.black,
    fontSize: hp(1.8),
    fontFamily: fonts.bold,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
