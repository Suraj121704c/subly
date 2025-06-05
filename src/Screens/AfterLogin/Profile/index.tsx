import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Linking,
  ScrollView,
} from 'react-native';
import Share from 'react-native-share';

// user-defined Import files
import {Images} from '../../../Utils/images';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {supabase} from '../../../Client/superbase';
import {logOutAction} from '../../../Redux/Actions/logoutAction';

const SettingsScreen = () => {
  const dispatch = useDispatch<any>();
  const {user} = useSelector((state: any) => state.userProfile);


  const _onLogout = () => {
    dispatch(logOutAction());
  };

  // const handleShare = async () => {
  //   const shareOptions = {
  //     title: 'Share with partner and friends!',
  //     message: 'Peace be with you',
  //     url: 'https://couplebiblebackend-production.up.railway.app/',
  //   };

  //   try {
  //     await Share.open(shareOptions);
  //   } catch (error) {
  //     console.error('Error sharing:', error);
  //   }
  // };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.header}>
          <Image source={Images.logo} style={styles.logo} />
        </View>
        <View style={styles.profileSection}>
          <Image source={Images.soundPlayer_bg} style={styles.avatar} />
          <Text style={styles.profileName}>My Subly</Text>
        </View>
        <Text style={styles.settingsTitle}>Settings</Text>
        <View style={styles.settingsBox}>
          <TouchableOpacity style={styles.settingsItem}>
            <Image source={Images.shield} style={styles.iconShield} />
            <Text style={styles.settingsText}>Terms and Conditions</Text>
            <Image source={Images.arrowRight} style={styles.arrowIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingsItem}>
            <Image source={Images.policy} style={styles.iconDoc} />
            <Text style={styles.settingsText}>Privacy Policy</Text>
            <Image source={Images.arrowRight} style={styles.arrowIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingsItem}>
            {/* <View style={styles.iconMail} /> */}
            <Image source={Images.mail} style={styles.iconMail} />
            <Text style={styles.settingsText}>Support</Text>
            <Image source={Images.arrowRight} style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>
        {/* Buttons */}
        <View style={styles.buttonSection}>
          <TouchableOpacity style={styles.logoutButton} onPress={_onLogout}>
            <Text style={styles.logoutButtonText}>Log out</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={_onLogout} style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>Delete Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;
