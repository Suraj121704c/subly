import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import {useNavigation} from '@react-navigation/native';
// user defined imports
import {styles} from './styles';
import {Images} from '../../../Utils/images';

const SoundPlayer = () => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Images.back} style={styles.backicon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>From your Sublys</Text>
        <TouchableOpacity></TouchableOpacity>
      </View>
      <View style={styles.coverContainer}>
        <Image
          source={Images.soundPlayer_bg}
          style={styles.coverImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.trackInfo}>
        <Text style={styles.trackTitle}>For my morning meditation</Text>
        <Text style={styles.trackSubtitle}>Peaceful hill sounds</Text>
      </View>
      <View style={styles.progressContainer}>
        <Slider
          style={styles.progressBar}
          minimumValue={0}
          maximumValue={1}
          value={0.3}
          minimumTrackTintColor="#8B5CF6"
          maximumTrackTintColor="#E5E7EB"
          thumbTintColor="#8B5CF6"
        />
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>1:06</Text>
          <Text style={styles.timeText}>3:12</Text>
        </View>
      </View>
      <View style={styles.controls}>
        <TouchableOpacity>
          <Image
            source={Images.suffle}
            style={[styles.icon, {tintColor: '#a6a6a6'}]}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Images.skip_prev} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Images.play_purple} style={styles.playIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Images.skip_next} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Images.loop} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SoundPlayer;
