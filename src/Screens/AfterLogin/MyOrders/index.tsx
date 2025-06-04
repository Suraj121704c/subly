import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//user-defined import files
import Container from '../../../Components/Container';
import {Colors} from '../../../Utils/colors';
import {GradientHeader} from '../../../Components/AppHeader';
import {styles} from './styles';

const MyOrders = () => {

  return (
    <Container
      statusBarColor={Colors.red}
      containerColor={Colors.black}
      barStyle="light-content">
      <View style={styles.container}>
        <GradientHeader isBackIcnVisible={false} title="My Orders" />
        <Text>My Orders</Text>
      </View>
    </Container>
  );
};

export default MyOrders;
