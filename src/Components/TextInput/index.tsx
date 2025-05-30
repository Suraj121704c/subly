import {
  GestureResponderEvent,
  Image,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, Ref, forwardRef} from 'react';

//user-defined Import files
import {styles} from './styles';

interface propsType {
  placeholder: string;
  secureTextEntry?: boolean;
  placeholderTextColor?: string;
  style?: object;
  leftIcn?: number;
  rightIcn?: number;
  inputStyle?: object;
  leftIcnStyle?: object;
  rightBtnStyle?: object;
  rightIcnStyle?: object;
  onChangeText?: (text: string) => void;
  rightIcnPress?: (event: GestureResponderEvent) => void;
  label?: string;
  labelStyle?: Object;
  labelViewStyle?: object;
  textAlignVertical?: TextStyle['textAlignVertical'];
  multiline?: boolean;
  returnKeyType?: 'done' | 'next';
  onSubmitEditing?: () => void;
  value?: string;
}

const TextInputs: FC<propsType> = forwardRef((data, ref?: Ref<TextInput>) => {
  const {
    placeholder,
    label,
    labelStyle,
    onChangeText,
    leftIcn,
    rightIcn,
    inputStyle,
    style,
    leftIcnStyle,
    rightBtnStyle,
    rightIcnStyle,
    rightIcnPress,
    secureTextEntry,
    labelViewStyle,
    placeholderTextColor,
    textAlignVertical,
    multiline,
    returnKeyType,
    value,
    onSubmitEditing,
  } = data;
  return (
    <View style={labelViewStyle}>
      {label && <Text style={labelStyle}>{label}</Text>}
      <View style={[styles.container, style]}>
        {leftIcn && (
          <Image source={leftIcn} style={[styles.icnStyle, leftIcnStyle]} />
        )}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={[styles.input, inputStyle]}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={placeholderTextColor}
          textAlignVertical={textAlignVertical}
          multiline={multiline}
          ref={ref}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
        />
        {rightIcn && (
          <TouchableOpacity style={rightBtnStyle} onPress={rightIcnPress}>
            <Image source={rightIcn} style={[styles.icnStyle, rightIcnStyle]} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
});

export default TextInputs;
