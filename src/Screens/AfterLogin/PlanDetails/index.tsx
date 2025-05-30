import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';

// user defined imports
import {styles} from './styles';
import AppHeader from '../../../Components/AppHeader';
import GradientButton from '../../../Components/GradientButton';
import {Route} from '../../../Navigation/constants';
import * as Storage from '../../../Services/AsyncStoreConfig';
import {errorMessage} from '../../../Helper/toast';
import {Colors} from '../../../Utils/colors';

export default function PlanDetails() {
  const navigation = useNavigation<any>();
  const {planDetails} = useRoute<any>()?.params;
  const [updatedPlanDetails, setUpdatedPlanDetails] = useState(planDetails);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getPlanDetails();
    });
    return unsubscribe;
  }, [navigation]);

  const getPlanDetails = async () => {
    const storedPlans = await Storage.getData('Activated');
    if (storedPlans) {
      const parseDetails = JSON.parse(storedPlans);
      const isAlreadyExistPlan = parseDetails.find(
        (item: any) => item.id === planDetails.id,
      );
      if (isAlreadyExistPlan) {
        setUpdatedPlanDetails(isAlreadyExistPlan);
      }
    }
  };

  const onPressDay = (item: any) => {
    if (item?.selected) {
      navigation.navigate(Route.PlanVerseExplanation, {
        planDetails: updatedPlanDetails,
        dayDetails: item,
      });
    } else {
      // If it's day 1 or all previous days are completed, allow access
      const previousDays = updatedPlanDetails.days.filter(
        (day: any) => day.day_number < item.day_number
      );
      const allPreviousDaysCompleted = previousDays.length === 0 || 
        previousDays.every((day: any) => day.selected);

      if (item.day_number === 1 || allPreviousDaysCompleted) {
        navigation.navigate(Route.PlanVerseExplanation, {
          planDetails: updatedPlanDetails,
          dayDetails: item,
        });
      } else {
        errorMessage('Please complete previous day');
      }
    }
  };

  const onPressStartPlan = () => {
    if (updatedPlanDetails?.reminder) {
      const day = updatedPlanDetails.days.find(
        (item: any) => !item.hasOwnProperty('selected'),
      );
      if (day) {
        navigation.navigate(Route.PlanVerseExplanation, {
          planDetails: updatedPlanDetails,
          dayDetails: day,
        });
      } else {
        errorMessage('Please Study has been completed');
      }
    } else {
      navigation.navigate(Route.SetReminderScreen, {
        planDetails: updatedPlanDetails,
      });
    }
  };

  const renderItem = ({item, index}: any) => {
    return (
      <TouchableOpacity
        onPress={() => onPressDay(item)}
        style={{
          ...styles.dayCard,
          backgroundColor: item?.selected ? '#DBF4D399' : Colors.white,
          borderColor: item?.selected ? Colors.green : '#E0E0E0',
        }}>
        <View style={styles.dayLabelContainer}>
          <Text style={styles.dayLabel}>DAY {item?.day_number}</Text>
          {item?.selected ? (
            <View style={styles.completedContainer}>
              <Text style={styles.completedText}>Completed</Text>
            </View>
          ) : null}
        </View>
        <Text style={styles.dayTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader backIcon={true} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{updatedPlanDetails.title}</Text>
        <Text style={styles.duration}>{updatedPlanDetails.duration} Days</Text>
        <Text style={styles.description}>
          {updatedPlanDetails?.description}
        </Text>
        <GradientButton
          title={updatedPlanDetails?.reminder ? 'Continue' : 'Start Plan'}
          style={styles.startBtn}
          btnTxtStyle={styles.startBtnTxt}
          onPress={onPressStartPlan}
        />
        <FlatList
          data={[...updatedPlanDetails.days].sort((a: {day_number: number}, b: {day_number: number}) => a.day_number - b.day_number)}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}
