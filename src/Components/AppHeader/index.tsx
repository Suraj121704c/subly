import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//user-define Import files
import {styles} from './styles';
import {Images} from '../../Utils/images';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../Utils/colors';

interface propsType {
  isBackIcnVisible: boolean;
  title?: string;
  containerStyle?: StyleProp<ViewStyle>;
  backBtnStyle?: StyleProp<ViewStyle>;
  btnTxtStyle?: StyleProp<TextStyle>;
  titleStyle?: StyleProp<TextStyle>;
  onCall?: () => void;
}

const AppHeader = (props: any) => {
  const navigation = useNavigation<any>();
  const {title, isBackIcnVisible, titleStyle, backBtnStyle, containerStyle} =
    props;

  return (
    <View style={[styles.container, containerStyle]}>
      {isBackIcnVisible ? (
        <TouchableOpacity
          style={[styles.backIcnOpacity, backBtnStyle]}
          onPress={() => navigation.goBack()}>
          <Image source={Images.backArrow} style={styles.backImg} />
        </TouchableOpacity>
      ) : (
        <View style={{width: wp(10)}} />
      )}
      {title && <Text style={titleStyle}>{title}</Text>}
      <View style={{width: wp(10)}} />
    </View>
  );
};

export default AppHeader;

export const GradientHeader = (props: propsType) => {
  const {isBackIcnVisible, containerStyle, backBtnStyle, title, titleStyle} =
    props;
  const navigation = useNavigation<any>();

  return (
    <LinearGradient
      colors={['#FF2D57', '#FF2D5790']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <View style={[styles.gradientContainer, containerStyle]}>
        {isBackIcnVisible ? (
          <TouchableOpacity
            style={[styles.backIcnOpacity, backBtnStyle]}
            onPress={() => navigation.goBack()}>
            <Image source={Images.backArrow} style={styles.backImg} />
          </TouchableOpacity>
        ) : (
          <View style={{width: wp(10)}} />
        )}
        {title && <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>}
        <View style={{width: wp(10)}} />
      </View>
    </LinearGradient>
  );
};

export const ChatHeader = (props: propsType) => {
  const {isBackIcnVisible, containerStyle, title, titleStyle, onCall} = props;
  const navigation = useNavigation<any>();

  return (
    <LinearGradient
      colors={['#0C54A6', '#3287C8']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <View style={[styles.gradientContainer, containerStyle]}>
        {isBackIcnVisible ? (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={Images.backArrow}
                style={{...styles.backImg, tintColor: Colors.white}}
              />
            </TouchableOpacity>
            <Image source={Images.profile} style={styles.userImg} />
            {title && (
              <Text
                style={[styles.titleStyle, {marginLeft: wp(3)}, titleStyle]}>
                {title}
              </Text>
            )}
          </View>
        ) : (
          <View style={{width: wp(10)}} />
        )}
        <TouchableOpacity onPress={onCall} style={styles.callBtn}>
          <Image source={Images.call} style={styles.callImg} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
