import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
  contentContainer: {
    flex: 1,
  },
  settingsContainer: {
    marginHorizontal: wp(6),
    marginTop: hp(3),
  },
  settingTitle: {
    fontWeight: '500',
    fontSize: wp(4),
    marginBottom: hp(1),
  },
  sliderLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(2),
  },
  sliderLabel: {
    color: '#A1A1A1',
  },
  stereoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(4),
  },
  stereoOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    height: hp(2.5),
    width: wp(5),
    borderRadius: hp(1.25),
    borderWidth: wp(0.5),
    borderColor: '#A259FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp(2),
  },
  radioButtonSelected: {
    height: hp(1.25),
    width: wp(2.5),
    borderRadius: hp(0.625),
    backgroundColor: '#A259FF',
  },
  stereoText: {
    color: '#222',
  },
  stereoTextSelected: {
    color: '#A259FF',
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: '#A259FF',
    marginHorizontal: wp(6),
    borderRadius: wp(3),
    paddingVertical: hp(2),
    alignItems: 'center',
    marginBottom: hp(3),
  },
  nextButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: wp(4),
  },
});
