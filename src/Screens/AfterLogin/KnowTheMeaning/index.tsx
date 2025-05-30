import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  AppState,
  AppStateStatus,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Tts from 'react-native-tts';
import {useDispatch, useSelector} from 'react-redux';
import Sound from 'react-native-sound';

//user-define Import files
import {styles} from './styles';
import {Images} from '../../../Utils/images';
import {useNavigation} from '@react-navigation/native';
import {Route} from '../../../Navigation/constants';
import {updateStepCountAction} from '../Home/Controller/action';

const KnowTheMeaning = () => {
  const dispatch = useDispatch<any>();
  const soundRef = useRef<Sound | null>(null);
  const navigation = useNavigation<any>();
  const {posts} = useSelector((state: any) => state.posts);
  const appState = useRef(AppState.currentState);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const {user} = useSelector((state: any) => state.userProfile);

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
    const sound = new Sound(posts?.url, '', error => {
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

  const handleNext = async () => {
    if (user?.id) {
      const data = {
        stepName: 'step1',
        user_id: user?.id,
        value: true,
      };
      dispatch(updateStepCountAction(data))
        .unwrap()
        .then((res: any) => {
          navigation.pop();
          navigation.goBack();
        });
    }
  };

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
      <View style={styles.headerView}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={Images.back} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Verse explanation</Text>
        <View style={{flexDirection: 'row', gap: 10}}>
          {hasFinished ? (
            <TouchableOpacity onPress={replay}>
              <Image
                source={Images.replay}
                style={[styles.backIcon, {width: 24, height: 24}]}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={isPlaying ? pause : play}>
              <Image
                source={isPlaying ? Images.pause : Images.play}
                style={[styles.backIcon, {width: 24, height: 24}]}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.contentView}>
          <Text style={styles.verseText}>{posts?.data?.split('-')[1]}</Text>
          <View style={styles.tagContainer}>
            <Text style={styles.tagText}>{posts?.data?.split('-')[0]}</Text>
          </View>

          <Text style={styles.sectionTitle}>Context:</Text>
          <Text style={styles.paragraph}>
            {posts?.detail
              ?.split('**Context**')[1]
              ?.split('**Verse Explanation**')[0]
              ?.trim()}
          </Text>

          <Text style={styles.sectionTitle}>Verse Explanation:</Text>
          <Text style={styles.paragraph}>
            {posts?.detail
              ?.split('**Verse Explanation**')[1]
              ?.split('**Main Takeaways**')[0]
              ?.trim()}
          </Text>

          <Text style={styles.sectionTitle}>Main Takeaways:</Text>
          {posts?.detail
            ?.split('**Main Takeaways**')[1]
            ?.split('**Action Plan**')[0]
            ?.trim()
            .split('-')
            .filter((item: string) => item.trim())
            .map((point: string, index: number) => (
              <Text key={index} style={styles.bulletPoint}>
                <Text style={{color: '#6B4EFF'}}>➜ </Text>
                {point.trim()}
              </Text>
            ))}

          <Text style={styles.sectionTitle}>Action Plan:</Text>
          {posts?.detail
            ?.split('**Action Plan**')[1]
            ?.trim()
            .split('-')
            .filter((item: string) => item.trim())
            .map((point: string, index: number) => (
              <Text key={index} style={styles.bulletPoint}>
                <Text style={{color: '#6B4EFF'}}>➜ </Text>
                {point.trim()}
              </Text>
            ))}
        </View>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextText}>{'Finish ➤'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default KnowTheMeaning;
