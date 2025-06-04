import {Alert} from 'react-native';

//user-define Import files
import {EmailValidate, firstNames} from '.';
import {STRINGS} from '../Utils/constants';

interface propsType {
  name: string;
  email: string;
  mobileNumber: string;
  msg: string;
}

export const supportValidation = (props: propsType) => {
  const {name, email, mobileNumber, msg} = props;
  const resData = {
    nameError: '',
    emailError: '',
    phoneError: '',
    messageError: '',
    status: false,
  };

  const isValidName = firstNames(name);
  const isValidEmail = EmailValidate(email);
  const isValidPhone = mobileNumber.trim().length > 5;
  const isValidMessage = msg.trim().length > 5;

  if (name.trim() == '') resData.nameError = STRINGS.Required_Name;
  else {
    if (isValidName) resData.nameError = '';
    else resData.nameError = STRINGS.Invalid_Name;
  }

  if (email.trim() == '') resData.emailError = STRINGS.Required_Email;
  else {
    if (isValidEmail) resData.emailError = '';
    else resData.emailError = STRINGS.Invalid_Email;
  }

  if (mobileNumber.trim() == '') resData.phoneError = STRINGS.Required_Phone;
  else {
    if (isValidPhone) resData.phoneError = '';
    else resData.phoneError = STRINGS.InValid_Phone;
  }

  if (msg.trim() == '') resData.messageError = STRINGS.Required_Message;
  else {
    if (isValidMessage) resData.messageError = '';
    else resData.messageError = STRINGS.InValid_Message;
  }

  if (isValidName && isValidEmail && isValidPhone && isValidMessage)
    resData.status = true;

  return resData;
};
