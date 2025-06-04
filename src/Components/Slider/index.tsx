//----------------------------------------------------------------------------------
// Auto Scroll Carousel you sent own time that what time for scrolling
//----------------------------------------------------------------------------------
import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  FlatList,
  StyleProp,
  ViewStyle,
  ImageStyle,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../Utils/colors';

interface CarouselProps<T> {
  data: T[];
  containerStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  renderItem: (item: T) => React.ReactNode;
  indicatorStyle?: StyleProp<ViewStyle>;
  indicator?: boolean;
  autoplayInterval?: number; // New prop for autoplay interval in milliseconds
}

const Slider = <T extends {}>({
  data,
  containerStyle,
  imageStyle,
  renderItem,
  indicatorStyle,
  indicator = true,
  autoplayInterval = 3000, // Default autoplay interval is 3 seconds
}: CarouselProps<T>) => {
  const flatListRef = useRef<FlatList<T>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndicator, setActiveIndicator] = useState(0);

  useEffect(() => {
    const autoplayTimer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % data.length;
      scrollToIndex(nextIndex);
    }, autoplayInterval);

    return () => clearInterval(autoplayTimer);
  }, [currentIndex]); // Run effect when currentIndex changes

  const handleScroll = (event: any) => {
    const {nativeEvent} = event;
    const index = Math.round(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    setCurrentIndex(index);
    setActiveIndicator(index);
  };

  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({index});
    setCurrentIndex(index);
    setActiveIndicator(index);
  };

  const renderIndicator = (index: number) => {
    return (
      <TouchableOpacity
        key={index}
        style={[
          {
            width: index === activeIndicator ? wp(3) : wp(2),
            height: index === activeIndicator ? wp(3) : wp(2),
            borderRadius: index === activeIndicator ? wp(1.5) : wp(1),
            marginHorizontal: wp(1),
            backgroundColor:
              index === activeIndicator ? Colors.black : Colors.lightGrey,
          },
          indicatorStyle,
        ]}
        onPress={() => scrollToIndex(index)}
      />
    );
  };

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={data}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={[containerStyle]}>{renderItem(item)}</View>
        )}
        onMomentumScrollEnd={handleScroll}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                width: wp(2),
              }}
            />
          );
        }}
      />
      {indicator && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: hp(1),
          }}>
          {data.map((_, index) => renderIndicator(index))}
        </View>
      )}
    </View>
  );
};

export default Slider;
