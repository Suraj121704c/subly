import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
  DeviceEventEmitter,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Share from 'react-native-share';

// user-defined imports
import {styles} from './styles';
import {Images} from '../../../Utils/images';
import {Route} from '../../../Navigation/constants';
import * as Storage from '../../../Services/AsyncStoreConfig';

const IntroScreen = () => {
  const navigation = useNavigation<any>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkStepAndNavigate = async () => {
      const stepValue = await Storage.getData('intoScreen');
      if (stepValue !== null) {
        navigation.replace(Route.BottomTab);
      } else {
        setIsLoading(false);
      }
    };
    checkStepAndNavigate();
  }, [navigation]);

  const _onPressStart = () => {
    Storage.saveData('intoScreen', 'seen');
    navigation.replace(Route.BottomTab);
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#9333ea" />
      </View>
    );
  }

  const handleShare = async () => {
    const shareOptions = {
      title: 'Share with partner and friends!',
      message: 'Peace be with you',
      url: 'https://couplebiblebackend-production.up.railway.app/',
    };

    try {
      await Share.open(shareOptions);
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={Images.prayCoupleGlow}
        style={styles.imageHeader}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <View style={styles.logoRow}>
          <Image source={Images.coupleBible} style={styles.crossIcon} />
        </View>

        <Text style={styles.questionText}>
          Are you ready to put God at{'\n'}the center of your relationship{'\n'}
          starting today?
        </Text>

        <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
          <Image source={Images.send} style={styles.shareIcon} />
          <Text style={styles.shareText}>Share with your partner</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={_onPressStart}>
          <Text style={styles.buttonText}>Let’s start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IntroScreen;
