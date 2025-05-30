import {
  Alert,
  Image,
  ImageBackground,
  Linking,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Share from 'react-native-share';
import {useDispatch, useSelector} from 'react-redux';
import Superwall from '@superwall/react-native-superwall';
import SharedGroupPreferences from 'react-native-shared-group-preferences';

// User-defined imports
import {styles} from './styles';
import {Images} from '../../../Utils/images';
import {Route} from '../../../Navigation/constants';
import {Colors} from '../../../Utils/colors';
import {getVerseOfTheDayAction} from '../../../Redux/Actions/postsActions';
import {stepCountAction} from './Controller/action';
import {fetchUserProfile} from '../../../Redux/Actions/userProfileAction';

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const dispatch = useDispatch<any>();
  const {posts} = useSelector((state: any) => state.posts);
  const {user} = useSelector((state: any) => state.userProfile);
  const [stepCount, setStepCount] = useState<any>(null);

  const [faithProgress, setFaithProgress] = useState<{
    step1: boolean;
    step2: boolean;
    step3: boolean;
    created_at: string;
  }>({
    step1: false,
    step2: false,
    step3: false,
    created_at: new Date().toISOString(),
  });
  const isFocused = useIsFocused();

  const [defaultVerse] = useState({
    data: "Jeremiah 29:11 - 'For I know the plans I have for you,' declares the Lord, 'plans to prosper you and not to harm you, plans to give you hope and a future.'",
    detail:
      "Jeremiah 29:11 is a promise of God's intentional care and purpose in our lives. It reminds us that even when life feels chaotic or aimless, God is still working behind the scenes for our good. This verse provides comfort during setbacks, failed plans, or moments of despair—assuring us that hope and restoration are part of God's plan. Embracing this truth helps us release anxiety, trust in divine timing, and move forward with faith that better days are ahead.",
  });

  const appGroupIdentifier = 'group.coupleBible';

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, []);

  useEffect(() => {
    if (user?.id) {
      dispatch(stepCountAction(user?.id))
        .unwrap()
        .then((res: any) => {
          setStepCount(res);
        });
    }
  }, [user, isFocused]);

  useEffect(() => {
    if (stepCount) {
      setFaithProgress({
        step1: stepCount.step1,
        step2: stepCount.step2,
        step3: stepCount.step3,
        created_at: stepCount.created_at,
      });
    }
  }, [stepCount]);

  useEffect(() => {
    dispatch(getVerseOfTheDayAction());
  }, []);

  useEffect(() => {
    if (posts?.data) {
      const verse = posts.data;
      SharedGroupPreferences.setItem('verseOfTheDay', verse, appGroupIdentifier)
        .then(() => {
          console.log('Verse saved to app group');
        })
        .catch(err => {
          console.log('Error saving verse to app group:', err);
        });
    }
  }, [posts]);

  const [expandedMissions, setExpandedMissions] = useState<
    Record<string, boolean>
  >({
    dailyBibleVerse: true,
    prayerSession: true,
    dailyQwiz: true,
  });

  useEffect(() => {
    // Close missions as they are completed
    if (faithProgress.step1) {
      setExpandedMissions(prev => ({...prev, dailyBibleVerse: false}));
    }
    if (faithProgress.step2) {
      setExpandedMissions(prev => ({...prev, prayerSession: false}));
    }
    if (faithProgress.step3) {
      setExpandedMissions(prev => ({...prev, dailyQwiz: false}));
    }
  }, [faithProgress]);

  const toggleMission = (mission: string) => {
    setExpandedMissions(prev => ({
      ...prev,
      [mission]: !prev[mission],
    }));
  };

  const totalFaith =
    (faithProgress?.step1 ? 1 : 0) +
    (faithProgress?.step2 ? 1 : 0) +
    (faithProgress?.step3 ? 1 : 0);

  const handleShare = async () => {
    const shareOptions = {
      title: 'Share Verse of the Day',
      message: `"${posts?.data?.split('-')[1]}" - ${
        posts?.data?.split('-')[0]
      }`,
      url: 'https://couplebiblebackend-production.up.railway.app/',
    };

    try {
      await Share.open(shareOptions);
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  const handleActionClick = async (action: string) => {
    try {
      await Superwall.shared.register({
        placement: 'campaign_trigger',
        handler: {
          onPresent: info => console.log('Paywall shown:', info.name),
          onDismiss: async () => {
            const updatedStatus =
              await Superwall.shared.getSubscriptionStatus();
            if (updatedStatus.status === 'ACTIVE') {
              console.log('User subscribed after dismiss');
              // Navigate to the appropriate screen after subscription
              if (action === 'verse') {
                navigation.navigate(Route.VerseOfTheDay);
              } else if (action === 'prayer') {
                navigation.navigate(Route.PrayerSession);
              } else if (action === 'quiz') {
                navigation.navigate(Route.QuizSection);
              }
            }
          },
          onError: err => console.error('Paywall error:', err),
          onSkip: reason => console.warn('Skipped:', reason),
        },
      });
    } catch (err) {
      console.error('[Superwall] Error during flow:', err);
    }
  };

  useEffect(() => {
    const checkAndShowPaywall = async () => {
      try {
        await Superwall.configure({
          apiKey: 'pk_da187f1ba33d54d5151202eb779374da8436c614259127ff',
        });

        const status = await Superwall.shared.getSubscriptionStatus();

        if (status.status !== 'ACTIVE') {
          await Superwall.shared.register({
            placement: 'campaign_trigger',
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={Images.coupleBible} style={styles.couplePhoto} />
      </View>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://forms.gle/rfWmQ8zMbAhY7zyVA')}
        style={styles.feedBackBtn}>
        <LinearGradient
          // colors={['#3da47d', '#54dba8']}
          // start={{x: 0, y: 0}}
          // end={{x: 1, y: 0}}
          colors={['#AA27F0', '#F6E7FE']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={styles.gradientStyle}>
          <View style={styles.feedBackBtnView}>
            <Image source={Images.rocket} style={styles.rocketImg} />
            <Text style={styles.feedBackBtnTxt}>
              We just launched! Adding new features daily Tap to give feedback ›
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <View style={styles.internalContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={[styles.card, {borderColor: '#AA27F0', borderWidth: 1}]}>
            <View style={styles.cardHeader}>
              <Text style={styles.title}>Verse of the day</Text>
              <TouchableOpacity onPress={handleShare}>
                <Image source={Images.share} style={styles.shareIcon} />
              </TouchableOpacity>
            </View>
            <Text style={styles.subTitle}>
              {posts?.data
                ? posts.data.split('-')[0]
                : defaultVerse.data.split('-')[0]}
            </Text>
            <View style={styles.verseBox}>
              <Text style={styles.dailyText}>
                {posts?.data
                  ? posts.data.split('-')[1]
                  : defaultVerse.data.split('-')[1]}
              </Text>
            </View>
          </View>
          <View style={[styles.card, {borderColor: '#AA27F0', borderWidth: 1}]}>
            <View style={styles.cardHeader}>
              <Text style={styles.title}>Nurture your faith daily</Text>
              <View style={styles.progressCircle}>
                <Text style={styles.progressText}>{totalFaith}/3</Text>
              </View>
            </View>
            <Text style={styles.subTitle}>Today's progress</Text>
            <View style={styles.progressBarContainer}>
              {[0, 1, 2].map(index => (
                <View
                  key={index}
                  style={[
                    styles.progressSegment,
                    {
                      backgroundColor:
                        index < totalFaith ? Colors.purple : '#e5e7eb',
                    },
                  ]}
                />
              ))}
            </View>

            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => {
                if (totalFaith === 0) {
                  // handleActionClick('verse');
                  navigation.navigate(Route.VerseOfTheDay);
                } else if (totalFaith === 1) {
                  // handleActionClick('prayer');
                  navigation.navigate(Route.PrayerSession);
                } else if (totalFaith === 2) {
                  // handleActionClick('quiz');
                  navigation.navigate(Route.QuizSection);
                } else {
                  Alert.alert('All tasks completed today', 'God Bless you');
                }
              }}>
              <Text style={[styles.buttonText, {color: Colors.white}]}>
                {totalFaith === 0
                  ? 'Start Session'
                  : totalFaith === 1
                  ? 'Do a prayer'
                  : totalFaith === 2
                  ? 'Take a quiz'
                  : 'Peace be with you'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.missionContainer}>
            <Image
              source={totalFaith === 3 ? Images.completion : Images.circle}
              style={[
                styles.tickIcon,
                {tintColor: totalFaith === 3 ? undefined : Colors.purple},
              ]}
            />

            <Text style={styles.missionText}>Today's missions</Text>
          </View>

          {/* <ImageBackground
            source={Images.imageBackground}
            style={styles.miniImageBackground}> */}
          <LinearGradient
            colors={['#f9f8ff', '#f9f8ff']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.miniImageBackground}>
            <TouchableOpacity
              style={styles.missionCard}
              onPress={() => toggleMission('dailyBibleVerse')}>
              <View style={styles.missionTop}>
                <View style={styles.dailyView}>
                  {faithProgress.step1 ? (
                    <Image
                      source={Images.completion}
                      style={styles.circleIcon}
                    />
                  ) : (
                    <Image
                      source={Images.circle}
                      style={[styles.circleIcon, {tintColor: Colors.purple}]}
                    />
                  )}
                  <Text style={styles.missionTitle}>Daily Bible Study</Text>
                  <Text style={styles.missionTime}>5 min</Text>
                </View>
                <Image
                  source={
                    expandedMissions['dailyBibleVerse']
                      ? Images.up
                      : Images.down
                  }
                  style={[styles.checkIcon, {tintColor: Colors.purple}]}
                />
              </View>
            </TouchableOpacity>
            {expandedMissions['dailyBibleVerse'] && (
              <View style={styles.missionCard}>
                <Text style={styles.verseText}>
                  Study {posts?.data?.split('-')[0]}
                </Text>
                <TouchableOpacity
                  style={styles.secondaryButton}
                  onPress={() => {
                    // handleActionClick('verse');
                    navigation.navigate(Route.VerseOfTheDay);
                  }}>
                  <Text style={styles.buttonText}>Start Bible Study →</Text>
                </TouchableOpacity>
              </View>
            )}
          </LinearGradient>
          {/* </ImageBackground> */}

          {/* <ImageBackground
            source={Images.morningScenery}
            style={styles.miniImageBackground}> */}
          <LinearGradient
            colors={['#f9f8ff', '#f9f8ff']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.miniImageBackground}>
            <TouchableOpacity
              style={styles.missionCard}
              onPress={() => toggleMission('prayerSession')}>
              <View style={styles.missionTop}>
                <View style={styles.dailyView}>
                  {faithProgress.step2 ? (
                    <Image
                      source={Images.completion}
                      style={styles.circleIcon}
                    />
                  ) : (
                    <Image
                      source={Images.circle}
                      style={[styles.circleIcon, {tintColor: Colors.purple}]}
                    />
                  )}
                  <Text style={styles.missionTitle}>Prayer Session</Text>
                  <Text style={styles.missionTime}>5 min</Text>
                </View>
                <Image
                  source={
                    expandedMissions['prayerSession'] ? Images.up : Images.down
                  }
                  style={[styles.checkIcon, {tintColor: Colors.purple}]}
                />
              </View>
            </TouchableOpacity>
            {expandedMissions['prayerSession'] && (
              <View style={styles.missionCard}>
                <Text style={styles.verseText}>
                  Write down 3 things you’re grateful for today
                </Text>
                <TouchableOpacity
                  style={styles.secondaryButton}
                  onPress={() => {
                    // handleActionClick('prayer');
                    navigation.navigate(Route.PrayerSession);
                  }}>
                  <Text style={styles.buttonText}>Journal a prayer →</Text>
                </TouchableOpacity>
              </View>
            )}
          </LinearGradient>
          {/* </ImageBackground> */}

          <LinearGradient
            colors={['#f9f8ff', '#f9f8ff']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.miniImageBackground}>
            <TouchableOpacity
              style={styles.dailyQuizCard}
              onPress={() => toggleMission('dailyQwiz')}>
              <View style={styles.missionTop}>
                <View style={styles.dailyView}>
                  {faithProgress.step3 ? (
                    <Image
                      source={Images.completion}
                      style={styles.circleIcon}
                    />
                  ) : (
                    <Image
                      source={Images.circle}
                      style={[styles.circleIcon, {tintColor: Colors.purple}]}
                    />
                  )}
                  <Text style={styles.dailyTitle}>Daily Quiz</Text>
                  <Text style={styles.dailyTime}>5 min</Text>
                </View>
                <Image
                  source={
                    expandedMissions['dailyQwiz'] ? Images.up : Images.down
                  }
                  style={[styles.checkIcon, {tintColor: Colors.purple}]}
                />
              </View>
              {expandedMissions['dailyQwiz'] && (
                <>
                  <Text style={styles.quizText}>Test your knowledge</Text>
                  <TouchableOpacity
                    style={styles.secondaryButton}
                    onPress={() => {
                      // handleActionClick('quiz');
                      navigation.navigate(Route.QuizSection);
                    }}>
                    <Text style={styles.buttonText}>Start quiz →</Text>
                  </TouchableOpacity>
                </>
              )}
            </TouchableOpacity>
          </LinearGradient>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
