import {View, Text, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Share from 'react-native-share';
import {useDispatch, useSelector} from 'react-redux';

// user-defined Import files
import {styles} from './styles';
import {Route} from '../../../Navigation/constants';
import {Images} from '../../../Utils/images';
import Button from '../../../Components/Button';
import SummaryModal from '../../../Components/SummaryModal';
import {updateStepCountAction} from '../Home/Controller/action';

const QuizCompletion = ({route}: any) => {
  const {score, correct, summery} = route.params;
  const [isSummeryModelOpen, setSummeryModal] = useState(false);
  const navigation = useNavigation<any>();
  const incorrect = 5 - correct;
  const {user} = useSelector((state: any) => state.userProfile);
  const dispatch = useDispatch<any>();

  // Function to share the result
  const shareResult = async () => {
    const message = `I completed the Daily Quiz! 🏆\n\nScore: ${score}%\nCorrect answers: ${correct}\nIncorrect answers: ${incorrect}\n\nTry the quiz yourself!`;

    const shareOptions = {
      message: message,
      title: 'Quiz Result',
      subject: 'Check out my quiz result!',
      url: 'https://couplebiblebackend-production.up.railway.app/',
    };

    try {
      await Share.open(shareOptions);
    } catch (error) {
      console.log('Error sharing result:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <SummaryModal
        visible={isSummeryModelOpen}
        summery={summery}
        onRequestClose={() => setSummeryModal(false)}
      />
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.navigate(Route.BottomTab)}>
          <Image source={Images.back} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Daily quiz</Text>
        <View />
      </View>

      <View style={styles.quizCompletionContainer}>
        <View style={styles.completionImageContainer}>
          <Image source={Images.completion} style={styles.completionImage} />
          <Text style={styles.completionText}>Quiz completed!</Text>
          <Text style={styles.completionSubText}>
            Great job on finishing the quiz.
          </Text>
        </View>
      </View>

      <View style={styles.resultCard}>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>You scored: </Text>
          <Text style={styles.scoreText2}>{score}%</Text>
        </View>
        <View style={styles.drawLine} />
        <View style={styles.stats}>
          <View style={styles.statContainer}>
            <Text style={styles.statText}>Correct answers: </Text>
            <Text style={[styles.statText, {color: '#05C21B'}]}>{correct}</Text>
          </View>
          <View style={styles.statContainer}>
            <Text style={styles.statText}>Incorrect answers: </Text>
            <Text style={[styles.statText, {color: '#FF0000'}]}>
              {incorrect}
            </Text>
          </View>
          <Button
            title="See Results"
            onPress={() => setSummeryModal(true)}
            style={styles.summeryBtn}
            btnStyle={styles.summeryBtnTxt}
          />
        </View>

        {/* <TouchableOpacity
          style={styles.playAgainButton}
          onPress={() => navigation.navigate(Route.QuizSection)}>
          <Text style={styles.buttonText}>Play again</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.shareButton} onPress={shareResult}>
          <Text style={styles.buttonText}>Share result!</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.finishButton}
        onPress={() => {
          if (user?.id) {
            const data = {
              stepName: 'step3',
              user_id: user?.id,
              value: true,
            };
            dispatch(updateStepCountAction(data))
              .unwrap()
              .then((res: any) => {
                navigation.navigate(Route.BottomTab);
              });
          }
        }}>
        <Text style={styles.finishButtonText}>Finish</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default QuizCompletion;
