import {Text, View, ImageBackground, Image} from 'react-native';
import React, {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//user-defined import files
import {Route} from '../../../Navigation/constants';
import {Images} from '../../../Utils/images';
import {styles} from './styles';
import Container from '../../../Components/Container';
import {Colors} from '../../../Utils/colors';
import Carousel from '../../../Components/Carousel';
import {CarouselData} from '../../../Mock';

const OnBoarding = () => {
  const carouselRef = useRef<any>(null);
  const [isLastItem, setLastItem] = useState(false);
  const navigation = useNavigation<any>();

  const renderItem = (item: any) => {
    return (
      <View style={styles.carouselContainer}>
        <View style={styles.carouselView}>
          <Image source={item.image} style={styles.carouselImg} />
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={styles.descriptionTxt}>{item?.description}</Text>
        </View>
      </View>
    );
  };

  return (
    <Container
      statusBarColor={Colors.fullTransparents}
      containerColor={Colors.white}
      edges={['right', 'left']}
      statusBarHidden
      barStyle="dark-content">
      <View style={styles.container}>
        <Image source={Images.whiteLogo} style={styles.logoImg} />
        <ImageBackground source={Images.background} style={{flex: 1}}>
          <View style={styles.innerContainer}>
            <Carousel
              ref={carouselRef}
              data={CarouselData}
              renderItem={renderItem}
              onLastItemReached={setLastItem}
              onSignUP={() => navigation.navigate(Route.Login)}
              onLogin={() => navigation.replace(Route.Login)}
            />
          </View>
        </ImageBackground>
      </View>
    </Container>
  );
};

export default OnBoarding;
