import {
  View,
  Text,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

//user-define Import files
import {styles} from './styles';
import { Images } from '../../Utils/images';

interface Props {
  headerTitle?: string;
  backIcon: boolean;
  rightBtn?: number | string;
  headerStyle?: object;
  backBtnStyle?: object;
  backIconStyle?: object;
  rightBtnStyle?: object;
  rightIconStyle?: object;
  rightTxtStyle?: object;
  rightPress?: (event: GestureResponderEvent) => void;
}

const AppHeader = (data: Props) => {
  const navigation = useNavigation();
  const {
    headerTitle,
    backIcon,
    headerStyle,
    backBtnStyle,
    backIconStyle,
    rightTxtStyle,
    rightIconStyle,
    rightBtnStyle,
    rightBtn,
    rightPress,
  } = data;

  return (
    <View style={[styles.container, headerStyle]}>
      {backIcon ? (
        <TouchableOpacity
          style={[styles.backIconOpacity, backBtnStyle]}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image style={[styles.backIcon, backIconStyle]} source={Images.back} />
        </TouchableOpacity>
      ) : (
        <Text></Text>
      )}
      <Text style={styles.headerTitle}>{headerTitle}</Text>
      {!rightBtn && <Text></Text>}
      {rightBtn && (
        <TouchableOpacity
          onPress={rightPress}
          style={[styles.backIconOpacity, rightBtnStyle]}>
          {typeof rightBtn == 'number' && (
            <Image
              style={[styles.backIcon, rightIconStyle]}
              source={rightBtn}
            />
          )}
          {typeof rightBtn == 'string' && (
            <Text style={[styles.rightBtnTxt, rightTxtStyle]}>{rightBtn}</Text>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AppHeader;
