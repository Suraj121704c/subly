import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

// user defined import
import {styles} from './styles';
import { Images } from '../../../Utils/images';

const cards = [
  {title: 'Inner Peace', image: Images.neck},
  {title: 'Self Love', image: Images.selflove},
  {title: 'Study', image: Images.study},
  // Add more cards as needed
];

const Library = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <Image source={Images.logo} style={styles.logo} />
      </View>
      <View style={styles.divider} />
      <Text style={styles.sectionTitle}>Subliminal Library</Text>
      <ScrollView
        contentContainerStyle={styles.cardsContainer}
        showsVerticalScrollIndicator={false}>
        {cards.map((card, idx) => (
          <TouchableOpacity key={idx} style={styles.card} activeOpacity={0.8}>
            <Image source={card.image} style={styles.cardImage} />
            <View style={styles.overlay}>
              <Text style={styles.cardTitle}>{card.title}</Text>
              <Image source={Images.arrowRight} style={styles.arrowIcon} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Library;
