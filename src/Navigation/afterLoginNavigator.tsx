import {DeviceEventEmitter, SafeAreaView, StyleSheet, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Superwall from '@superwall/react-native-superwall';
import * as Progress from 'react-native-progress';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Storage from '../Services/AsyncStoreConfig';
import {useNavigation, useRoute} from '@react-navigation/native';

//user-define Import files
import HomeScreen from '../Screens/AfterLogin/Home';
import {Route} from './constants';
import VerseOfTheDay from '../Screens/AfterLogin/VerseOfTheDay';
import PrayerSession from '../Screens/AfterLogin/PrayerSession';
import Intro from '../Screens/BeforeLogin/Intro';
import QuizSection from '../Screens/AfterLogin/QwizSection';
import QuizQuestions from '../Screens/AfterLogin/QuizQuestion';
import QuizCompletion from '../Screens/AfterLogin/QuizCompletion';
import BottomTabNavigator from './bottomTabNavigator';
import Rating from '../Screens/AfterLogin/Rating';
import AnimatedCouple from '../Screens/AfterLogin/AnimatedCouple';
import KnowTheMeaning from '../Screens/AfterLogin/KnowTheMeaning';
import QuizSlide from '../Screens/AfterLogin/QuizSlide';
import CoupleGraph from '../Screens/AfterLogin/CoupleGraph';
import IntoScreen from '../Screens/AfterLogin/IntoScreen';
import {Colors} from '../Utils/colors';
import {stepCount} from '../Helper';
import SetReminderScreen from '../Screens/AfterLogin/SetReminder';
import PlanDetails from '../Screens/AfterLogin/PlanDetails';
import PlanVerseExplanation from '../Screens/AfterLogin/PlanVerseExplanation';
import BookDetails from '../Screens/AfterLogin/BookDetails';
import BookVerseExplanation from '../Screens/AfterLogin/BookVerseExplanation';
import BookReminder from '../Screens/AfterLogin/BookReminder';
import SoundPlayer from '../Screens/AfterLogin/SoundPlayer';
import CreateSublyForm from '../Screens/AfterLogin/CreateSublyForm';
import Affrimation from '../Screens/AfterLogin/Affrimation';
import CustomizeSublimal from '../Screens/AfterLogin/CustomizeSublimal';
import CreateSublimalFinal from '../Screens/AfterLogin/CreateSublimalFinal';

const AfterLoginStack = createNativeStackNavigator();

const TOTAL_STEPS = 13;
const STEP_SIZE = 1 / (TOTAL_STEPS - 1);
const PROGRESS_STORAGE_KEY = 'onboarding_progress';
const PROGRESS_COMPLETE = 0.999;

const AfterLoginNavigator = () => {
  const [progress, setProgress] = useState(0);
  const route = useRoute();

  // Load saved progress when component mounts
  useEffect(() => {
    const loadSavedProgress = async () => {
      const savedProgress = await Storage.getData(PROGRESS_STORAGE_KEY);
      if (savedProgress) {
        setProgress(parseFloat(savedProgress));
      }
    };
    loadSavedProgress();
  }, []);

  // Save progress whenever it changes
  useEffect(() => {
    const saveProgress = async () => {
      await Storage.saveData(PROGRESS_STORAGE_KEY, progress.toString());
    };
    saveProgress();
  }, [progress]);

  useEffect(() => {
    const listener = DeviceEventEmitter.addListener('STEP_PROGRESS', () => {
      setProgress(prev => {
        const newProgress = Math.min(prev + STEP_SIZE, 1);
        return newProgress;
      });
    });

    const decreaseListener = DeviceEventEmitter.addListener(
      'STEP_DECREASE',
      () => {
        setProgress(prev => {
          const newProgress = Math.max(prev - STEP_SIZE, 0);
          return newProgress;
        });
      },
    );

    return () => {
      listener.remove();
      decreaseListener.remove();
    };
  }, []);

  // useEffect(() => {
  //   const checkAndShowPaywall = async () => {
  //     try {
  //       await Superwall.configure({
  //         apiKey: 'pk_da187f1ba33d54d5151202eb779374da8436c614259127ff',
  //       });

  //       const status = await Superwall.shared.getSubscriptionStatus();

  //       if (status.status !== 'ACTIVE') {
  //         await Superwall.shared.register({
  //           placement: 'campaign_trigger',
  //           handler: {
  //             onPresent: info => console.log('Paywall shown:', info.name),
  //             onDismiss: async () => {
  //               const updatedStatus =
  //                 await Superwall.shared.getSubscriptionStatus();
  //               if (updatedStatus.status === 'ACTIVE') {
  //                 console.log('User subscribed after dismiss');
  //               }
  //             },
  //             onError: err => console.error('Paywall error:', err),
  //             onSkip: reason => {
  //               console.warn('Skipped:', reason);
  //               // setIsHomeScreenVisible(true);
  //             },
  //             onDismissHandler: () => {
  //               console.log('dismissed');
  //               setIsHomeScreenVisible(true);
  //             },
  //           },
  //         });
  //       } else {
  //         console.log('User is already subscribed');
  //         setIsHomeScreenVisible(true);
  //       }
  //     } catch (err) {
  //       console.error('[Superwall] Error during flow:', err);
  //     }
  //   };

  //   checkAndShowPaywall();
  // }, []);

  return (
    <>
      {/* {progress >= 1 || route.name === Route.BottomTab ? null : (
        <SafeAreaView style={styles.progressBarContainer}>
          <Progress.Bar
            progress={progress}
            width={wp(90)}
            color={Colors.purple}
            borderRadius={wp(10)}
            height={hp(0.6)}
          />
        </SafeAreaView>
      )} */}
      <AfterLoginStack.Navigator screenOptions={{headerShown: false}}>
        <AfterLoginStack.Screen name={Route.QuizSlide} component={QuizSlide} />
        <AfterLoginStack.Screen name={Route.Intro} component={Intro} />
        <AfterLoginStack.Screen
          name={Route.CoupleGraph}
          component={CoupleGraph}
        />
        <AfterLoginStack.Screen
          name={Route.AnimatedCouple}
          component={AnimatedCouple}
        />
        <AfterLoginStack.Screen
          name={Route.BottomTab}
          component={BottomTabNavigator}
        />
        <AfterLoginStack.Screen
          name={Route.IntoScreen}
          component={IntoScreen}
        />
        <AfterLoginStack.Screen name={Route.Home} component={HomeScreen} />
        <AfterLoginStack.Screen name={Route.Rating} component={Rating} />
        <AfterLoginStack.Screen
          name={Route.VerseOfTheDay}
          component={VerseOfTheDay}
        />
        <AfterLoginStack.Screen
          name={Route.PrayerSession}
          component={PrayerSession}
        />
        <AfterLoginStack.Screen
          name={Route.QuizSection}
          component={QuizSection}
        />
        <AfterLoginStack.Screen
          name={Route.QuizQuestions}
          component={QuizQuestions}
        />
        <AfterLoginStack.Screen
          name={Route.QuizCompletion}
          component={QuizCompletion}
        />
        <AfterLoginStack.Screen
          name={Route.KnowTheMeaning}
          component={KnowTheMeaning}
        />
        <AfterLoginStack.Screen
          name={Route.PlanDetails}
          component={PlanDetails}
        />
        <AfterLoginStack.Screen
          name={Route.SetReminderScreen}
          component={SetReminderScreen}
        />
        <AfterLoginStack.Screen
          name={Route.PlanVerseExplanation}
          component={PlanVerseExplanation}
        />
        <AfterLoginStack.Screen
          name={Route.BookVerseExplanation}
          component={BookVerseExplanation}
        />
        <AfterLoginStack.Screen
          name={Route.BookDetails}
          component={BookDetails}
        />
        <AfterLoginStack.Screen
          name={Route.BookReminder}
          component={BookReminder}
        />
        <AfterLoginStack.Screen
          name={Route.SoundPlayer}
          component={SoundPlayer}
        />
        <AfterLoginStack.Screen
          name={Route.CreateSublyForm}
          component={CreateSublyForm}
        />
        <AfterLoginStack.Screen
          name={Route.Affrimation}
          component={Affrimation}
        />
        <AfterLoginStack.Screen
          name={Route.CustomizeSublimal}
          component={CustomizeSublimal}
        />
        <AfterLoginStack.Screen
          name={Route.CreateSublimalFinal}
          component={CreateSublimalFinal}
        />
      </AfterLoginStack.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    marginTop: hp(10.5),
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 1000,
  },
  progressText: {
    fontSize: hp(1.8),
    fontWeight: 'bold',
    color: Colors.purple,
    alignSelf: 'flex-end',
  },
});

export default AfterLoginNavigator;
