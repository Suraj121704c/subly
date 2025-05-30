import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  DeviceEventEmitter,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// User-defined imports
import {Images} from '../../../Utils/images';
import {Route} from '../../../Navigation/constants';
import {styles} from './styles';
import * as Storage from '../../../Services/AsyncStoreConfig';

const CoupleGraph = () => {
  const navigation = useNavigation<any>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkStepAndNavigate = async () => {
      const stepValue = await Storage.getData('graph');
      if (stepValue !== null) {
        navigation.replace(Route.ImageSlider);
      } else {
        setIsLoading(false);
      }
    };
    // DeviceEventEmitter.emit('STEP_PROGRESS', 0.4);
    checkStepAndNavigate();
  }, [navigation]);

  const handleNextPress = () => {
    DeviceEventEmitter.emit('STEP_PROGRESS');
    navigation.navigate(Route.ImageSlider);
    Storage.saveData('graph', 'added');
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#9333ea" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* <Image source={Images.back} style={styles.backIcon} /> */}
        <View></View>
        <Image source={Images.coupleBible} style={styles.logo} />
        <View></View>
      </View>

      <Image
        source={Images.graph}
        style={styles.graphImage}
        resizeMode="contain"
      />

      <Text style={styles.researchLabel}>Research says</Text>
      <Text style={styles.researchText}>
        65% of couples that don't{'\n'}regularly pray together will{'\n'}end in
        Divorce
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleNextPress}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CoupleGraph;
