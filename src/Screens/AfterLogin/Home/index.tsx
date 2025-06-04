import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

//user-defined import files
import {useDispatch} from 'react-redux';
import {Container2} from '../../../Components/Container';
import {Colors} from '../../../Utils/colors';
import {styles} from './styles';
import Button from '../../../Components/Button';

const Home = () => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const navigation = useNavigation<any>();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isStart) {
      interval = setInterval(() => {
        setCounter(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isStart]);

  return (
    <Container2 statusBarColor={Colors.red} containerColor={Colors.white}>
      <View style={styles.container}>
        <Button
          title="Start"
          onPress={() => setIsStart(true)}
          style={styles.button}
          btnTxtStyle={styles.btnTxt}
        />
        <Text style={styles.counterTxt}>{counter}</Text>
        <Button
          title="Stop"
          onPress={() => setIsStart(false)}
          style={styles.button}
          btnTxtStyle={styles.btnTxt}
        />
      </View>
    </Container2>
  );
};

export default Home;
