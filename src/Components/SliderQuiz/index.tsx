import Slider from '@react-native-community/slider';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// user defined imports
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../Utils/colors';
import {fonts} from '../../Utils/fonts';

const SliderQuiz = ({quiz, onChange}: any) => (
  <View style={{flex: 1}}>
    <Text style={styles.questionTxt}>{quiz.question}</Text>
    <View style={styles.sliderContainer}>
      <Text>😞</Text>
      <Slider
        style={{flex: 1, marginHorizontal: wp(3)}}
        minimumValue={0}
        maximumValue={4}
        step={1}
        minimumTrackTintColor={Colors.purple}
        maximumTrackTintColor="#ccc"
        onValueChange={value => onChange(value)}
        value={quiz.value}
      />
      <Text>😊</Text>
    </View>
  </View>
);

export default SliderQuiz;

const styles = StyleSheet.create({
  questionTxt: {
    fontSize: hp(2.6),
    marginBottom: hp(2),
    fontFamily: fonts.spectralMedium,
    paddingHorizontal: wp(5),
    color: Colors.black,
    marginTop: hp(5),
    textAlign: 'center',
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(4),
    position: 'absolute',
    bottom: hp(2),
    left: 0,
    right: 0,
    paddingHorizontal: wp(5),
  },
});
