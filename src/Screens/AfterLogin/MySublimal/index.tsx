import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';

// user defined import
import {styles} from './styles';
import {Images} from '../../../Utils/images';

const MySublimal = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <Image source={Images.logo} style={styles.logo} />
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.cardRow}>
          <Image source={Images.heart} style={styles.heartIcon} />
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Liked subliminals</Text>
            <Text style={styles.cardSubtitle}>All your saved Subliminals.</Text>
          </View>
          <Image source={Images.arrowRight} style={styles.arrowIcon} />
        </View>
      </View>
      <Text style={styles.sectionTitle}>Created Subliminals</Text>
      <Text style={styles.emptyText}>No Sublys created yet. Create one!</Text>
    </SafeAreaView>
  );
};

export default MySublimal;
