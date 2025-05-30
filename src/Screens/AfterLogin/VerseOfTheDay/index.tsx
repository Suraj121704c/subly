import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Share from 'react-native-share';
import {useSelector} from 'react-redux';

//user-define Import files
import {styles} from './styles';
import {Images} from '../../../Utils/images';
import {Colors} from '../../../Utils/colors';
import * as Storage from '../../../Services/AsyncStoreConfig';
import {Route} from '../../../Navigation/constants';
import LinearGradient from 'react-native-linear-gradient';

const verses = [
  {
    text: 'For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.',
    reference: 'Romans 6:23',
  },
];

const VerseOfTheDay = () => {
  const navigation = useNavigation<any>();
  const [currentVerse, setCurrentVerse] = useState(0);
  const [faithProgress, setFaithProgress] = useState({});
  const {posts} = useSelector((state: any) => state.posts);

  useEffect(() => {
    const loadFaithProgress = async () => {
      try {
        const storedProgress = await Storage.getData('faithProgress');
        if (storedProgress) {
          setFaithProgress(JSON.parse(storedProgress));
        }
      } catch (error) {
        console.error('Error fetching faith progress:', error);
      }
    };
    loadFaithProgress();
  }, []);

  const handleShare = async () => {
    const shareOptions = {
      title: 'Verse of the Day',
      message: `${posts?.data?.split('-')[0]} - ${posts?.data?.split('-')[1]}`,
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
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Images.back} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Daily Bible verse</Text>
        <View />
      </View>

      <View style={styles.couplePhotoView}>
        <LinearGradient
          colors={['#f9f8ff', '#f9f8ff']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={styles.miniImageBackground}>
          <View style={styles.couplePhoto}>
            <Text style={styles.categoryText}>Bible • 5 mins</Text>
            <View style={styles.verseContainer}>
              <Text style={styles.verseText}>{posts?.data?.split('-')[1]}</Text>
              <Text style={styles.verseRef}>{posts?.data?.split('-')[0]}</Text>
            </View>
            <TouchableOpacity
              style={[
                styles.knowMoreButton,
                {borderColor: Colors.purple, borderWidth: 1},
              ]}
              onPress={() => navigation.navigate(Route.KnowTheMeaning)}>
              <Text style={styles.knowMoreText}>Know the meaning →</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
              <Image source={Images.sendWhite} style={styles.shareIcon} />
              <Text style={styles.shareText}>Share</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
      {/* <Text style={styles.pageText}>
        {currentVerse + 1} of {verses.length}
      </Text> */}
      {/* <View style={styles.paginationContainer}>
        <View style={styles.segmentedProgressBar}>
          {[...Array(verses.length)].map((_, index) => (
            <View
              key={index}
              style={[
                styles.segment,
                {
                  backgroundColor:
                    index <= currentVerse ? Colors.purple : '#e5e7eb',
                },
              ]}
            />
          ))}
        </View>
      </View> */}
    </SafeAreaView>
  );
};

export default VerseOfTheDay;
