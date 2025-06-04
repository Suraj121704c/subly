import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React, {memo} from 'react';

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  style?: StyleProp<ViewStyle>;
  btnTxtStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  activeOpacity = 0.5,
  disabled = false,
  style,
  btnTxtStyle,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      disabled={disabled}
      onPress={onPress}
      style={style}>
      {title && <Text style={btnTxtStyle}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default memo(Button);
