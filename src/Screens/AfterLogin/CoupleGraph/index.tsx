import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  DeviceEventEmitter,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// User-defined imports
import {Route} from '../../../Navigation/constants';
import {styles} from './styles';
import * as Storage from '../../../Services/AsyncStoreConfig';
import {quizSlideData2} from '../../../Mock';
import {Colors} from '../../../Utils/colors';
import Button from '../../../Components/Button';
import AppHeader from '../../../Components/AppHeader';
import {filterSelectedQuestions} from '../../../Helper';

const COUPLE_QUIZ_PROGRESS_KEY = 'couple_quiz_progress';
const COUPLE_LAST_VIEWED_QUIZ_KEY = 'couple_last_viewed_quiz';

const CoupleGraph = () => {
  const navigation = useNavigation<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [quizState, setQuizState] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedQuiz, setSelectedQuiz] = useState<any>(null);

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      const prevIndex = currentQuestionIndex - 1;
      setCurrentQuestionIndex(prevIndex);
      setSelectedQuiz(quizState[prevIndex]);
      Storage.saveData(
        COUPLE_LAST_VIEWED_QUIZ_KEY,
        JSON.stringify(quizState[prevIndex].id),
      );
    } else {
      navigation.goBack();
    }
  };

  useEffect(() => {
    const loadQuizProgress = async () => {
      try {
        const savedProgress = await Storage.getData(COUPLE_QUIZ_PROGRESS_KEY);
        const lastViewedQuizId = await Storage.getData(
          COUPLE_LAST_VIEWED_QUIZ_KEY,
        );

        if (savedProgress) {
          const parsedProgress = JSON.parse(savedProgress);
          setQuizState(parsedProgress);

          if (lastViewedQuizId) {
            const lastQuizIndex = parsedProgress.findIndex(
              (item: any) => item.id === JSON.parse(lastViewedQuizId),
            );
            if (lastQuizIndex !== -1) {
              setCurrentQuestionIndex(lastQuizIndex);
              setSelectedQuiz(parsedProgress[lastQuizIndex]);
            }
          } else {
            setSelectedQuiz(parsedProgress[0]);
          }
        } else {
          setQuizState(quizSlideData2);
          setSelectedQuiz(quizSlideData2[0]);
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading quiz progress:', error);
        setIsLoading(false);
      }
    };

    const checkStepAndNavigate = async () => {
      const stepValue = await Storage.getData('graph');
      if (stepValue !== null) {
        navigation.replace(Route.IntoScreen);
      } else {
        loadQuizProgress();
      }
    };
    checkStepAndNavigate();
  }, [navigation]);

  const saveQuizProgress = async (updatedQuiz: any[]) => {
    try {
      await Storage.saveData(
        COUPLE_QUIZ_PROGRESS_KEY,
        JSON.stringify(updatedQuiz),
      );
    } catch (error) {
      console.error('Error saving quiz progress:', error);
    }
  };

  const _onSelectRadio = (answerInfo: any) => {
    const updatedOptions = selectedQuiz.options.map((item: any) => ({
      ...item,
      isSelected: item.id === answerInfo.id ? !item.isSelected : false,
    }));

    setSelectedQuiz({
      ...selectedQuiz,
      options: updatedOptions,
    });
  };

  const handleNextPress = () => {
    if (selectedQuiz.quizeType === 'radio') {
      const res = selectedQuiz.options.some((item: any) => item.isSelected);
      if (!res) {
        Alert.alert('Alert', 'Please complete the quiz.');
        return;
      }
    }

    DeviceEventEmitter.emit('STEP_PROGRESS');
    const updatedQuiz = quizState.map(item =>
      item.id === selectedQuiz.id
        ? {...selectedQuiz, isQusComplete: true}
        : item,
    );

    setQuizState(updatedQuiz);
    saveQuizProgress(updatedQuiz);

    if (currentQuestionIndex < quizState.length - 1) {
      // Move to next question
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
      setSelectedQuiz(quizState[nextIndex]);
      // Save last viewed quiz
      Storage.saveData(
        COUPLE_LAST_VIEWED_QUIZ_KEY,
        JSON.stringify(quizState[nextIndex].id),
      );
    } else {
      // All questions completed
      navigation.navigate(Route.IntoScreen);
      let params: any = {};
      const arr = [
        'daily_duration',
        'listening_experience',
        'subliminals_schedule',
      ];
      updatedQuiz.forEach((item: any, index: number) => {
        item.ans = filterSelectedQuestions(item.options, item.quizeType);
        params[arr[index]] = item.ans;
      });
      console.log('params', JSON.stringify(params));
      Storage.saveData('graph', 'added');
    }
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#9333ea" />
      </View>
    );
  }

  if (!selectedQuiz) {
    return null;
  }

  const isLastQuestion = currentQuestionIndex === quizState.length - 1;

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader
        backIcon={true}
        headerTitle="Preferences"
        onBackPress={handleBack}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.questionTxt}>{selectedQuiz.question}</Text>
        <View style={styles.radioContainer}>
          {selectedQuiz.options.map((item: any, index: number) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => _onSelectRadio(item)}
                style={{
                  ...styles.checkBoxBtn,
                  borderColor: item.isSelected ? Colors.purple : Colors.gray,
                  borderWidth: item.isSelected ? wp(0.5) : 0,
                }}>
                <View
                  style={{
                    ...styles.checkBoxView,
                    borderColor: item.isSelected ? Colors.purple : Colors.gray,
                  }}>
                  {item.isSelected && <View style={styles.checkBoxInnerView} />}
                </View>
                <Text style={styles.ansTxt}>{item.question}</Text>
                {item.question === '1 hour' && (
                  <View style={styles.mostEffectiveView}>
                    <Text style={styles.mostEffectiveTxt}>Most effective</Text>
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <Button
        title={isLastQuestion ? 'Set Reminder' : 'Continue'}
        onPress={handleNextPress}
        style={styles.button}
        btnStyle={styles.buttonText}
      />
    </SafeAreaView>
  );
};

export default CoupleGraph;
