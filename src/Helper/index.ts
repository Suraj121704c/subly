import {Linking} from 'react-native';

export const openDialPad = (mobileNumber: string) => {
  Linking.openURL(`tel:${mobileNumber}`);
};

export const openGmail = (emailAddress: string) => {
  const url = `mailto:${emailAddress}`;
  Linking.openURL(url).catch(err => {
    console.log('Failed to open mail app:', err);
  });
};
