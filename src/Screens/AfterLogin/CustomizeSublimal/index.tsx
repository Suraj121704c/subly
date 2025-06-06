import React, {useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import Slider from '@react-native-community/slider';
import {useNavigation, useRoute} from '@react-navigation/native';

// user defined imports
import {styles} from './styles';
import {Images} from '../../../Utils/images';
import {Route} from '../../../Navigation/constants';

const CustomizeSublimal = () => {
  const {frequencyValue} = useRoute<any>().params;
  const navigation = useNavigation<any>();
  const [volume, setVolume] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [silence, setSilence] = useState(0);
  const [stereo, setStereo] = useState('Both');

  const handleNextPress = () => {
    const params = {
      frequencyValue: frequencyValue,
      volume: JSON.parse(volume.toFixed(1)),
      speed: JSON.parse(speed.toFixed(1)),
      silence: JSON.parse(silence.toFixed(1)),
      stereo: stereo.toLowerCase(),
    };
    navigation.navigate(Route.CreateSublimalFinal, {params: params});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={Images.back} style={styles.backicon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Create new Subly</Text>
          <TouchableOpacity />
        </View>
        <View style={styles.trackInfo}>
          <Text style={styles.stepText}>3</Text>
          <Text style={styles.trackTitle}>Customize subliminal</Text>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.settingsContainer}>
            <Text style={styles.settingTitle}>Affirmation volume</Text>
            <Slider
              value={volume}
              onValueChange={setVolume}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#A259FF"
              maximumTrackTintColor="#E5E5E5"
              thumbTintColor="#A259FF"
            />
            <View style={styles.sliderLabels}>
              <Text style={styles.sliderLabel}>Low</Text>
              <Text style={styles.sliderLabel}>High</Text>
            </View>

            <Text style={styles.settingTitle}>Speed</Text>
            <Slider
              value={speed}
              onValueChange={setSpeed}
              minimumValue={1}
              maximumValue={3}
              step={0.1}
              minimumTrackTintColor="#A259FF"
              maximumTrackTintColor="#E5E5E5"
              thumbTintColor="#A259FF"
            />
            <View style={styles.sliderLabels}>
              <Text style={styles.sliderLabel}>1x</Text>
              <Text style={styles.sliderLabel}>3x</Text>
            </View>

            <Text style={styles.settingTitle}>
              Silence between each affirmation
            </Text>
            <Slider
              value={silence}
              onValueChange={setSilence}
              minimumValue={0}
              maximumValue={5}
              step={0.1}
              minimumTrackTintColor="#A259FF"
              maximumTrackTintColor="#E5E5E5"
              thumbTintColor="#A259FF"
            />
            <View style={styles.sliderLabels}>
              <Text style={styles.sliderLabel}>0s</Text>
              <Text style={styles.sliderLabel}>5s</Text>
            </View>

            <Text style={styles.settingTitle}>Stereo</Text>
            <View style={styles.stereoContainer}>
              {['Left', 'Right', 'Both'].map(option => (
                <TouchableOpacity
                  key={option}
                  style={styles.stereoOption}
                  onPress={() => setStereo(option)}>
                  <View style={styles.radioButton}>
                    {stereo === option && (
                      <View style={styles.radioButtonSelected} />
                    )}
                  </View>
                  <Text
                    style={[
                      styles.stereoText,
                      stereo === option && styles.stereoTextSelected,
                    ]}>
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={handleNextPress} style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CustomizeSublimal;
