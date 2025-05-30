import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  DeviceEventEmitter,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

//user-define import files
import {Images} from '../../../Utils/images';
import {styles} from './styles';
import Button from '../../../Components/Button';
import {quizSlideData} from '../../../Mock';
import {Colors} from '../../../Utils/colors';
import {Route} from '../../../Navigation/constants';
import * as Storage from '../../../Services/AsyncStoreConfig';
import {isContinueBtnShow} from '../../../Helper';
import SliderQuiz from '../../../Components/SliderQuiz';
import CheckboxQuiz from '../../../Components/CheckBoxQuiz';
import PillQuiz from '../../../Components/PillQuiz';

const QUIZ_PROGRESS_KEY = 'quiz_slide_progress';
const LAST_VIEWED_QUIZ_KEY = 'last_viewed_quiz';

const QuizSlide = () => {
  const navigation = useNavigation<any>();
  const [quizData, setQuizData] = useState(quizSlideData);
  const [selectedQuiz, setSelectedQuiz] = useState<any>(quizSlideData[0]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadQuizProgress = async () => {
      try {
        const savedProgress = await Storage.getData(QUIZ_PROGRESS_KEY);
        const lastViewedQuizId = await Storage.getData(LAST_VIEWED_QUIZ_KEY);

        if (savedProgress) {
          const parsedProgress = JSON.parse(savedProgress);
          setQuizData(parsedProgress);

          if (lastViewedQuizId) {
            // Find the last viewed quiz
            const lastQuiz = parsedProgress.find(
              (item: any) => item.id === JSON.parse(lastViewedQuizId),
            );
            if (lastQuiz) {
              setSelectedQuiz(lastQuiz);
            } else {
              // Find the first incomplete quiz if last viewed not found
              const nextQuiz = parsedProgress.find(
                (item: any) => !item.isQusComplete,
              );
              if (nextQuiz) {
                setSelectedQuiz(nextQuiz);
              } else {
                navigation.replace(Route.Intro);
              }
            }
          }
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading quiz progress:', error);
        setIsLoading(false);
      }
    };

    const checkStepAndNavigate = async () => {
      const stepValue = await Storage.getData('slideQuide');
      if (stepValue !== null) {
        navigation.replace(Route.Intro);
      } else {
        loadQuizProgress();
      }
    };
    checkStepAndNavigate();
  }, [navigation]);

  useEffect(() => {
    const isComplete = quizData.every((item: any) => item?.isQusComplete);
    if (isComplete) {
      Storage.saveData('slideQuide', 'completed');
      navigation.navigate(Route.Intro);
    }
  }, [quizData]);

  // Save last viewed quiz when leaving
  useEffect(() => {
    const saveLastViewedQuiz = async () => {
      if (selectedQuiz?.id) {
        await Storage.saveData(
          LAST_VIEWED_QUIZ_KEY,
          JSON.stringify(selectedQuiz.id),
        );
      }
    };

    saveLastViewedQuiz();
  }, [selectedQuiz]);

  const saveQuizProgress = async (updatedQuiz: any[]) => {
    try {
      await Storage.saveData(QUIZ_PROGRESS_KEY, JSON.stringify(updatedQuiz));
    } catch (error) {
      console.error('Error saving quiz progress:', error);
    }
  };

  const _onContinue = () => {
    if (selectedQuiz.quizeType === 'radio') {
      const res = selectedQuiz.options.some((item: any) => item.isSelected);
      if (!res) {
        Alert.alert('Alert', 'Please complete the quiz.');
        return;
      }
    }

    if (selectedQuiz.quizeType === 'slider') {
      const res = typeof selectedQuiz.value === 'number';
      if (!res) {
        Alert.alert('Alert', 'Please adjust the slider to respond.');
        return;
      }
    }

    if (selectedQuiz.quizeType === 'checkbox') {
      const res = selectedQuiz.options.some((item: any) => item.isSelected);
      if (!res) {
        Alert.alert('Alert', 'Please select at least one option.');
        return;
      }
    }

    DeviceEventEmitter.emit('STEP_PROGRESS');
    const updatedQuiz = quizData.map(item =>
      item.id === selectedQuiz.id
        ? {...selectedQuiz, isQusComplete: true}
        : item,
    );

    setQuizData(updatedQuiz);
    saveQuizProgress(updatedQuiz);

    const nextQuiz = updatedQuiz.find(item => !item.isQusComplete);
    if (nextQuiz) {
      setSelectedQuiz(nextQuiz);
    } else {
      navigation.navigate(Route.Intro);
    }
  };

  const _onPressYesNo = (answer: string) => {
    DeviceEventEmitter.emit('STEP_PROGRESS');
    const updatedQuiz = quizData.map(item =>
      item.id === selectedQuiz.id
        ? {...selectedQuiz, isQusComplete: true, ans: answer}
        : item,
    );
    setQuizData(updatedQuiz);
    saveQuizProgress(updatedQuiz);
    const nextQuiz = updatedQuiz.find(item => !item.isQusComplete);
    if (nextQuiz) setSelectedQuiz(nextQuiz);
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

  const _onChangeSlider = (val: number) => {
    setSelectedQuiz({...selectedQuiz, value: val});
  };

  const _onSelectCheckbox = (selected: any) => {
    let updatedOptions;

    if (selected.id === 999) {
      const isAllSelected = selectedQuiz.options.every(
        (opt: any) => opt.isSelected,
      );

      if (isAllSelected) {
        updatedOptions = selectedQuiz.options.map((opt: any) => ({
          ...opt,
          isSelected: false,
        }));
      } else {
        updatedOptions = selectedQuiz.options.map((opt: any) => ({
          ...opt,
          isSelected: true,
        }));
      }
    } else {
      updatedOptions = selectedQuiz.options.map((opt: any) =>
        opt.id === selected.id
          ? {...opt, isSelected: !opt.isSelected}
          : opt.id === 999
          ? {...opt, isSelected: false}
          : opt,
      );
    }

    setSelectedQuiz({...selectedQuiz, options: updatedOptions});
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#9333ea" />
      </View>
    );
  }

  const _onSkip = () => {
    DeviceEventEmitter.emit('STEP_PROGRESS');
    const updatedQuiz = quizData.map(item =>
      item.id === selectedQuiz.id
        ? {...selectedQuiz, isQusComplete: true, ans: 'skipped'}
        : item,
    );

    setQuizData(updatedQuiz);
    saveQuizProgress(updatedQuiz);

    const nextQuiz = updatedQuiz.find(item => !item.isQusComplete);
    if (nextQuiz) {
      setSelectedQuiz(nextQuiz);
    } else {
      navigation.navigate(Route.Intro);
    }
  };

  const _onBack = () => {
    const currentIndex = quizData.findIndex(
      quiz => quiz.id === selectedQuiz.id,
    );
    if (currentIndex > 0) {
      const previousQuiz = quizData[currentIndex - 1];
      setSelectedQuiz(previousQuiz);

      const updatedQuiz = quizData.map(item =>
        item.id === selectedQuiz.id
          ? {...selectedQuiz, isQusComplete: false, ans: undefined}
          : item,
      );
      setQuizData(updatedQuiz);
      saveQuizProgress(updatedQuiz);
    } else {
      Alert.alert(
        'Leave Quiz',
        'Are you sure you want to leave? Your progress will be saved.',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Leave',
            onPress: () => {
              Storage.saveData(
                LAST_VIEWED_QUIZ_KEY,
                JSON.stringify(selectedQuiz.id),
              );
              navigation.goBack();
            },
          },
        ],
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={Images.sublyLogo} style={styles.couplePhoto} />
      <View style={styles.innerView}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={_onBack} style={styles.backButton}>
            <Image source={Images.back} style={styles.backIcon} />
          </TouchableOpacity>
          <View style={styles.slideView}>
            {quizData.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    ...styles.slideStepView,
                    backgroundColor: item.isQusComplete
                      ? Colors.purple
                      : Colors.gray,
                  }}
                />
              );
            })}
          </View>
        </View>
        {selectedQuiz?.quizeType == 'radio' && (
          <View style={{flex: 1}}>
            <Text style={styles.questionTxt}>{selectedQuiz?.question}</Text>
            <View style={styles.radioContainer}>
              {selectedQuiz.options.map((item: any, index: number) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => _onSelectRadio(item)}
                    style={{...styles.checkBoxBtn, marginBottom: hp(1)}}>
                    <View style={styles.checkBoxView}>
                      {item.isSelected && (
                        <View style={styles.checkBoxInnerView} />
                      )}
                    </View>
                    <Text style={styles.ansTxt}>{item.question}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        )}
        {selectedQuiz?.quizeType === 'slider' && (
          <SliderQuiz quiz={selectedQuiz} onChange={_onChangeSlider} />
        )}
        {selectedQuiz?.quizeType === 'checkbox' && (
          <CheckboxQuiz quiz={selectedQuiz} onSelect={_onSelectCheckbox} />
        )}
        {selectedQuiz?.quizeType == 'images' && (
          <View style={{flex: 1}}>
            <View style={{flex: 1}}>
              <Text style={styles.questionTxt}>{selectedQuiz?.question}</Text>
              <Image source={selectedQuiz.image} style={styles.godImg} />
            </View>
            <View style={styles.yesNoView}>
              <Button
                title="No"
                onPress={() => _onPressYesNo('No')}
                style={styles.noBtn}
                btnStyle={styles.noBtnTxt}
              />
              <Button
                title="Yes"
                onPress={() => _onPressYesNo('Yes')}
                style={styles.yesBtn}
                btnStyle={styles.yesBtnTxt}
              />
            </View>
          </View>
        )}
        {selectedQuiz?.quizeType == 'pill' && (
          <PillQuiz quiz={selectedQuiz} onSelect={_onSelectCheckbox} />
        )}
        {isContinueBtnShow(selectedQuiz?.quizeType) && (
          <Button
            title="Next >"
            onPress={_onContinue}
            style={styles.continueBtn}
            btnStyle={styles.continueBtnTxt}
          />
        )}
        <Button
          title="Skip"
          onPress={_onSkip}
          style={styles.skipQuizBtn}
          btnStyle={styles.skipQuizBtnTxt}
        />
      </View>
    </SafeAreaView>
  );
};

export default QuizSlide;
