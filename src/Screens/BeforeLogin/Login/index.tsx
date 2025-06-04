import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import PhoneInput from 'react-native-phone-number-input';
import {useNavigation} from '@react-navigation/native';
import { useDispatch } from 'react-redux';

//user-defined import files
import {STRINGS} from '../../../Utils/constants';
import {styles} from './styles';
import {removeSpacialCharacter} from '../../../Validation';
import GradientButton from '../../../Components/GradientButton';
import {Images} from '../../../Utils/images';
import {loginValidation} from '../../../Validation/loginValidation';
import { loginAction } from './Controller/action';

const initialForm = {
  mobileNumber: __DEV__ ? '9458272811' : '',
};

const initialError = {
  phoneError: '',
};
const Login = () => {
  const phoneInput = useRef<any>(null);
  const dispatch = useDispatch<any>();
  const navigation = useNavigation<any>();
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState(initialError);

  const handleOnChangeText = (value: string, fieldName: string) => {
    if (fieldName == 'mobileNumber') value = removeSpacialCharacter(value);
    setForm({...form, [fieldName]: value});
  };

  const _onNext = () => {
    const isValidPhone = phoneInput.current?.isValidNumber(form.mobileNumber);
    const countryCode = phoneInput.current?.getCallingCode();
    const flagCode = phoneInput.current?.getCountryCode();
    const isValid = loginValidation({
      ...form,
      isValidPhone,
    });
    if (isValid) {
      setError(isValid);
      if (isValid.status) {
        dispatch(loginAction(form));
        console.log('form.mobileNumber', form.mobileNumber);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.headerTxt}>What’s your phone number? ☎️</Text>
        <Text style={styles.headerTxt2}>We need to make sure you’re you</Text>
        <PhoneInput
          containerStyle={styles.phoneInputContainer}
          placeholder={STRINGS.mobileNumber2}
          value={form.mobileNumber}
          textContainerStyle={styles.phoneTxtContainer}
          codeTextStyle={styles.phoneCodeTxtStyle}
          textInputStyle={styles.phoneInputStyle}
          ref={phoneInput}
          defaultValue={form.mobileNumber}
          defaultCode="US"
          layout="first"
          onChangeText={value =>
            handleOnChangeText(value.trim(), 'mobileNumber')
          }
          textInputProps={{
            value: form.mobileNumber,
          }}
          onChangeFormattedText={text => {
            // console.log('onChangeFormattedText Value: ', text);
          }}
        />
        {error.phoneError && (
          <Text style={styles.errorTxt}>{error.phoneError}</Text>
        )}
        <GradientButton
          title="NEXT"
          style={styles.loginBtn}
          btnTxtStyle={styles.loginBtnTxt}
          onPress={_onNext}
        />
      </View>
      <View style={styles.loginWithView}>
        <View style={styles.drawLine} />
        <Text style={styles.orLoginWithTxt}>or login with</Text>
        <View style={styles.drawLine} />
      </View>
      <View style={styles.socialBtnView}>
        <TouchableOpacity>
          <Image source={Images.apple} style={styles.appleIcn} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Images.facebook} style={styles.appleIcn} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Images.google} style={styles.appleIcn} />
        </TouchableOpacity>
      </View>
      {/* <View style={styles.signUpBtnView}>
        <Text>Don’t have an account?</Text>
        <Button
          title=" Sign up"
          btnTxtStyle={styles.signUpBtnTxt}
          onPress={() => navigation.navigate(Route.Register)}
        />
      </View> */}
    </SafeAreaView>
  );
};

export default Login;
