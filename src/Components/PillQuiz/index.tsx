import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// user defined imports
import {Colors} from '../../Utils/colors';
import {fonts} from '../../Utils/fonts';
import {Images} from '../../Utils/images';

const PillQuiz = ({quiz, onSelect}: any) => (
  <View style={{flex: 1}}>
    <Text style={styles.questionTxt}>{quiz.question}</Text>
    <View style={styles.pillContainer}>
      {quiz.options.map((item: any) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => onSelect(item)}
          style={[
            styles.pill,
            item.isSelected ? styles.pillSelected : styles.pillUnselected,
          ]}>
          <Image
            source={item.isSelected ? Images.tickCircle : Images.circle}
            style={[
              styles.pillImage,
              {tintColor: item.isSelected ? undefined : Colors.gray},
            ]}
          />
          <Text
            style={[
              styles.pillText,
              {color: item.isSelected ? Colors.white : Colors.black},
            ]}>
            {item.question}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

export default PillQuiz;

const styles = StyleSheet.create({
  pillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: wp(3),
    marginTop: hp(2),
    marginHorizontal:wp(4)
  },

  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(1),
    paddingHorizontal: wp(4),
    borderRadius: wp(5),
    borderWidth: 1,
  },

  pillUnselected: {
    backgroundColor: '#f3f4f6',
    borderColor: '#d1d5db',
  },

  pillSelected: {
    backgroundColor: Colors.purple,
    borderColor: Colors.purple,
  },

  pillText: {
    fontSize: hp(1.8),
    fontFamily: fonts.medium,
  },
  questionTxt: {
    fontSize: hp(2.6),
    fontFamily: fonts.spectralMedium,
    color: Colors.black,
    paddingHorizontal: wp(5),
    textAlign: 'center',
    marginTop: hp(5),
    marginBottom: hp(40),
  },
  pillImage: {
    width: hp(2),
    height: hp(2),
    marginRight: wp(1),
  },
});
