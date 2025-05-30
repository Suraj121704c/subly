import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

//user-define Import files
import {styles} from './styles';
import {Images} from '../../../Utils/images';
import {Route} from '../../../Navigation/constants';
import Button from '../../../Components/Button';
import {fetchQuizzes} from '../../../Redux/Actions/quizActions';

const QuizSection = () => {
  const [difficulty, setDifficulty] = useState('Easy');
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();

  const handleDifficultyChange = (level: string) => {
    setDifficulty(level);
  };

  const handleStartQuiz = () => {
    navigation.navigate(Route.QuizQuestions);
  };

  useEffect(() => {
    dispatch(fetchQuizzes());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={Images.back} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.title}>Daily quiz</Text>
          <View />
        </View>

        <View style={styles.quizContainer}>
          <Text style={styles.subTitle}>Bible Quiz Challenge</Text>
          <Text style={styles.description}>
            Answer 5 questions to test your Bible knowledge
          </Text>

          <View style={styles.rulesContainer}>
            <Text style={styles.rulesTitle}>Game rules</Text>
            <Text style={styles.rulesText}>
              For each correct answer: +20pts {'\n'}
              For each incorrect answer: -10pts
            </Text>
          </View>

          <Text style={styles.selectDifficultyText}>Select difficulty</Text>
          <View style={styles.difficultyButtonsContainer}>
            {['Easy', 'Medium', 'Hard'].map(level => (
              <TouchableOpacity
                key={level}
                style={[
                  styles.difficultyButton,
                  difficulty === level && styles.selectedDifficultyButton,
                ]}
                onPress={() => handleDifficultyChange(level)}>
                {difficulty === level && (
                  <Image source={Images.tickCircle} style={styles.tickImg} />
                )}
                <Text
                  style={[
                    styles.difficultyButtonText,
                    difficulty === level && styles.selectedDifficultyButtonText,
                  ]}>
                  {level}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <Button
          title={'Start quiz'}
          onPress={handleStartQuiz}
          style={styles.startButton}
          btnStyle={styles.startButtonText}
          icon={Images.right}
          iconStyle={styles.startButtonIcon}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuizSection;
