import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import * as Progress from 'react-native-progress';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DeviceInfo from 'react-native-device-info';

// user defined imports
import {styles} from './styles';
import {getPlanDetailsAction} from '../../../Redux/Actions/plansActions';
import GradientButton from '../../../Components/GradientButton';
import {Route} from '../../../Navigation/constants';
import Button from '../../../Components/Button';
import {Colors} from '../../../Utils/colors';
import NoDataFound from '../../../Components/NoDataFound';
import * as Storage from '../../../Services/AsyncStoreConfig';
import {isAlreadyStartedPlan} from '../../../Helper';
import {getBooksAction} from './Controller/action';

export default function Plans() {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();
  const {plans} = useSelector((state: any) => state.plans);
  const {bookList} = useSelector((state: any) => state.bookListReducer);
  const [activePlan, setActivePlan] = useState<any>([]);
  const [activeTab, setActiveTab] = useState<string>('Study');

  useEffect(() => {
    // Storage.removeData('Activated');
    // Storage.removeData('ActivatedBookList');
    checkAppVersion();
    dispatch(getPlanDetailsAction());
    dispatch(getBooksAction());
    const unsubscribe = navigation.addListener('focus', () => {
      getActivePlan();
    });
    return unsubscribe;
  }, [navigation]);

  const checkAppVersion = async () => {
    const previousVersion = await Storage.getData('appVersion');
    const currentVersion = DeviceInfo.getVersion();

    if (previousVersion && previousVersion !== currentVersion) {
      await Storage.removeData('Activated');
      await Storage.removeData('ActivatedBookList');
    }

    // Save current version
    await Storage.saveData('appVersion', currentVersion);
  };

  const getActivePlan = async () => {
    // await Storage.removeData('Activated');
    const activatedPlan = await Storage.getData('Activated');
    const activeBookList = await Storage.getData('ActivatedBookList');
    if (activatedPlan || activeBookList) {
      const pasedPlan = activatedPlan ? JSON.parse(activatedPlan) : [];
      const pasedPlan2 = activeBookList ? JSON.parse(activeBookList) : [];
      setActivePlan([...pasedPlan, ...pasedPlan2]);
    }
  };

  const renderItem = ({item}: any) => {
    return (
      <View style={styles.cardView}>
        <Text style={styles.titleTxt}>{item.title}</Text>
        <Text style={styles.durationTxt}>{item.duration} Days</Text>
        <Text style={styles.descriptionTxt}>{item.description}</Text>
        <GradientButton
          title={
            isAlreadyStartedPlan(activePlan, item?.id)
              ? 'Continue'
              : 'Start Your Journey'
          }
          style={styles.startBtn}
          btnTxtStyle={styles.startBtnTxt}
          onPress={() =>
            navigation.navigate(Route.PlanDetails, {planDetails: item})
          }
        />
      </View>
    );
  };

  const renderBook = ({item}: any) => {
    return (
      <View style={styles.cardView}>
        <Text style={styles.titleTxt}>{item.title}</Text>
        <Text style={styles.durationTxt}>{item.duration} Days</Text>
        <Text style={styles.descriptionTxt}>{item.description}</Text>
        <GradientButton
          title={
            isAlreadyStartedPlan(activePlan, item?.id)
              ? 'Continue'
              : 'Start Your Journey'
          }
          style={styles.startBtn}
          btnTxtStyle={styles.startBtnTxt}
          onPress={() =>
            navigation.navigate(Route.BookDetails, {planDetails: item})
          }
        />
      </View>
    );
  };

  const renderActivePlan = ({item}: any) => {
    const totalDays = item?.days.length;
    const selectedDays = item?.days.filter(
      (item: any) => item?.selected,
    ).length;
    const progressValue = selectedDays / totalDays;
    return (
      <TouchableOpacity
        onPress={() => {
          if (item?.selectionType == 'Book') {
            navigation.navigate(Route.BookDetails, {planDetails: item});
          } else {
            navigation.navigate(Route.PlanDetails, {planDetails: item});
          }
        }}
        style={styles.cardView}>
        <Text style={{...styles.titleTxt, marginBottom: hp(1)}}>
          {item.title}
        </Text>
        <Progress.Bar
          progress={progressValue}
          width={wp(84)}
          color={Colors.purple}
          borderRadius={wp(10)}
          height={hp(0.6)}
        />
        <Text style={styles.dayCountTxt}>
          {selectedDays}/{totalDays} Days
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTxt}>Study</Text>
      <View style={styles.headerView}>
        <Button
          title="Bible Topics"
          onPress={() => setActiveTab('Study')}
          style={{
            ...styles.headerBtn,
            backgroundColor:
              activeTab == 'Study' ? Colors.purple : Colors.white,
          }}
          btnStyle={{
            ...styles.headerBtnTxt,
            color: activeTab == 'Study' ? Colors.white : Colors.purple,
          }}
        />
        <Button
          title="Bible Books"
          onPress={() => setActiveTab('bibleBooks')}
          style={{
            ...styles.headerBtn,
            backgroundColor:
              activeTab == 'bibleBooks' ? Colors.purple : Colors.white,
          }}
          btnStyle={{
            ...styles.headerBtnTxt,
            color: activeTab == 'bibleBooks' ? Colors.white : Colors.purple,
          }}
        />
        <Button
          title="Active"
          onPress={() => setActiveTab('Active')}
          style={{
            ...styles.headerBtn,
            backgroundColor:
              activeTab == 'Active' ? Colors.purple : Colors.white,
          }}
          btnStyle={{
            ...styles.headerBtnTxt,
            color: activeTab == 'Active' ? Colors.white : Colors.purple,
          }}
        />
      </View>
      {activeTab == 'Study' && (
        <FlatList
          data={plans}
          renderItem={renderItem}
          contentContainerStyle={styles.flatListContainer}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListEmptyComponent={() => {
            return <NoDataFound message="No Data Found" />;
          }}
        />
      )}
      {activeTab == 'bibleBooks' && (
        <FlatList
          data={bookList}
          renderItem={renderBook}
          contentContainerStyle={styles.flatListContainer}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListEmptyComponent={() => {
            return <NoDataFound message="No Data Found" />;
          }}
        />
      )}
      {activeTab == 'Active' && (
        <FlatList
          data={activePlan}
          renderItem={renderActivePlan}
          contentContainerStyle={styles.flatListContainer}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListEmptyComponent={() => {
            return <NoDataFound message="No Data Found" />;
          }}
        />
      )}
    </SafeAreaView>
  );
}
