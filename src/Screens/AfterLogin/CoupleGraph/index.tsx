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

// User-defined imports
import {Images} from '../../../Utils/images';
import {Route} from '../../../Navigation/constants';
import {styles} from './styles';
import * as Storage from '../../../Services/AsyncStoreConfig';
import {quizSlideData2} from '../../../Mock';

const COUPLE_QUIZ_PROGRESS_KEY = 'couple_quiz_progress';
const COUPLE_LAST_VIEWED_QUIZ_KEY = 'couple_last_viewed_quiz';

const CoupleGraph = () => {
  const navigation = useNavigation<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [quizState, setQuizState] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedQuiz, setSelectedQuiz] = useState<any>(null);

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
      <View style={styles.header}>
        <Text style={styles.backText}>{"< Back"}</Text>
        <Text style={styles.logoText}>Preferences</Text>
        <View></View>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.questionTxt}>{selectedQuiz.question}</Text>
        <View style={styles.radioContainer}>
          {selectedQuiz.options.map((item: any, index: number) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => _onSelectRadio(item)}
                style={{...styles.checkBoxBtn, marginBottom: 8}}>
                <View style={styles.checkBoxView}>
                  {item.isSelected && <View style={styles.checkBoxInnerView} />}
                </View>
                <Text style={styles.ansTxt}>{item.question}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNextPress}>
        <Text style={styles.buttonText}>
          {isLastQuestion ? 'Set Reminder' : 'Next'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CoupleGraph;
