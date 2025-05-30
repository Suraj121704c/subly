import {Toast} from 'react-native-toast-notifications';

export const successMessage = (message: string) => {
  Toast.show(message, {
    type: 'success',
    duration: 2000,
    placement: 'top',
    animationType: 'zoom-in',
  });
};

export const warningMessage = (message: string) => {
  Toast.show(message, {
    type: 'warning',
    duration: 2000,
    placement: 'top',
    animationType: 'zoom-in',
  });
};

export const errorMessage = (message: string) => {
  Toast.show(message, {
    type: 'danger',
    duration: 2000,
    placement: 'top',
    animationType: 'zoom-in',
  });
};
