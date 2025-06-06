import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

// user defined imports
import {styles} from './styles';
import {Images} from '../../../Utils/images';
import Button from '../../../Components/Button';
import {Route} from '../../../Navigation/constants';
import { successMessage } from '../../../Helper/toast';
import { getFrequencyValue } from '../../../Helper';

interface FrequencyOption {
  id: string;
  title: string;
  frequency: string;
  selected?: boolean;
  value:number[]
}

const CreateSublyForm = () => {
  const navigation = useNavigation<any>();
  const [selectedFrequency, setSelectedFrequency] = useState<string>('');
  const [customFrequency, setCustomFrequency] = useState<string>('');

  const frequencyOptions: FrequencyOption[] = [
    {id: '0', title: 'No frequency', frequency: '',value:[0,0]},
    {id: '1', title: 'Reduces stress', frequency: '7-12 Hz',value:[7,12]},
    {id: '2', title: 'Boosts alertness', frequency: '13-35 Hz',value:[13,35]},
    {id: '3', title: 'Improves deep sleep', frequency: '13-35 Hz',value:[13,35]},
    {id: '4', title: 'Focus and concentration', frequency: '13-35 Hz',value:[13,35]},
    {id: '5', title: 'For a meditative state', frequency: '13-35 Hz',value:[13,35]},
    {id: '6', title: 'Custom frequency', frequency: '',value:[0,0]},
  ];

  const RadioButton = ({selected}: {selected: boolean}) => (
    <View style={styles.radio}>
      {selected && <View style={styles.radioSelected} />}
    </View>
  );

  const handleFrequencySelect = (id: string) => {
    setSelectedFrequency(id);
    if (id !== '6') {
      setCustomFrequency('');
    }
  };

  const handleNextPress = () => {
    if(selectedFrequency || customFrequency){
      const frequencyValue = getFrequencyValue(selectedFrequency,frequencyOptions)
      console.log("frequencyValue",frequencyValue)
      navigation.navigate(Route.Affrimation,{frequencyValue:frequencyValue})
    }
    else{
      successMessage("Please select a frequency")
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Image source={Images.back} style={styles.backImage} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Create new Subly</Text>
        </View>

        <View style={styles.stepIndicator}>
          <Text style={styles.stepNumber}>1</Text>
          <Text style={styles.stepText}>Select a frequency</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          {frequencyOptions.map(option => (
            <View key={option.id}>
              <TouchableOpacity
                style={styles.frequencyOption}
                onPress={() => handleFrequencySelect(option.id)}>
                <RadioButton selected={selectedFrequency === option.id} />
                <View style={styles.frequencyOptionText}>
                  <Text style={styles.optionTitle}>{option.title}</Text>
                  {option.frequency ? (
                    <Text style={styles.optionSubtext}>{option.frequency}</Text>
                  ) : null}
                </View>
              </TouchableOpacity>
              {option.id === '6' && selectedFrequency === '6' && (
                <View style={styles.customFrequencyContainer}>
                  <TextInput
                    value={customFrequency}
                    onChangeText={setCustomFrequency}
                    placeholder="Enter a custom frequency"
                    placeholderTextColor="#9CA3AF"
                    style={styles.customFrequencyInput}
                    keyboardType="numeric"
                  />
                </View>
              )}
            </View>
          ))}
        </ScrollView>
      </View>
      <Button
        title="Next"
        onPress={handleNextPress}
        style={styles.nextButton}
        btnStyle={styles.nextButtonText}
      />
    </SafeAreaView>
  );
};

export default CreateSublyForm;
