import {Alert} from 'react-native';

//user-define Import files
import {Password_Validation} from '.';
import {STRINGS} from '../Utils/constants';

interface propsType {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export const changePassValidation = (props: propsType) => {
  const {oldPassword, newPassword, confirmPassword} = props;
  const resData = {
    oldPasswordError: '',
    passwordError: '',
    confirmPasswordError: '',
    status: false,
  };

  const isValidCurrentPass = Password_Validation(oldPassword);
  const isValidNewPass = Password_Validation(newPassword);
  const isValidConfirmPass = Password_Validation(confirmPassword);

  if (oldPassword.trim() == '')
    resData.oldPasswordError = STRINGS.Required_Password;
  else {
    if (isValidCurrentPass) resData.oldPasswordError = '';
    else resData.oldPasswordError = STRINGS.Invalid_Password;
  }

  if (newPassword.trim() == '')
    resData.passwordError = STRINGS.Required_Password;
  else {
    if (isValidNewPass) resData.passwordError = '';
    else resData.passwordError = STRINGS.Invalid_Password;
  }

  if (confirmPassword.trim() == '')
    resData.confirmPasswordError = STRINGS.Required_Password;
  else {
    if (isValidConfirmPass) {
      if (confirmPassword == newPassword) resData.confirmPasswordError = '';
      else resData.confirmPasswordError = STRINGS.Mismatch_Password;
    } else resData.confirmPasswordError = STRINGS.Invalid_Password;
  }

  if (isValidCurrentPass && newPassword == confirmPassword && isValidNewPass)
    resData.status = true;

  return resData;
};
