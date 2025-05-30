import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Animated,
  Easing,
  ActivityIndicator,
  DeviceEventEmitter,
} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

// user-defined
import {Images} from '../../../Utils/images';
import {Colors} from '../../../Utils/colors';
import {styles} from './styles';
import * as Storage from '../../../Services/AsyncStoreConfig';
import {useNavigation} from '@react-navigation/native';
import {Route} from '../../../Navigation/constants';

const AnimatedCouple = () => {
  const circleRef = useRef<any>();
  const navigation = useNavigation<any>();
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [percentage, setPercentage] = useState(0);
  const radius = 60;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const [isLoading, setIsLoading] = useState(true);
  const hasNavigated = useRef(false);

  useEffect(() => {
    const checkStepAndNavigate = async () => {
      const stepValue = await Storage.getData('animatedCouple');
      console.log('stepValue', stepValue);
      if (stepValue !== null) {
        navigation.replace(Route.IntoScreen);
      } else {
        setIsLoading(false);
      }
    };
    // DeviceEventEmitter.emit('STEP_PROGRESS', 0.8);
    checkStepAndNavigate();
  }, [navigation]);

  useEffect(() => {
    if (!isLoading) {
      Animated.timing(animatedValue, {
        toValue: 100,
        duration: 5000,
        easing: Easing.out(Easing.exp),
        useNativeDriver: false,
      }).start();

      animatedValue.addListener(async v => {
        const maxPerc = v.value;
        const strokeDashoffset =
          circumference - (circumference * maxPerc) / 100;

        if (circleRef?.current) {
          circleRef.current.setNativeProps({
            strokeDashoffset,
          });
        }

        const rounded = Math.round(v.value);
        setPercentage(rounded);

        if (rounded === 100 && !hasNavigated.current) {
          hasNavigated.current = true;
          await Storage.saveData('animatedCouple', 'seen');
          navigation.replace(Route.IntoScreen);
        }
      });
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#9333ea" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={Images.coupleBible} style={styles.logo} />

      <Image source={Images.animatedCouple} style={styles.image} />

      <View style={styles.progressContainer}>
        <Svg width={150} height={150} viewBox="0 0 150 150">
          <Circle
            cx="75"
            cy="75"
            r={radius}
            stroke="#e5e5e5"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <Circle
            ref={circleRef}
            cx="75"
            cy="75"
            r={radius}
            stroke={Colors.purple}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            strokeLinecap="round"
            fill="none"
          />
        </Svg>
        <View style={styles.percentTextContainer}>
          <Text style={styles.percentText}>{percentage}%</Text>
        </View>
      </View>

      <Text style={styles.title}>
        Personalizing your journey{'\n'}and prayers
      </Text>
      <Text style={styles.subTitle}>
        Creating a meaningful path for{'\n'}your shared faith journey.
      </Text>
    </SafeAreaView>
  );
};

export default AnimatedCouple;
