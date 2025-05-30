import {
  GestureResponderEvent,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';

//user-define Import files
import {styles} from './style';
import {Colors} from '../../Utils/colors';

interface Props {
  title?: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: object;
  btnTxt?: object;
  icon?: number;
  iconStyle?: object;
  btnStyle?: object;
  disabled?: boolean;
  activeOpacity?: number;
  loading?: boolean;
}

const Button = (data: Props) => {
  const {
    title,
    icon,
    onPress,
    activeOpacity,
    disabled,
    style,
    iconStyle,
    btnStyle,
    loading,
  } = data;

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      disabled={disabled || loading}
      onPress={onPress}
      style={style}>
      {loading ? (
        <ActivityIndicator color={Colors.white} />
      ) : (
        <>
          {icon && <Image source={icon} style={[styles.icon, iconStyle]} />}
          {title && <Text style={btnStyle}>{title}</Text>}
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
