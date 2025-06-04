import React from 'react';
import {Image} from 'react-native';
import {Toast} from 'react-native-toast-notifications';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//user-define Import files
import {Colors} from '../Utils/colors';
import {Images} from '../Utils/images';

const toastOptions = {
  placement: 'top',
  animationType: 'zoom-in',
  successColor: 'green',
  dangerColor: 'red',
  warningColor: 'yellow',
  normalColor: 'blue',
  style: {
    backgroundColor: Colors.white,
    minHeight: 60,
    borderRadius: wp(2),
    maxWidth: wp(60),
    paddingHorizontal: wp(4),
    justifyContent: 'center',
  },
  textStyle: {
    textTransform: 'capitalize',
    color: Colors.black,
    marginHorizontal: 10,
  },
  successIcon: (
    <Image
      source={Images.successTick}
      style={{
        height: hp(4),
        width: wp(8),
        resizeMode: 'contain',
      }}
    />
  ),
  dangerIcon: (
    <Image
      source={Images.failed}
      style={{
        height: hp(4),
        width: wp(8),
        resizeMode: 'contain',
      }}
    />
  ),
  warningIcon: (
    <Image
      source={Images.warning}
      style={{
        height: hp(4),
        width: wp(8),
        resizeMode: 'contain',
      }}
    />
  ),
};

export default toastOptions;

export const errorMessage = (message: string) => {
  Toast.show(message, {
    type: 'danger',
    duration: 2000,
  });
};

export const successMessage = (message: string) => {
  Toast.show(message, {
    type: 'success',
    duration: 2000,
  });
};
