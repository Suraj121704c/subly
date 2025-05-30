import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Linking,
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

  const handleDeleteAccount = async () => {
    dispatch(logOutAction());
  };

  const handleShare = async () => {
    const shareOptions = {
      title: 'Share with partner and friends!',
      message: 'Peace be with you',
      url: 'https://couplebiblebackend-production.up.railway.app/',
    };

    try {
      await Share.open(shareOptions);
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={Images.coupleBible} style={styles.logo} />

        <Text style={styles.sectionTitle}>Legal and support</Text>
        <View style={styles.card}>
          <TouchableOpacity style={styles.listItem} onPress={handleShare}>
            <View style={styles.iconLabel}>
              <Image source={Images.send} style={styles.itemIcon} />
              <Text style={styles.itemText}>
                Share with partner and friends!
              </Text>
            </View>
            <Text style={styles.itemArrow}>→</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.listItem}
            onPress={() =>
              Linking.openURL(
                'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
              )
            }>
            <View style={styles.iconLabel}>
              <Image source={Images.terms} style={styles.itemIcon} />
              <Text style={styles.itemText}>Terms and conditions</Text>
            </View>
            <Text style={styles.itemArrow}>→</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => Linking.openURL('https://www.subly.fun/privacy')}>
            <View style={styles.iconLabel}>
              <Image source={Images.privacy} style={styles.itemIcon} />
              <Text style={styles.itemText}>Privacy policy</Text>
            </View>
            <Text style={styles.itemArrow}>→</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Account actions</Text>
        <View style={styles.card}>
          <Text style={styles.emailText}>{user?.email}</Text>
          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.listItem}
            onPress={() => dispatch(logOutAction())}>
            <View style={styles.iconLabel}>
              <Image source={Images.logout} style={styles.itemIcon} />
              <Text style={styles.itemText}>Log out</Text>
            </View>
            <Text style={styles.itemArrow}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.listItem}
            onPress={handleDeleteAccount}>
            <View style={styles.iconLabel}>
              <Image source={Images.trash} style={styles.itemIcon} />
              <Text style={styles.deleteText}>Delete account</Text>
            </View>
            <Text style={[styles.itemArrow, {color: '#ef4444'}]}>→</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
