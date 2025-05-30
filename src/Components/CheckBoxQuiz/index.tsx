import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// user defined imports
import {fonts} from '../../Utils/fonts';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Images} from '../../Utils/images';

const CheckboxQuiz = ({quiz, onSelect}: any) => (
  <View style={{flex: 1}}>
    <Text style={styles.questionTxt}>{quiz.question}</Text>
    <View
      style={{
        borderWidth: 1,
        borderColor: '#e2e2e2',
        paddingVertical: hp(2),
        borderRadius: wp(2),
        marginHorizontal: wp(5),
        paddingHorizontal: wp(5),
      }}>
      {quiz.options.map((item: any) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => onSelect(item)}
          style={styles.checkBoxBtn}>
          <View style={styles.checkBoxView}>
            <Image
              source={item.isSelected ? Images.squareTick : Images.square}
              style={{width: hp(3), height: hp(3)}}
            />
          </View>
          <Text style={styles.ansTxt}>{item.question}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

export default CheckboxQuiz;

const styles = StyleSheet.create({
  questionTxt: {
    fontSize: hp(2.5),
    fontFamily: fonts.spectralMedium,
    color: Colors.black,
    paddingHorizontal: wp(5),
    textAlign: 'center',
    marginTop: hp(5),
    marginBottom: hp(2),
  },
  checkBoxBtn: {
    backgroundColor: '#e2e2e2',
    height: hp(5),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(3),
    borderRadius: wp(2),
    marginVertical: hp(1),
  },
  checkBoxView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkBoxInnerView: {
    width: wp(2),
    height: wp(2),
    backgroundColor: '#ccc',
  },
  ansTxt: {
    fontSize: hp(1.8),
    marginLeft: wp(2),
    fontFamily: fonts.regular,
  },
});
