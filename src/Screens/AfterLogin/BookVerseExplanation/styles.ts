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
    backgroundColor: '#fff',
  },
  playPauseContainer: {
    position: 'absolute',
    zIndex: 100,
    right: wp(3),
    top: hp(7),
  },
  backButton: {
    position: 'absolute',
    top: 80,
    left: 20,
  },
  backButtonText: {
    fontSize: 18,
    color: '#7B3FA0',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#f9f8ff',
    borderWidth: 1,
    borderColor: '#7B3FA0',
    borderRadius: 8,
    margin: 16,
  },

  backIcon: {
    width: hp(3),
    height: wp(6),
    resizeMode: 'contain',
  },
  headerContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#7B3FA0',
    backgroundColor: '#fff',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  dayText: {
    fontSize: 20,
    color: '#7B3FA0',
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#7B3FA0',
    fontWeight: 'bold',
  },
  explanationContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  explanationText: {
    fontSize: 15,
    color: '#555',
    textAlign: 'center',
    lineHeight: 24,
  },
  headingPurple: {
    color: '#7B3FA0',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  completeBtn: {
    height: hp(4),
    borderRadius: wp(2),
    overflow: 'hidden',
    marginTop: hp(1),
    marginHorizontal: wp(5),
  },
  completeBtnTxt: {
    color: Colors.white,
    fontSize: hp(1.5),
    fontFamily: fonts.bold,
  },
  contextText: {
    color: '#7B3FA0',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
});
