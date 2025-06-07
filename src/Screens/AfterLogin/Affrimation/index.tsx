import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//user-defined import files
import {styles} from './styles';
import {Images} from '../../../Utils/images';
import {Route} from '../../../Navigation/constants';
import {Colors} from '../../../Utils/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Affrimation = () => {
  const navigation = useNavigation<any>();
  const {frequencyValue} = useRoute<any>().params;
  const [activeTab, setActiveTab] = useState<string>('type');
  const [addAffirmation, setAddAffirmation] = useState<any[]>([]);

  console.log('frequencyValue', frequencyValue);

  const handleAddAffirmation = () => {
    if (activeTab === 'type') {
      const addData = {
        text: '',
        id: addAffirmation.length + 1,
      };
      setAddAffirmation([...addAffirmation, addData]);
    } else {
      console.log('record');
    }
  };

  const handleRemoveAffirmation = (id: number) => {
    const filteredAffirmation = addAffirmation.filter(item => item.id !== id);
    setAddAffirmation(filteredAffirmation);
  };

  const handleChangeAffirmation = (text: string, id: number) => {
    const updatedAffirmation = addAffirmation.map(item =>
      item.id === id ? {...item, text} : item,
    );
    setAddAffirmation(updatedAffirmation);
  };

  const handleNextButton = () => {
    navigation.navigate(Route.CustomizeSublimal, {
      frequencyValue: frequencyValue,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.inerContaiber}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={Images.back} style={styles.backicon} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Create new Subly</Text>
            <TouchableOpacity></TouchableOpacity>
          </View>
          <View style={styles.trackInfo}>
            <Text style={styles.stepText}>2</Text>
            <Text style={styles.trackTitle}>Add affirmation?</Text>
          </View>
          <View style={styles.tabRow}>
            <TouchableOpacity
              style={{
                ...styles.tabButton,
                ...(activeTab === 'type' && styles.selectedTabButton),
              }}
              onPress={() => setActiveTab('type')}>
              <Text
                style={{
                  ...styles.tabText,
                  ...(activeTab === 'type' && styles.selectedTabText),
                }}>
                Type
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.tabButton,
                ...(activeTab === 'record' && styles.selectedTabButton),
              }}
              onPress={() => setActiveTab('record')}>
              <Text
                style={{
                  ...styles.tabText,
                  ...(activeTab === 'record' && styles.selectedTabText),
                }}>
                Record
              </Text>
            </TouchableOpacity>
          </View>
          {activeTab === 'type' && (
            <View>
              {addAffirmation.map((item, index) => {
                return (
                  <View style={styles.affrimationContainer} key={index}>
                    <View style={styles.affrimationRow}>
                      <Text style={styles.affrimationText}>
                        Affirmation {index + 1}
                      </Text>
                      <TouchableOpacity
                        onPress={() => handleRemoveAffirmation(item.id)}>
                        <Image
                          source={Images.close}
                          style={styles.closeImg}
                          tintColor={Colors.red}
                        />
                      </TouchableOpacity>
                    </View>
                    <TextInput
                      style={styles.affrimationInput}
                      placeholder="Enter affirmation"
                      placeholderTextColor={Colors.gray}
                      multiline={true}
                      value={item.text}
                      onChangeText={text =>
                        handleChangeAffirmation(text, item.id)
                      }
                    />
                    {item.text.trim().length > 0 && (
                      <TouchableOpacity style={styles.speechBtn}>
                        <Image
                          source={Images.speaker}
                          style={styles.speakerIcon}
                          tintColor={Colors.purple}
                        />
                        <Text style={styles.speechTxt}>Generate Speech</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                );
              })}
            </View>
          )}
          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAddAffirmation}>
            <Text style={styles.addButtonText}>+ Add affirmation</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.nextButton]}
          onPress={handleNextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Affrimation;
