//----------------------------------------------------------------------------------
// Normal Carousel without Auto scroll functionality
//----------------------------------------------------------------------------------

import React, {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from 'react';
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
import GradientButton from '../GradientButton';
import {styles} from './styles';
import Button from '../Button';

interface CarouselProps<T> {
  data: T[];
  containerStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  renderItem: (item: T) => React.ReactNode;
  indicatorStyle?: StyleProp<ViewStyle>;
  indicator?: boolean;
  onLastItemReached?: any;
  onSignUP: () => void;
  onLogin: () => void;
}

const Carousel = forwardRef(function Carousel<T>(
  {
    data,
    containerStyle,
    imageStyle,
    renderItem,
    indicatorStyle,
    indicator = true,
    onLastItemReached,
    onSignUP,
    onLogin,
  }: CarouselProps<T>,
  ref: any,
) {
  const flatListRef = useRef<FlatList<T>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (onLastItemReached) {
      if (currentIndex == 2) {
        onLastItemReached(true);
      } else {
        onLastItemReached(false);
      }
    }
  }, [currentIndex]);

  const handleScroll = (event: any) => {
    const index = Math.round(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width,
    );
    setCurrentIndex(index);
  };

  // Function to scroll to the next item
  const goToNextItem = () => {
    if (currentIndex < data.length - 1) {
      const nextIndex = currentIndex + 1;
      flatListRef.current?.scrollToIndex({index: nextIndex});
      setCurrentIndex(nextIndex);
    }
  };

  // Expose goToNextItem to parent via ref
  useImperativeHandle(ref, () => ({
    goToNextItem,
  }));

  return (
    <View style={{flex: 1}}>
      <FlatList
        ref={flatListRef}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={[containerStyle]}>{renderItem(item)}</View>
        )}
        onMomentumScrollEnd={handleScroll}
      />
      {indicator && (
        <View style={styles.btnContainer}>
          <View style={styles.loginBtnView}>
            <GradientButton
              title="Sign Up"
              style={styles.signUpBtn}
              btnTxtStyle={styles.signUpBtnTxt}
              onPress={onSignUP}
            />
            <Button
              title="Login"
              style={styles.loginBtn}
              btnTxtStyle={styles.loginBtnTxt}
              onPress={onLogin}
            />
          </View>
          <View style={styles.indicatorView}>
            {data.map((_, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  {
                    width: index === currentIndex ? 30 : 10,
                    height: wp(2),
                    borderRadius: 5,
                    marginHorizontal: 2,
                    backgroundColor:
                      index === currentIndex ? Colors.red : Colors.lightGrey2,
                  },
                  indicatorStyle,
                ]}
              />
            ))}
          </View>
        </View>
      )}
    </View>
  );
});

export default Carousel;

//----------------------------------------------------------------------------------
// Auto Scroll Carousel you sent own time that what time for scrolling
//----------------------------------------------------------------------------------
// import React, {useRef, useState, useEffect} from 'react';
// import {
//   View,
//   FlatList,
//   StyleProp,
//   ViewStyle,
//   ImageStyle,
//   TouchableOpacity,
// } from 'react-native';
// import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

// interface CarouselProps<T> {
//   data: T[];
//   containerStyle?: StyleProp<ViewStyle>;
//   imageStyle?: StyleProp<ImageStyle>;
//   renderItem: (item: T) => React.ReactNode;
//   indicatorStyle?: StyleProp<ViewStyle>;
//   indicator?: boolean;
//   autoplayInterval?: number; // New prop for autoplay interval in milliseconds
// }

// const Carousel = <T extends {}>({
//   data,
//   containerStyle,
//   imageStyle,
//   renderItem,
//   indicatorStyle,
//   indicator = true,
//   autoplayInterval = 3000, // Default autoplay interval is 3 seconds
// }: CarouselProps<T>) => {
//   const flatListRef = useRef<FlatList<T>>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [activeIndicator, setActiveIndicator] = useState(0);

//   useEffect(() => {
//     const autoplayTimer = setInterval(() => {
//       const nextIndex = (currentIndex + 1) % data.length;
//       scrollToIndex(nextIndex);
//     }, autoplayInterval);

//     return () => clearInterval(autoplayTimer);
//   }, [currentIndex]); // Run effect when currentIndex changes

//   const handleScroll = (event: any) => {
//     const {nativeEvent} = event;
//     const index = Math.round(
//       nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
//     );
//     setCurrentIndex(index);
//     setActiveIndicator(index);
//   };

//   const scrollToIndex = (index: number) => {
//     flatListRef.current?.scrollToIndex({index});
//     setCurrentIndex(index);
//     setActiveIndicator(index);
//   };

//   const renderIndicator = (index: number) => {
//     return (
//       <TouchableOpacity
//         key={index}
//         style={[
//           {
//             width: 10,
//             height: 10,
//             borderRadius: 5,
//             marginHorizontal: 5,
//             backgroundColor: index === activeIndicator ? 'orange' : 'black',
//           },
//           indicatorStyle,
//         ]}
//         onPress={() => scrollToIndex(index)}
//       />
//     );
//   };

//   return (
//     <View>
//       <FlatList
//         ref={flatListRef}
//         data={data}
//         keyExtractor={(_, index) => index.toString()}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         renderItem={({item}) => (
//           <View style={[containerStyle]}>{renderItem(item)}</View>
//         )}
//         onMomentumScrollEnd={handleScroll}
//       />
//       {indicator && (
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'center',
//             marginTop: hp(1),
//           }}>
//           {data.map((_, index) => renderIndicator(index))}
//         </View>
//       )}
//     </View>
//   );
// };

// export default Carousel;
