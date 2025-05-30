import {
  View,
  Text,
  Image,
  ActivityIndicator,
  DeviceEventEmitter,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

// User-defined Import files
import Container from '../../../Components/Container';
import Carousel from '../../../Components/Carousel';
import {styles} from './styles';
import Button from '../../../Components/Button';
import {Route} from '../../../Navigation/constants';
import {CarouselData} from '../../../Mock';
import {Images} from '../../../Utils/images';
import * as Storage from '../../../Services/AsyncStoreConfig';

const INTRO_PROGRESS_KEY = 'intro_carousel_progress';

const Intro = () => {
  const carouselRef = useRef<any>(null);
  const navigation = useNavigation<any>();
  const [isLastItem, setLastItem] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadProgressAndNavigate = async () => {
      try {
        const stepValue = await Storage.getData('step');
        const savedProgress = await Storage.getData(INTRO_PROGRESS_KEY);

        if (stepValue !== null) {
          navigation.replace(Route.CoupleGraph);
        } else if (savedProgress) {
          const savedIndex = parseInt(savedProgress);
          setCurrentIndex(savedIndex);
          // Wait for carousel to be ready before setting index
          setTimeout(() => {
            for (let i = 0; i < savedIndex; i++) {
              carouselRef.current?.goToNextItem();
            }
          }, 100);
        }
        setIsLoading(false);
        await Storage.saveData('slideQuide', 'Done');
      } catch (error) {
        console.error('Error loading intro progress:', error);
        setIsLoading(false);
      }
    };
    loadProgressAndNavigate();
  }, [navigation]);

  const saveProgress = async (index: number) => {
    try {
      await Storage.saveData(INTRO_PROGRESS_KEY, index.toString());
    } catch (error) {
      console.error('Error saving intro progress:', error);
    }
  };

  const handleScroll = (event: any) => {
    const newIndex = Math.round(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width,
    );

    // Only emit events if the index actually changed
    if (newIndex !== currentIndex) {
      // Determine direction based on index change
      if (newIndex > currentIndex) {
        // Scrolling right - emit progress event
        DeviceEventEmitter.emit('STEP_PROGRESS');
      } else if (newIndex < currentIndex) {
        // Scrolling left - emit step decrease event
        DeviceEventEmitter.emit('STEP_DECREASE');
      }

      setCurrentIndex(newIndex);
      saveProgress(newIndex);
    }
    setPreviousIndex(newIndex);
  };

  const handleNextPress = async () => {
    if (isLastItem) {
      await Storage.saveData('step', '1');
      navigation.navigate(Route.CoupleGraph);
    } else {
      carouselRef.current?.goToNextItem();
    }
  };

  const renderItem = (item: any) => {
    return (
      <View style={styles.carouselContainer}>
        <View style={styles.carouselView}>
          <Image source={item.image} style={styles.carouselImg} />
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={styles.descriptionTxt}>{item?.description}</Text>
        </View>
      </View>
    );
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#9333ea" />
      </View>
    );
  }

  return (
    <Container
      statusBarColor="#FFFFFF"
      containerColor="#FFFFFF"
      barStyle="dark-content">
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Image source={Images.sublyLogo} style={styles.coupleBibleImage} />
        </View>
        <View style={styles.innerContainer}>
          <Carousel
            ref={carouselRef}
            data={CarouselData}
            renderItem={renderItem}
            onLastItemReached={setLastItem}
            onScroll={handleScroll}
          />
        </View>
        <Button
          title="Continue"
          style={styles.nextBtn}
          btnStyle={styles.nextBtnTxt}
          onPress={handleNextPress}
        />
      </View>
    </Container>
  );
};

export default Intro;
