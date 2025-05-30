import {
  View,
  Text,
  SafeAreaView,
  Image,
  ActivityIndicator,
  DeviceEventEmitter,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

// User-defined Imports
import {styles} from './styles';
import * as Storage from '../../../Services/AsyncStoreConfig';
import {Route} from '../../../Navigation/constants';
import {Images} from '../../../Utils/images';
import {imageSlideData as initialSlideData} from '../../../Mock';
import {Colors} from '../../../Utils/colors';
import Button from '../../../Components/Button';

const IMAGE_SLIDER_PROGRESS_KEY = 'image_slider_progress';

const ImageSlider = () => {
  const navigation = useNavigation<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [quizData, setQuizData] = useState(initialSlideData);
  const [selectedQuiz, setSelectedQuiz] = useState(initialSlideData[0]);

  useEffect(() => {
    const loadProgressAndNavigate = async () => {
      try {
        const stepValue = await Storage.getData('imageSlider');
        const savedProgress = await Storage.getData(IMAGE_SLIDER_PROGRESS_KEY);

        if (stepValue !== null) {
          navigation.replace(Route.AnimatedCouple);
        } else if (savedProgress) {
          const parsedProgress = JSON.parse(savedProgress);
          setQuizData(parsedProgress);

          // Find the first unanswered quiz
          const nextQuiz = parsedProgress.find((item: any) => !item.isGivenAns);
          if (nextQuiz) {
            setSelectedQuiz(nextQuiz);
          } else {
            navigation.replace(Route.AnimatedCouple);
          }
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading image slider progress:', error);
        setIsLoading(false);
      }
    };
    loadProgressAndNavigate();
  }, [navigation]);

  const saveProgress = async (updatedQuiz: any[]) => {
    try {
      await Storage.saveData(
        IMAGE_SLIDER_PROGRESS_KEY,
        JSON.stringify(updatedQuiz),
      );
    } catch (error) {
      console.error('Error saving image slider progress:', error);
    }
  };

  const _onPressYesNo = (answer: string) => {
    DeviceEventEmitter.emit('STEP_PROGRESS');
    const updatedQuiz = quizData.map(item =>
      item.id === selectedQuiz.id
        ? {
            ...item,
            isGivenAns: true,
            ans: answer,
          }
        : item,
    );
    setQuizData(updatedQuiz);
    saveProgress(updatedQuiz);

    const nextQuiz = updatedQuiz.find(item => !item.isGivenAns);
    if (nextQuiz) {
      setSelectedQuiz(nextQuiz);
    } else {
      Storage.saveData('imageSlider', 'seen');
      navigation.replace(Route.AnimatedCouple);
    }
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#9333ea" />
      </View>
    );
  }

  const _onPressSkip = () => {
    DeviceEventEmitter.emit('STEP_PROGRESS');
    const updatedQuiz = quizData.map(item =>
      item.id === selectedQuiz.id
        ? {
            ...item,
            isGivenAns: true,
            ans: 'Skipped',
          }
        : item,
    );
    setQuizData(updatedQuiz);
    saveProgress(updatedQuiz);

    const nextQuiz = updatedQuiz.find(item => !item.isGivenAns);
    if (nextQuiz) {
      setSelectedQuiz(nextQuiz);
    } else {
      Storage.saveData('imageSlider', 'seen');
      navigation.replace(Route.AnimatedCouple);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={Images.coupleBible} style={styles.couplePhoto} />
      <View style={styles.innerView}>
        {/* <View style={styles.slideView}>
          {quizData.map((item, index) => (
            <View
              key={item.id}
              style={{
                ...styles.slideStepView,
                backgroundColor: item.isGivenAns ? Colors.purple : Colors.gray,
              }}
            />
          ))}
        </View> */}
        <View style={styles.imageQuizView}>
          <Text style={styles.questionText}>{selectedQuiz.question}</Text>
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

        <Button
          title="Skip"
          onPress={_onPressSkip}
          style={styles.skipQuizBtn}
          btnStyle={styles.skipQuizBtnTxt}
        />
      </View>
    </SafeAreaView>
  );
};

export default ImageSlider;
