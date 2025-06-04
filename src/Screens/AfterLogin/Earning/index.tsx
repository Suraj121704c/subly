import {View, Text} from 'react-native';
import React, {useState} from 'react';

//user-defined import files
import Container from '../../../Components/Container';
import {Colors} from '../../../Utils/colors';
import {GradientHeader} from '../../../Components/AppHeader';
import {styles} from './styles';
import Button from '../../../Components/Button';

const Earning = () => {
  const [selectedTab, setSelectedTab] = useState('DAY');

  const _onChangeTab = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <Container
      statusBarColor={Colors.red}
      containerColor={Colors.black}
      barStyle="light-content">
      <View style={styles.container}>
        <GradientHeader isBackIcnVisible={false} title="Earning" />
       <Text>Earning</Text>
      </View>
    </Container>
  );
};

export default Earning;
