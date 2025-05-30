import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';

// user-defined Import files
import {Route} from '../../../Navigation/constants';
import {styles} from './styles';
import {Images} from '../../../Utils/images';
import * as Storage from '../../../Services/AsyncStoreConfig';
import Button from '../../../Components/Button';
import {Colors} from '../../../Utils/colors';
import {updateStepCountAction} from '../Home/Controller/action';

const QuizQuestions = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [questionsToAsk, setQuestionsToAsk] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<any>();
  const [faithProgress, setFaithProgress] = useState({});
  const [correct, setCorrect] = useState(0);
  const {quizzes} = useSelector((state: any) => state.quizzes);
  const dispatch = useDispatch<any>();
  const {user} = useSelector((state: any) => state.userProfile);

  useEffect(() => {
    const loadFaithProgress = async () => {
      try {
        const storedProgress = await Storage.getData('faithProgress');
        if (storedProgress) {
          setFaithProgress(JSON.parse(storedProgress));
        }
      } catch (error) {
        console.error('Error fetching faith progress:', error);
      }
    };
    loadFaithProgress();
  }, []);

  useEffect(() => {
    if (quizzes && quizzes.length > 0) {
      const shuffledQuestions = [...quizzes]
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);
      setQuestionsToAsk(shuffledQuestions);
    }
  }, [quizzes]);

  const handleAnswerSelect = (answer: string) => {
    const currentQuestion = questionsToAsk[currentQuestionIndex];
    const updatedQsk = questionsToAsk.map(item => {
      if (item.id == currentQuestion.id) {
        return {
          ...item,
          answer: answer,
        };
      } else return item;
    });
    setQuestionsToAsk(updatedQsk);
    setSelectedAnswer(answer);
  };

  const handleNext = async () => {
    const currentQuestion = questionsToAsk[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(prevScore => prevScore + 20);
      setCorrect(prevCorrect => prevCorrect + 1);
    }

    if (currentQuestionIndex < questionsToAsk.length - 1) {
      setSelectedAnswer('');
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsLoading(true);
      if (user?.id) {
        const data = {
          stepName: 'step3',
          user_id: user?.id,
          value: true,
        };

        // Calculate final correct answers and score
        let finalCorrect = correct;
        let finalScore = score;
        if (selectedAnswer === currentQuestion.correctAnswer) {
          finalCorrect += 1;
          finalScore += 20;
        }

        try {
          await dispatch(updateStepCountAction(data)).unwrap();
          navigation.navigate(Route.QuizCompletion, {
            score: finalScore,
            correct: finalCorrect,
            summery: questionsToAsk,
          });
        } catch (error) {
          console.error('Error updating step count:', error);
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  if (!questionsToAsk.length) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={Images.back} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.title}>Daily quiz</Text>
          <View />
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>Loading questions...</Text>
        </View>
      </SafeAreaView>
    );
  }

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
        <View style={styles.questionContainer}>
          <Text style={styles.question}>
            Question {currentQuestionIndex + 1}/{questionsToAsk.length}
          </Text>

          <Text style={styles.questionText}>
            {questionsToAsk[currentQuestionIndex]?.question}
          </Text>

          <View style={styles.optionsContainer}>
            {questionsToAsk[currentQuestionIndex]?.options?.map(
              (option: any, index: any) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleAnswerSelect(option)}
                  style={{
                    ...styles.checkBoxBtn,
                    marginBottom: hp(1),
                  }}>
                  <View
                    style={[
                      styles.checkBoxView,
                      {
                        borderColor:
                          selectedAnswer === option
                            ? Colors.purple
                            : Colors.gray,
                      },
                    ]}>
                    {selectedAnswer === option && (
                      <View style={styles.checkBoxInnerView} />
                    )}
                  </View>
                  <Text style={styles.ansTxt}>{option}</Text>
                </TouchableOpacity>
              ),
            )}
          </View>
        </View>
        <View style={styles.slideView}>
          {questionsToAsk.map((item, index) => (
            <View
              key={index}
              style={{
                ...styles.slideStepView,
                backgroundColor: item?.answer ? Colors.purple : Colors.gray,
              }}
            />
          ))}
        </View>

        <Button
          title={
            currentQuestionIndex === questionsToAsk.length - 1
              ? 'Finish'
              : 'Next'
          }
          onPress={handleNext}
          style={[
            styles.nextButton,
            (!selectedAnswer || isLoading) && {opacity: 0.5},
          ]}
          btnStyle={styles.nextButtonText}
          icon={!isLoading && Images.right}
          iconStyle={styles.startButtonIcon}
          disabled={!selectedAnswer || isLoading}
          loading={isLoading}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuizQuestions;
