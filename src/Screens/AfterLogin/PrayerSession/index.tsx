import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  Alert,
} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//user-define Import files
import {Route} from '../../../Navigation/constants';
import * as Storage from '../../../Services/AsyncStoreConfig';
import {Images} from '../../../Utils/images';
import {updateStepCountAction} from '../Home/Controller/action';

const PrayerSession = () => {
  const [prayerText, setPrayerText] = useState('');
  const navigation = useNavigation<any>();
  const [faithProgress, setFaithProgress] = useState({});
  const {user} = useSelector((state: any) => state.userProfile);
  const dispatch = useDispatch<any>();
  const [stepCount, setStepCount] = useState(1);
  const [step2, setStep2] = useState('');
  const [step3, setStep3] = useState('');

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

  // Prayer suggestions that will be displayed as clickable buttons
  const prayerSuggestions = [
    'Dear lord, thank you for ...',
    'God, help me to ...',
    'Heavenly father, give ...',
    'Oh my dear god, I want ...',
  ];

  // Handle suggestion click and append to the prayer text input
  const handleSuggestionClick = (suggestion: string) => {
    setPrayerText(prevText => prevText + suggestion);
  };

  const handleSubmitPrayer = async () => {
    // try {
    //   if (prayerText) {
    //     if (user?.id) {
    //       const data = {
    //         stepName: 'step2',
    //         user_id: user?.id,
    //         value: true,
    //       };
    //       dispatch(updateStepCountAction(data))
    //         .unwrap()
    //         .then((res: any) => {
    //           navigation.navigate(Route.BottomTab);
    //         });
    //     }
    //   } else Alert.alert('Alert', 'Please enter your prayer');
    // } catch (error) {
    //   console.error('Error saving faith progress:', error);
    // }

    switch (stepCount) {
      case 1:
        if (prayerText) {
          setStepCount(2);
        } else {
          Alert.alert('Alert', 'Please enter your prayer');
        }
        break;
      case 2:
        if (step2) {
          setStepCount(3);
        } else {
          Alert.alert('Alert', 'Please enter your prayer');
        }
        break;
      case 3:
        try {
          console.log("Everything is fine")
          if (prayerText && step2 && step3) {
            if (user?.id) {
              const data = {
                stepName: 'step2',
                user_id: user?.id,
                value: true,
              };
              dispatch(updateStepCountAction(data))
                .unwrap()
                .then((res: any) => {
                  navigation.navigate(Route.BottomTab);
                });
            }
          } else Alert.alert('Alert', 'Please enter your prayer');
        } catch (error) {
          console.error('Error saving faith progress:', error);
        }
        break;
      default:
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.bibleView}>
          <View style={styles.headerView}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={Images.back} style={styles.backIcon} />
            </TouchableOpacity>
            <Text style={styles.title}>Daily Prayer Journal</Text>
            <View />
          </View>

          <Text style={styles.focusText}>Today's prayer focus</Text>
          <Text style={styles.description}>
            Journal 3 things your are Grateful for Today, and thank God for it.
          </Text>

          {/* First Input Section */}
          <Text style={styles.subTitle}>
            Write down one thing u are gratefull for today?
          </Text>
          <Text style={styles.questionTxt}>
            Why are you grateful for this also menation please !
          </Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Ex . I am grateful for my house … because I make it after 10 years of hard work"
            value={prayerText}
            onChangeText={setPrayerText}
            editable={stepCount == 1}
          />

          {/* Second Input Section */}
          {stepCount > 1 && (
            <>
              <Text style={{...styles.subTitle, marginTop: hp(2)}}>
                Write down one thing u are gratefull for today?
              </Text>
              <Text style={styles.questionTxt}>
                Why are you grateful for this also menation please !
              </Text>
              <TextInput
                style={{...styles.textInput, marginTop: hp(1)}}
                multiline
                placeholder="Ex . I am grateful for my house … because I make it after 10 years of hard work"
                value={step2}
                onChangeText={setStep2}
                editable={stepCount == 2}
              />
            </>
          )}

          {/* Third Input Section */}
          {stepCount > 2 && (
            <>
              <Text style={{...styles.subTitle, marginTop: hp(2)}}>
                Write down one thing u are gratefull for today?
              </Text>
              <Text style={styles.questionTxt}>
                Why are you grateful for this also menation please !
              </Text>
              <TextInput
                style={{...styles.textInput, marginTop: hp(1)}}
                multiline
                placeholder="Ex . I am grateful for my house … because I make it after 10 years of hard work"
                value={step3}
                onChangeText={setStep3}
                editable={stepCount == 3}
              />
            </>
          )}
          {/* <Text style={styles.startWith}>Start with:</Text>
          <View style={styles.suggestionsContainer}>
            {prayerSuggestions.map((suggestion, index) => (
              <TouchableOpacity
                key={index}
                style={styles.suggestionButton}
                onPress={() => handleSuggestionClick(suggestion)}>
                <Text style={styles.suggestionText}>{suggestion}</Text>
              </TouchableOpacity>
            ))}
          </View> */}
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmitPrayer}>
          <Text style={styles.submitText}>{'Submit prayer ➤'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrayerSession;
