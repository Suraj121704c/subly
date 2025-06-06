import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

//user-defined import files
import {styles} from './styles';
import {Images} from '../../../Utils/images';
import {Route} from '../../../Navigation/constants';

const initialAffirmation = (type = 'text') => ({
  type,
  value: '',
  audioUri: '',
  isRecording: false,
  isPaused: false,
});

const Affrimation = () => {
  const navigation = useNavigation<any>();
  const {frequencyValue} = useRoute<any>().params;
  const [tab, setTab] = useState<'type' | 'record'>('type');
  const [affirmations, setAffirmations] = useState([
    initialAffirmation('text'),
  ]);

  console.log('frequencyValue', frequencyValue);

  const hasUnsavedData = () => {
    return affirmations.some(a => a.value || a.audioUri);
  };

  const handleTabSwitch = (newTab: 'type' | 'record') => {
    if (tab !== newTab && hasUnsavedData()) {
      Alert.alert('Warning', 'Your data will be lost', [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Switch',
          style: 'destructive',
          onPress: () => {
            setTab(newTab);
            setAffirmations([
              initialAffirmation(newTab === 'type' ? 'text' : 'audio'),
            ]);
          },
        },
      ]);
    } else {
      setTab(newTab);
      setAffirmations([
        initialAffirmation(newTab === 'type' ? 'text' : 'audio'),
      ]);
    }
  };

  const handleAdd = () => {
    setAffirmations([
      ...affirmations,
      initialAffirmation(tab === 'type' ? 'text' : 'audio'),
    ]);
  };

  const handleRemove = (idx: number) => {
    setAffirmations(affirmations.filter((_, i) => i !== idx));
  };

  const handleTTS = (text: string) => {
    Alert.alert('TTS', `Would play: ${text}`);
  };

  const handleAIGenerate = () => {
    Alert.alert('AI', 'This would generate affirmations with AI.');
  };

  const handleRecord = (idx: number) => {
    const updated = affirmations.map((a, i) => ({
      ...a,
      isRecording: i === idx,
      isPaused: false,
    }));
    setAffirmations(updated);
  };
  const handlePause = (idx: number) => {
    const updated = [...affirmations];
    updated[idx].isPaused = true;
    setAffirmations(updated);
  };
  const handleResume = (idx: number) => {
    const updated = [...affirmations];
    updated[idx].isPaused = false;
    setAffirmations(updated);
  };
  const handleStop = (idx: number) => {
    const updated = [...affirmations];
    updated[idx].isRecording = false;
    updated[idx].isPaused = false;
    updated[idx].audioUri = 'audio-uri-placeholder';
    updated[idx].value = 'Recorded audio';
    setAffirmations(updated);
  };

  const canProceed = affirmations.some(a => a.value || a.audioUri);

  return (
    <SafeAreaView style={styles.container}>
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
          <Text style={styles.trackTitle}>What's the affirmation?</Text>
        </View>
        <View style={styles.tabRow}>
          <TouchableOpacity
            style={[styles.tabButton, tab === 'type' && styles.tabButtonActive]}
            onPress={() => handleTabSwitch('type')}>
            <Text
              style={[styles.tabText, tab === 'type' && styles.tabTextActive]}>
              Type
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              tab === 'record' && styles.tabButtonActive,
            ]}
            onPress={() => handleTabSwitch('record')}>
            <Text
              style={[
                styles.tabText,
                tab === 'record' && styles.tabTextActive,
              ]}>
              Record
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{flex: 1}}>
          {affirmations.map((a, idx) => (
            <View key={idx} style={styles.card}>
              {tab === 'type' ? (
                <>
                  <TextInput
                    placeholder="Write your affirmation"
                    value={a.value}
                    onChangeText={text => {
                      const updated = [...affirmations];
                      updated[idx].value = text;
                      setAffirmations(updated);
                    }}
                    style={styles.input}
                  />
                  <TouchableOpacity
                    style={styles.ttsButton}
                    onPress={() => handleTTS(a.value)}
                    disabled={!a.value}>
                    <Text style={styles.ttsButtonText}>Convert to Speech</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  {!a.isRecording && !a.audioUri && (
                    <TouchableOpacity
                      onPress={() => handleRecord(idx)}
                      style={styles.recordStateRow}>
                      <Image source={Images.record} style={styles.recordIcon} />
                      <Text style={styles.recordText}>
                        Tap to start recording
                      </Text>
                    </TouchableOpacity>
                  )}
                  {a.isRecording && !a.isPaused && (
                    <View
                      style={{alignItems: 'center', justifyContent: 'center'}}>
                      <TouchableOpacity
                        onPress={() => handlePause(idx)}
                        style={styles.recordStateRow}>
                        <Image
                          source={Images.pause}
                          style={styles.recordIcon}
                        />
                        <Text style={styles.recordText}>Tap to pause</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                  {a.isRecording && a.isPaused && (
                    <View style={styles.recordStateRow}>
                      <TouchableOpacity onPress={() => handleResume(idx)}>
                        <Image
                          source={Images.play_purple}
                          style={styles.recordIcon}
                        />
                      </TouchableOpacity>
                      <Text style={styles.recordText}>Tap to continue</Text>
                      <TouchableOpacity
                        onPress={() => handleStop(idx)}
                        style={[styles.ttsButton, {marginTop: 8}]}>
                        <Text style={styles.ttsButtonText}>Stop & Save</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                  {a.audioUri ? (
                    <View style={{alignItems: 'center'}}>
                      <Text>Recorded!</Text>
                    </View>
                  ) : null}
                </>
              )}
              {affirmations.length > 1 && (
                <TouchableOpacity
                  onPress={() => handleRemove(idx)}
                  style={styles.removeButton}>
                  <Text style={styles.removeButtonText}>Remove</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
          <TouchableOpacity onPress={handleAdd} style={styles.addButton}>
            <Text style={styles.addButtonText}>+ Add another subliminal</Text>
          </TouchableOpacity>
          {tab === 'type' && (
            <TouchableOpacity
              onPress={handleAIGenerate}
              style={styles.aiButton}>
              <Text style={styles.aiButtonText}>
                Generate subliminals with AI ✨
              </Text>
            </TouchableOpacity>
          )}
        </ScrollView>
        <TouchableOpacity
          style={[styles.nextButton, !canProceed && styles.nextButtonDisabled]}
          disabled={!canProceed}
          onPress={() =>
            navigation.navigate(Route.CustomizeSublimal, {
              frequencyValue: frequencyValue,
            })
          }>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Affrimation;
