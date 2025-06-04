import {View, Text, Alert} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';

//user-defined Import files
import Container from '../../../Components/Container';
import {Colors} from '../../../Utils/colors';
import {GradientHeader} from '../../../Components/AppHeader';
import {unAuthorizedAction} from '../../../Redux/Actions/logoutAction';
import {styles} from './styles';
import Button from '../../../Components/Button';

const Account = () => {
  const dispatch = useDispatch<any>();

  const _onLogOut = async () => {
    Alert.alert(
      'Confirmation',
      'Do you want to logOut?',
      [
        {
          text: 'No',
          onPress: () => console.log('No Pressed'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => dispatch(unAuthorizedAction()),
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <Container
      statusBarColor={Colors.red}
      containerColor={Colors.white}
      barStyle="light-content">
      <View style={styles.container}>
        <GradientHeader isBackIcnVisible={false} title="Account" />
        <Button title="Log Out" onPress={_onLogOut} />
        <Text>Account</Text>
      </View>
    </Container>
  );
};

export default Account;
