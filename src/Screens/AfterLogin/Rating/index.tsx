import {
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

// user defined imports
import {Route} from '../../../Navigation/constants';
import {Images} from '../../../Utils/images';
import {styles} from './styles';

const Rating = () => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ratingContainer}>
        <Image source={Images.coupleBible} style={styles.logoImage} />

        <Image source={Images.threeStar} style={styles.starImage} />

        <Text style={styles.title}>Help us grow</Text>
        <Text style={styles.subtitle}>
          Join together in faith by giving us a review on the App Store.
        </Text>

        <View style={styles.testimonialWrapper}>
          <Image source={Images.maya} style={styles.userImage} />
          <View style={styles.testimonialBox}>
            <Text style={styles.userName}>Maya</Text>
            <Text style={styles.testimonialText}>
              "Using Couple Bible app has deepened our connection and now we
              find joy in sharing our faith together effortlessly."
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.ctaButton}>
        <Text style={styles.ctaText}>Rate us</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Rating;
