import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import { useDispatch } from 'react-redux';

// user defined imports
import {styles} from './styles';
import {Images} from '../../../Utils/images';
import {openGallery} from '../../../Helper';
import {createSublimalAction} from './Controller/action';

const CreateSublimalFinal = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  const {params} = useRoute<any>().params;
  const [image, setImage] = useState<string | null>(null);
  const [title, setTitle] = useState<string>('');
  const [isPublic, setIsPublic] = useState<boolean>(false);

  // Simulate image selection
  const handleUpload = async () => {
    const image = await openGallery();
    if (image) {
      setImage(image.path);
    }
  };

  const handleCreateSublimal = () => {
    dispatch(createSublimalAction(params))  
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={Images.back} style={styles.backicon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Create new Subly</Text>
          <TouchableOpacity />
        </View>
        <View style={styles.trackInfo}>
          <Text style={styles.stepText}>4</Text>
          <Text style={styles.trackTitle}>Set name and create</Text>
        </View>
        {/* Image Upload Box */}
        <View style={styles.uploadBox}>
          <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
            {image ? (
              <Image source={{uri: image}} style={styles.uploadIcon} />
            ) : (
              <Image source={Images.upload} style={styles.uploadIcon} />
            )}
            <Text style={styles.uploadText}>
              {image ? 'Image uploaded' : 'Upload an image'}
            </Text>
            <Text style={styles.optionalText}>(optional)</Text>
          </TouchableOpacity>
        </View>
        {/* Title Input */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleLabel}>Give a title to your subliminal</Text>
          {/* <View style={styles.inputBox}> */}
          <TextInput
            style={styles.inputText}
            value={title}
            onChangeText={setTitle}
            placeholder="My Subly #1"
            placeholderTextColor="#A6A6A6"
          />
          {/* </View> */}
        </View>
        {/* Checkbox */}
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => setIsPublic(!isPublic)}>
            {isPublic && (
              <Text
                style={{
                  color: '#7B1CFF',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                ✓
              </Text>
            )}
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>Make this subliminal public</Text>
        </View>
      </View>
      {/* Create Button at the bottom */}
      <View style={{marginBottom: 10}}>
        <TouchableOpacity style={styles.createButton} onPress={handleCreateSublimal}>
          <Text style={styles.createButtonText}>Create subliminal</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateSublimalFinal;
