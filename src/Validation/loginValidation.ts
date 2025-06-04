import {Alert} from 'react-native';

//user-define Import files
import {STRINGS} from '../Utils/constants';

interface propsType {
  isValidPhone: string;
  mobileNumber: string;
}

export const loginValidation = (props: propsType) => {
  const {isValidPhone, mobileNumber} = props;
  const resData = {
    phoneError: '',
    status: false,
  };

  if (mobileNumber.trim() == '') resData.phoneError = STRINGS.Required_Phone;
  else {
    if (isValidPhone) resData.phoneError = '';
    else resData.phoneError = STRINGS.InValid_Phone;
  }

  if (isValidPhone) resData.status = true;

  return resData;
};
