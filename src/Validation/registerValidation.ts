import {Alert} from 'react-native';

//user-define Import files
import {EmailValidate, Password_Validation, firstNames} from '.';
import {STRINGS} from '../Utils/constants';

interface propsType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPass: string;
}

export const registerValidation = (props: propsType) => {
  const {firstName, lastName, email, password, confirmPass} = props;
  const resData = {
    fullNameError: '',
    lastNameError: '',
    emailError: '',
    passwordError: '',
    confirmPassError: '',
    status: false,
  };

  const isValidFullName = firstNames(firstName);
  const isValidLastName = firstNames(lastName);
  const isValidEmail = EmailValidate(email);
  const isValidPassword = Password_Validation(password);
  const isValidConfirmPassword = Password_Validation(confirmPass);

  if (firstName.trim() == '') resData.fullNameError = STRINGS.Required_Name;
  else {
    if (isValidFullName) resData.fullNameError = '';
    else resData.fullNameError = STRINGS.Invalid_Name;
  }

  if (lastName.trim() == '') resData.lastNameError = STRINGS.Required_Name;
  else {
    if (isValidLastName) resData.lastNameError = '';
    else resData.lastNameError = STRINGS.Invalid_Name;
  }

  if (email.trim() == '') resData.emailError = STRINGS.Required_Email;
  else {
    if (isValidEmail) resData.emailError = '';
    else resData.emailError = STRINGS.Invalid_Email;
  }

  if (password.trim() == '') resData.passwordError = STRINGS.Required_Password;
  else {
    if (isValidPassword) resData.passwordError = '';
    else resData.passwordError = STRINGS.Invalid_Password;
  }
  if (confirmPass.trim() == '')
    resData.confirmPassError = STRINGS.Required_ConfirmPassword;
  else {
    if (isValidConfirmPassword) {
      if (confirmPass == password) resData.confirmPassError = '';
      else resData.confirmPassError = STRINGS.Mismatch_Password;
    } else resData.confirmPassError = STRINGS.Invalid_Password;
  }

  if (
    isValidFullName &&
    isValidLastName &&
    isValidEmail &&
    isValidPassword &&
    confirmPass == password
  )
    resData.status = true;

  return resData;
};
