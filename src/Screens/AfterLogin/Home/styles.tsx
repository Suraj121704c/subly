import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//user-define Import files
import {fonts} from '../../../Utils/fonts';
import {Colors} from '../../../Utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: wp(4),
    alignItems: 'flex-start',
  },
  logo: {
    width: wp(25),
    height: hp(4),
  },
  section: {
    padding: wp(4),
  },
  sectionTitle: {
    fontSize: wp(4.5),
    fontWeight: '600',
    marginBottom: hp(2),
  },
  subliminalCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp(4),
    borderRadius: wp(3),
    marginBottom: hp(1.5),
  },
  playButton: {
    width: wp(8),
    height: wp(8),
    borderRadius: wp(4),
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(3),
  },
  playIcon: {
    width: wp(3),
    height: wp(3),
    tintColor: '#fff',
  },
  subliminalContent: {
    flex: 1,
  },
  subliminalTitle: {
    fontSize: wp(4),
    fontWeight: '500',
    marginBottom: hp(0.5),
  },
  subliminalSubtitle: {
    fontSize: wp(3.5),
    color: '#666',
  },
  allSubliminals: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: wp(3),
    marginTop: hp(1),
    borderWidth: wp(0.5),
    borderColor: '#0F0E1129',
    height:hp(6)
  },
  allSubliminalText: {
    fontSize: wp(4),
    marginRight: wp(2),
  },
  arrowIcon: {
    width: hp(4),
    height: wp(8),
    resizeMode:"contain"
  },
  themesContainer: {
    marginBottom: hp(2),
  },
  themeCard: {
    width: wp(50),
    marginRight: wp(4),
    borderRadius: wp(3),
    overflow: 'hidden',
  },
  themeImage: {
    width: '100%',
    height: hp(15),
  },
  themeTitle: {
    position: 'absolute',
    bottom: hp(1.5),
    left: wp(3),
    color: '#fff',
    fontSize: wp(4),
    fontWeight: '500',
  },
  themeArrow: {
    position: 'absolute',
    bottom: hp(1.5),
    right: wp(3),
    width: wp(4),
    height: wp(4),
    tintColor: '#fff',
  },
  moreThemes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5EDFF',
    borderRadius: wp(3),
    height:hp(6)
  },
  moreThemesText: {
    fontSize: wp(4),
    marginRight: wp(2),
  },
  createButton: {
    margin: wp(4),
    padding: wp(4),
    backgroundColor: '#7B3DFF',
    borderRadius: wp(3),
    alignItems: 'center',
  },
  createButtonText: {
    color: '#fff',
    fontSize: wp(4),
    fontWeight: '500',
  },
});
