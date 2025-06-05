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
  inerContaiber: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: wp(4),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  coverContainer: {
    width: wp(90),
    height: wp(90),
    alignSelf: 'center',
    marginVertical: hp(2.5),
    borderRadius: wp(5),
    overflow: 'hidden',
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },
  trackInfo: {
    paddingHorizontal: wp(5),
    marginBottom: hp(2.5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  trackTitle: {
    fontSize: hp(2.5),
    fontWeight: '600',
    color: '#1F2937',
  },
  trackSubtitle: {
    fontSize: wp(4),
    color: '#6B7280',
  },
  tabRow: {
    flexDirection: 'row',
    marginBottom: hp(2),
  },
  tabButton: {
    flex: 1,
    padding: wp(2),
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  tabButtonActive: {
    borderBottomWidth: 2,
    borderColor: '#a259ff',
  },
  tabText: {
    textAlign: 'center',
    color: '#888',
    fontWeight: '500',
    fontSize: wp(4),
  },
  tabTextActive: {
    color: '#a259ff',
  },
  stepText: {
    fontSize: hp(2),
    color: '#7B1CFF',
    backgroundColor: '#F3ECFE',
    borderRadius: hp(2),
    paddingHorizontal: hp(1),
    paddingVertical: hp(0.3),
    marginRight: wp(2),
  },
  card: {
    marginBottom: hp(3),
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: wp(2),
    padding: wp(3),
    backgroundColor: '#faf8ff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: wp(1.5),
    padding: wp(2),
    marginBottom: wp(2),
    fontSize: wp(4),
    backgroundColor: '#fff',
  },
  ttsButton: {
    backgroundColor: '#e5dbff',
    borderRadius: wp(1.5),
    paddingVertical: hp(1),
    paddingHorizontal: wp(3),
    alignItems: 'center',
    marginBottom: wp(2),
  },
  ttsButtonText: {
    color: '#a259ff',
    fontWeight: '600',
    fontSize: wp(3.8),
  },
  addButton: {
    backgroundColor: '#f3e8ff',
    padding: wp(3),
    borderRadius: wp(2),
    alignItems: 'center',
    marginBottom: hp(2),
  },
  addButtonText: {
    color: '#a259ff',
    fontWeight: '600',
    fontSize: wp(4),
  },
  removeButton: {
    marginTop: hp(1),
  },
  removeButtonText: {
    color: 'red',
    textAlign: 'right',
    fontWeight: '500',
  },
  nextButton: {
    backgroundColor: '#a259ff',
    padding: wp(4),
    borderRadius: wp(2),
    alignItems: 'center',
    marginTop: hp(1),
  },
  nextButtonDisabled: {
    backgroundColor: '#ccc',
  },
  nextButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: wp(4.2),
  },
  recordIcon: {
    width: hp(8),
    height: hp(8),
    marginBottom: hp(0.5),
    resizeMode: 'contain',
  },
  recordText: {
    fontSize: wp(3.8),
    color: '#555',
    marginBottom: hp(0.5),
  },
  recordStateRow: {
    alignItems: 'center',
    marginVertical: hp(1.5),
  },
  aiButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#a259ff',
    borderRadius: wp(1.5),
    paddingVertical: hp(1),
    paddingHorizontal: wp(3),
    alignItems: 'center',
    marginBottom: wp(2),
  },
  aiButtonText: {
    color: '#a259ff',
    fontWeight: '600',
    fontSize: wp(3.8),
  },
});
