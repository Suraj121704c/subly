import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, Alert} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {useDispatch} from 'react-redux';

// user defined imports
import {styles} from './styles';
import AppHeader from '../../../Components/AppHeader';
import {Images} from '../../../Utils/images';
import GradientButton from '../../../Components/GradientButton';
import Button from '../../../Components/Button';
import * as Storage from '../../../Services/AsyncStoreConfig';
import {setReminderAction} from './Controller/action';

const BookReminder = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const {planDetails} = useRoute<any>()?.params;
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [date, setDate] = useState<Date | null>(null);

  console.log('Booking Reminder:====');

  const handleSave = async () => {
    if (date) {
      const fcmToken = await Storage.getData('fcmToken');
      if (fcmToken) {
        const params = {
          device_id: fcmToken,
          time: moment(date).format('HH:mm:ss'),
          callBack: () => {
            updateReminder();
          },
        };
        dispatch(setReminderAction(params));
      } else {
        Alert.alert('Alert', 'Please set FCM token');
      }
    } else {
      Alert.alert('Alert', 'Please select a date');
    }
  };

  const updateReminder = async () => {
    try {
      const storedPlans = await Storage.getData('ActivatedBookList');
      if (storedPlans) {
        const parseDetails = JSON.parse(storedPlans);
        const isAlreadyExistPlan = parseDetails.find(
          (item: any) => item.id === planDetails.id,
        );
        if (isAlreadyExistPlan) {
          const updatedPlanDetails = parseDetails.map((item: any) => {
            if (item.id === planDetails.id) {
              return {
                ...item,
                reminder: moment(date).format('HH:mm:ss'),
                selectionType: 'Book',
              };
            }
            return item;
          });
          await Storage.saveData(
            'ActivatedBookList',
            JSON.stringify(updatedPlanDetails),
          );
        } else {
          const updatedPlanDetails = [
            {
              ...planDetails,
              reminder: moment(date).format('HH:mm:ss'),
              selectionType: 'Book',
            },
          ];
          await Storage.saveData(
            'ActivatedBookList',
            JSON.stringify(updatedPlanDetails),
          );
        }
      } else {
        const updatedPlanDetails = [
          {
            ...planDetails,
            reminder: moment(date).format('HH:mm:ss'),
            selectionType: 'Book',
          },
        ];

        await Storage.saveData('ActivatedBookList', JSON.stringify(updatedPlanDetails));
      }
      // Only navigate back after successful save
      navigation.goBack();
    } catch (error) {
      console.error('Error saving reminder:', error);
      Alert.alert('Error', 'Failed to save reminder. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader backIcon={true} headerTitle="Set Reminder" />
      <View style={styles.contentContainer}>
        <Image source={Images.bell} style={styles.bellImg} />
        <Text style={styles.description}>
          This is a placeholder for the Set Reminder screen.
        </Text>
        <Button
          style={styles.chooseTimeBtn}
          title={date ? moment(date).format('HH:mm:ss') : 'Choose Time'}
          onPress={() => setOpenDatePicker(true)}
        />
      </View>
      <GradientButton
        title="Save"
        style={styles.startBtn}
        btnTxtStyle={styles.startBtnTxt}
        onPress={handleSave}
      />
      <DatePicker
        modal
        open={openDatePicker}
        date={new Date()}
        mode="time"
        onConfirm={(date: Date) => {
          setDate(date);
          setOpenDatePicker(false);
        }}
        onCancel={() => setOpenDatePicker(false)}
      />
    </SafeAreaView>
  );
};

export default BookReminder;
