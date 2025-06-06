import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    paddingTop: hp(2),
    paddingBottom: hp(1),
  },
  logo: {
    width: wp(40),
    height: hp(8),
    resizeMode: 'contain',
    marginRight: wp(2),
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '700',
    marginLeft: 8,
    color: '#000',
    fontFamily: 'serif',
  },
  cardContainer: {
    backgroundColor: '#7B1FA2',
    borderRadius: 20,
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heartIcon: {
    width: 40,
    height: 40,
    marginRight: 16,
    resizeMode: 'contain',
  },
  cardTextContainer: {
    flex: 1,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  cardSubtitle: {
    color: '#e0cfff',
    fontSize: 14,
    marginTop: 2,
  },
  arrowIcon: {
    width: 24,
    height: 24,
    marginLeft: 8,
    resizeMode: 'contain',
    tintColor: '#fff',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#666',
    marginTop: 32,
    marginLeft: 16,
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
    marginTop: 16,
    marginLeft: 16,
  },
});
