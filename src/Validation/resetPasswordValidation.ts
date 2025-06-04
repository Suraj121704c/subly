import {Alert} from 'react-native';

//user-define Import files
import {Password_Validation} from '.';
import {STRINGS} from '../Utils/constants';

interface propsType {
  password: string;
  confirmPass: string;
}

export const resetPasswordValidation = (props: propsType) => {
  const {password, confirmPass} = props;
  const resData = {
    passwordError: '',
    confirmPassError: '',
    status: false,
  };

  const isValidNewPass = Password_Validation(password);
  const isValidConfirmPass = Password_Validation(confirmPass);

  if (password.trim() == '') resData.passwordError = STRINGS.Required_Password;
  else {
    if (isValidNewPass) resData.passwordError = '';
    else resData.passwordError = STRINGS.Invalid_Password;
  }

  if (confirmPass.trim() == '')
    resData.confirmPassError = STRINGS.Required_Password;
  else {
    if (isValidConfirmPass) {
      if (confirmPass == password) resData.confirmPassError = '';
      else resData.confirmPassError = STRINGS.Mismatch_Password;
    } else resData.confirmPassError = STRINGS.Invalid_Password;
  }

  if (password == confirmPass && isValidNewPass) resData.status = true;

  return resData;
};
