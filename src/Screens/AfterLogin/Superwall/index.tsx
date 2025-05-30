import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// user defined imports
import {styles} from './styles';
import {Images} from '../../../Utils/images';
import {Route} from '../../../Navigation/constants';
import {useDispatch} from 'react-redux';
import {superwallStatusAction} from './Controller/action';
import {supabase} from '../../../Client/superbase';

const Superwall = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();

  useEffect(() => {
    const getUserId = async () => {
      const {
        data: {user},
        error,
      } = await supabase.auth.getUser();

      const userId = user?.id;
      if (userId) {
        dispatch(superwallStatusAction(userId));
      }
    };
    getUserId();
  }, []);

  const _onPressContinue = () => {
    navigation.navigate(Route.BottomTab);
  };

  return (
    <View style={styles.container}>
      <Image source={Images.prayingCouple} style={styles.topImage} />
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Your Journey Deserves Commitment</Text>
        <View style={styles.bulletWrapper}>
          <Image source={Images.superWallTick} style={styles.bulletIcon} />
          <Text style={styles.bulletText}>
            Daily nudges that realign your path
          </Text>
        </View>
        <View style={styles.bulletWrapper}>
          <Image source={Images.superWallTick} style={styles.bulletIcon} />
          <Text style={styles.bulletText}>Guided quizzes & reflections</Text>
        </View>
        <View style={styles.bulletWrapper}>
          <Image source={Images.superWallTick} style={styles.bulletIcon} />
          <Text style={styles.bulletText}>
            Handpicked verses that speak to you
          </Text>
        </View>

        <View style={styles.bulletWrapper}>
          <Image source={Images.superWallTick} style={styles.bulletIcon} />
          <Text style={styles.bulletText}>
            Save your sacred journey, together
          </Text>
        </View>
        <Text style={styles.priceText}>US $4.99/month</Text>
        <TouchableOpacity style={styles.ctaButton} onPress={_onPressContinue}>
          <Text style={styles.ctaText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Superwall;
