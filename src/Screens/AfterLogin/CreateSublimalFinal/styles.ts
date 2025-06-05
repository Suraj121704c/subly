import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//user-defined import files
import {Colors} from '../../../Utils/colors';
import {fonts} from '../../../Utils/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(4),
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    paddingVertical: hp(1.2),
  },
  headerText: {
    fontSize: wp(4),
    color: '#a6a6a6',
  },
  backicon: {
    width: wp(2),
    height: hp(2),
  },
  trackInfo: {
    paddingHorizontal: wp(5),
    marginBottom: hp(2.5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepText: {
    fontSize: hp(2),
    color: '#7B1CFF',
    backgroundColor: '#F3ECFE',
    borderRadius: hp(2),
    paddingHorizontal: hp(1),
    paddingVertical: hp(0.2),
    marginRight: wp(2),
  },
  trackTitle: {
    fontSize: hp(2.5),
    fontWeight: '600',
    color: '#1F2937',
  },
  uploadBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp(2),
  },
  uploadButton: {
    width: wp(60),
    height: hp(25),
    borderWidth: 2,
    borderColor: '#C7A7FF',
    borderRadius: wp(5),
    backgroundColor: '#F8F4FF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#C7A7FF',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  uploadIcon: {
    width: wp(10),
    height: wp(10),
    color: '#B085F7',
    marginBottom: hp(1),
  },
  uploadText: {
    fontSize: wp(4.5),
    color: '#B085F7',
    fontWeight: '600',
  },
  optionalText: {
    fontSize: wp(3.5),
    color: '#B085F7',
    marginTop: hp(0.5),
    opacity: 0.6,
  },
  titleContainer: {
    marginTop: hp(2),
    marginBottom: hp(1),
    paddingHorizontal: wp(5),
  },
  titleLabel: {
    fontSize: wp(4),
    color: '#1F2937',
    fontWeight: '500',
    marginBottom: hp(1),
  },
  inputText: {
    backgroundColor: '#F3F4F6',
    borderRadius: wp(2),
    paddingHorizontal: wp(3),
    height: hp(5),
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(1),
    paddingHorizontal: wp(5),
    padding: 0,
    color: Colors.black,
    fontSize: hp(1.8),
    fontFamily: fonts.medium,
  },
  checkbox: {
    width: wp(5),
    height: wp(5),
    borderWidth: 1.5,
    borderColor: '#B085F7',
    borderRadius: wp(1),
    marginRight: wp(2),
    backgroundColor: '#fff',
  },
  checkboxLabel: {
    fontSize: wp(3.8),
    color: '#1F2937',
  },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7B1CFF',
    borderRadius: wp(3),
    marginTop: hp(5),
    marginHorizontal: wp(5),
    height: hp(6),
  },
  createButtonText: {
    color: '#fff',
    fontSize: wp(4.5),
    fontWeight: '600',
    marginRight: wp(2),
  },
  arrowIcon: {
    color: '#fff',
    fontSize: wp(6),
  },
});
