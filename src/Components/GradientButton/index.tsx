import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React, {memo} from 'react';
import LinearGradient from 'react-native-linear-gradient';

//user-defined import files
import {styles} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  style?: StyleProp<ViewStyle>;
  btnTxtStyle?: StyleProp<TextStyle>;
  gradientColor?: string[];
}

const GradientButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  activeOpacity = 0.5,
  disabled = false,
  style,
  btnTxtStyle,
  gradientColor = ['#FF2D57', '#FF5E00'],
}) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      disabled={disabled}
      onPress={onPress}
      style={style}>
      <LinearGradient
        colors={gradientColor}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.gradientStyle}>
        {title && <Text style={btnTxtStyle}>{title}</Text>}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default memo(GradientButton);
