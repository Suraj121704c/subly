import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  AppState,
  AppStateStatus,
  Alert,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Sound from 'react-native-sound';

// user defined imports
import {styles} from './styles';
import AppHeader from '../../../Components/AppHeader';
import * as Storage from '../../../Services/AsyncStoreConfig';
import {getUpdatedArray} from '../../../Helper';
import {Images} from '../../../Utils/images';
import GradientButton from '../../../Components/GradientButton';

const PlanVerseExplanation = () => {
  const navigation = useNavigation();
  const appState = useRef(AppState.currentState);
  const soundRef = useRef<Sound | null>(null);
  const [hasFinished, setHasFinished] = useState(false);
  const {planDetails, dayDetails} = useRoute<any>()?.params;
  const [isPlaying, setIsPlaying] = useState(false);

  const setVisit = async () => {
    // await Storage.removeData('Activated');
    const active = await Storage.getData('Activated');
    if (active) {
      const parseDetails = JSON.parse(active);
      const isAlreadyExistPlan = parseDetails.find(
        (item: any) => item.id === planDetails.id,
      );
      if (isAlreadyExistPlan) {
        const details = {
          ...isAlreadyExistPlan,
          days: getUpdatedArray(isAlreadyExistPlan?.days, dayDetails.id),
        };
        const updatedArr = parseDetails.map((item: any) => {
          if (item.id == isAlreadyExistPlan.id) {
            return details;
          } else {
            return item;
          }
        });
        await Storage.saveData('Activated', JSON.stringify(updatedArr));
      } else {
        const details = {
          ...planDetails,
          days: getUpdatedArray(planDetails?.days, dayDetails.id),
        };
        const updatedArr = [details, ...parseDetails];
        await Storage.saveData('Activated', JSON.stringify(updatedArr));
      }
    } else {
      const details = [
        {
          ...planDetails,
          days: getUpdatedArray(planDetails?.days, dayDetails.id),
        },
      ];
      await Storage.saveData('Activated', JSON.stringify(details));
    }
    navigation.goBack();
  };

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
        play();
      } else if (nextAppState === 'background') {
        console.log('App has gone to the background!');
        pause();
      }

      appState.current = nextAppState;
    };

    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    Sound.setCategory('Playback', true);
    const sound = new Sound(dayDetails?.url, '', error => {
      if (error) {
        Alert.alert('Error loading sound', error.message);
        return;
      }
      // Don't automatically play when loaded
      soundRef.current = sound;
    });

    return () => {
      sound.release(); // Clean up on unmount
    };
  }, []);

  const play = () => {
    const sound = soundRef.current;
    if (sound) {
      sound.play(success => {
        if (success) {
          console.log('Playback finished');
          setIsPlaying(false);
          setHasFinished(true);
        } else {
          console.log('Playback failed');
          setIsPlaying(false);
        }
      });
      setIsPlaying(true);
      setHasFinished(false);
    }
  };

  const stop = () => {
    const sound = soundRef.current;
    if (sound) {
      sound.stop();
      setIsPlaying(false);
      setHasFinished(false);
    }
  };

  const pause = () => {
    const sound = soundRef.current;
    if (sound) {
      sound.pause();
      setIsPlaying(false);
    }
  };

  const replay = () => {
    stop();
    play();
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader
        backIcon={true}
        headerTitle={`Day ${dayDetails?.day_number}`}
        headerStyle={styles.dayText}
      />
      <View style={styles.playPauseContainer}>
        {hasFinished ? (
          <TouchableOpacity onPress={replay}>
            <Image source={Images.replay} style={styles.backIcon} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={isPlaying ? pause : play}>
            <Image
              source={isPlaying ? Images.pause : Images.play}
              style={styles.backIcon}
            />
          </TouchableOpacity>
        )}
      </View>
      <ScrollView
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Text style={styles.subtitle}>{dayDetails?.verse_reference}</Text>
        </View>
        <View style={styles.explanationContainer}>
          {dayDetails?.verse_content
            .split(/\n+/)
            .map((line: string, idx: number) => {
              // Trim whitespace
              const trimmed = line.trim();
              // Check if line is a heading (ends with colon or matches known headings)
              const isHeading =
                trimmed.endsWith(':') ||
                [
                  'Context:',
                  'Verse Explanation:',
                  'Main Takeaways:',
                  'Action Plan:',
                  'Questions to Ask Myself:',
                ].includes(trimmed);
              if (!trimmed) return null; // skip empty lines
              return (
                <Text
                  key={idx}
                  style={
                    isHeading ? styles.headingPurple : styles.explanationText
                  }>
                  {trimmed}
                </Text>
              );
            })}
        </View>
      </ScrollView>
      <GradientButton
        title="Mark As Complete"
        style={styles.completeBtn}
        btnTxtStyle={styles.completeBtnTxt}
        onPress={setVisit}
      />
    </SafeAreaView>
  );
};

export default PlanVerseExplanation;
