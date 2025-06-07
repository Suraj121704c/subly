import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import Superwall from '@superwall/react-native-superwall';
import {useNavigation} from '@react-navigation/native';

// User-defined imports
import {styles} from './styles';
import {Images} from '../../../Utils/images';
import {subliminals, themes} from '../../../Mock';
import {Route} from '../../../Navigation/constants';

const HomeScreen = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    const checkAndShowPaywall = async () => {
      try {
        await Superwall.configure({
          apiKey: 'pk_1e2c8284f8f19c856959c1b84f8bd7edbe1ade05a0e4d6e1',
        });

        const status = await Superwall.shared.getSubscriptionStatus();

        if (status.status !== 'ACTIVE') {
          await Superwall.shared.register({
            placement: 'SignUp',
            handler: {
              onPresent: info => console.log('Paywall shown:', info.name),
              onDismiss: async () => {
                const updatedStatus =
                  await Superwall.shared.getSubscriptionStatus();
                if (updatedStatus.status === 'ACTIVE') {
                  console.log('User subscribed after dismiss');
                }
              },
              onError: err => console.error('Paywall error:', err),
              onSkip: reason => console.warn('Skipped:', reason),
            },
          });
        } else {
          console.log('User is already subscribed');
        }
      } catch (err) {
        console.error('[Superwall] Error during flow:', err);
      }
    };

    checkAndShowPaywall();
  }, []);

  const _onMoreCategories = () => {
    navigation.navigate(Route.BottomTab, {screen: Route.Library});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={Images.logo}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity
          style={styles.createButton}
          onPress={() => navigation.navigate(Route.CreateSublyForm)}>
          <Text style={styles.createButtonText}>+ Create new subliminal</Text>
        </TouchableOpacity>
        {/* Your Sublys Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Sublys</Text>

          {subliminals.map((item, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(Route.SoundPlayer)}
              key={index}
              style={[
                styles.subliminalCard,
                {backgroundColor: item.backgroundColor},
              ]}>
              <View style={styles.playButton}>
                <Image source={Images.play} style={styles.playIcon} />
              </View>
              <View style={styles.subliminalContent}>
                <Text style={styles.subliminalTitle}>{item.title}</Text>
                <Text style={styles.subliminalSubtitle}>{item.subtitle}</Text>
              </View>
            </TouchableOpacity>
          ))}

          <TouchableOpacity style={styles.allSubliminals}>
            <Text style={styles.allSubliminalText}>All subliminals</Text>
            <Image source={Images.arrowRight} style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>

        {/* Popular Themes Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Categories</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.themesContainer}>
            {themes.map((theme, index) => (
              <TouchableOpacity key={index} style={styles.themeCard}>
                <Image source={theme.image} style={styles.themeImage} />
                <Text style={styles.themeTitle}>{theme.title}</Text>
                <Image source={Images.arrowRight} style={styles.themeArrow} />
              </TouchableOpacity>
            ))}
          </ScrollView>

          <TouchableOpacity
            style={styles.moreThemes}
            onPress={_onMoreCategories}>
            <Text style={styles.moreThemesText}>Explore more categories</Text>
            <Image source={Images.arrowRight} style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
