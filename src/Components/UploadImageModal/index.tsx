import {View, Modal, TouchableWithoutFeedback} from 'react-native';
import React from 'react';

//user-define Import files
import {styles} from './styles';
import Button from '../Button';
import {STRINGS} from '../../Utils/constants';

interface propsType {
  visible: boolean;
  onRequestClose: () => void;
  onCamera: () => void;
  onGallery: () => void;
}

const UploadImageModal = (props: propsType) => {
  const {visible, onRequestClose, onCamera, onGallery} = props;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}>
      <TouchableWithoutFeedback onPress={onRequestClose}>
        <View style={styles.modalView}>
          <TouchableWithoutFeedback>
            <View style={styles.modalInnerView}>
              <Button
                title={STRINGS.takePhoto}
                style={styles.selectPhotoBtnOpacity}
                btnTxtStyle={styles.selectPhotoBtnTxt}
                onPress={onCamera}
              />
              <View style={styles.drawLine} />
              <Button
                title={STRINGS.chooseGallery}
                style={styles.selectPhotoBtnOpacity}
                btnTxtStyle={styles.selectPhotoBtnTxt}
                onPress={onGallery}
              />
              <View style={styles.drawLine} />
              <Button
                title={STRINGS.cancel}
                onPress={onRequestClose}
                style={styles.selectPhotoBtnOpacity}
                btnTxtStyle={styles.selectPhotoBtnTxt}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default UploadImageModal;
