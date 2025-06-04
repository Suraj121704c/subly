import React, {useState, useRef, useEffect} from 'react';
import {View, TextInput} from 'react-native';

//user-define Import files
import {styles} from './styles';

const OTPInput = ({length = 6, onChangeText, onCodeFilled, value}: any) => {
  const [otp, setOtp] = useState(new Array(length).fill(''));
  const inputRefs = useRef<any>([]);

  useEffect(() => {
    if (otp.every(digit => digit !== '')) {
      onCodeFilled(otp.join(''));
    }
  }, [otp, onCodeFilled]);

  useEffect(() => {
    if (value && value.length === length) {
      setOtp(value.split(''));
    }
    if (value == '') {
      setOtp(new Array(length).fill(''));
      inputRefs.current[0].focus();
    }
  }, [value, length]);

  const handleOnChange = (text: any, index: any) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Automatically focus next input field
    if (text.length === 1 && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }

    // Pass the onChangeText callback if provided
    if (typeof onChangeText === 'function') {
      onChangeText(newOtp.join(''));
    }
  };

  const handleOnKeyPress = (e: any, index: any) => {
    // Navigate to previous input field on backspace press
    if (e.nativeEvent.key === 'Backspace' && index > 0 && !otp[index]) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={ref => (inputRefs.current[index] = ref)}
          style={styles.input}
          value={digit}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={text => handleOnChange(text, index)}
          onKeyPress={e => handleOnKeyPress(e, index)}
        />
      ))}
    </View>
  );
};

export default OTPInput;
