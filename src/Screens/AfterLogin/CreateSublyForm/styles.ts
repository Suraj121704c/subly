import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  innerContainer: {
    marginHorizontal: wp(5),
  },
  backImage: {
    width: wp(2),
    height: hp(3),
    resizeMode: 'contain',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(2),
  },
  bottomBox: {
    marginBottom: hp(2),
  },
  backButton: {
    padding: wp(1.2),
  },
  headerTitle: {
    flex: 1,
    fontSize: wp(4.5),
    color: '#000000',
    marginLeft: wp(4),
  },
  stepIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(1.2),
    marginBottom: hp(2.5),
  },
  stepNumber: {
    fontSize: wp(6),
    fontWeight: 'bold',
    color: '#000000',
  },
  stepText: {
    fontSize: wp(6),
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: wp(2.5),
  },
  frequencyOption: {
    backgroundColor: '#F5F5F5',
    borderRadius: wp(3),
    padding: wp(4),
    marginBottom: hp(1.2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  frequencyOptionText: {
    flex: 1,
    marginLeft: wp(2.5),
  },
  optionTitle: {
    fontSize: wp(4),
    color: '#000000',
    fontWeight: '500',
  },
  optionSubtext: {
    fontSize: wp(3.5),
    color: '#666666',
    marginTop: hp(0.2),
  },
  nextButton: {
    backgroundColor: '#7C3AED',
    borderRadius: wp(6),
    padding: wp(4),
    alignItems: 'center',
    position: 'absolute',
    bottom: hp(4),
    left: wp(5),
    right: wp(5),
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: wp(4),
    fontWeight: '600',
  },
  radio: {
    width: wp(6),
    height: wp(6),
    borderRadius: wp(3),
    borderWidth: 2,
    borderColor: '#7C3AED',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioSelected: {
    width: wp(3),
    height: wp(3),
    borderRadius: wp(1.5),
    backgroundColor: '#7C3AED',
  },
  customFrequencyContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: wp(3),
    padding: wp(4),
    marginTop: hp(-0.6),
    marginBottom: hp(15),
    borderWidth: 2,
    borderColor: '#7C3AED',
  },
  customFrequencyInput: {
    fontSize: wp(4),
    color: '#000000',
    padding: 0,
    marginTop: hp(0.6),
  },
  customFrequencyPlaceholder: {
    fontSize: wp(4),
    color: '#9CA3AF',
  },
});
