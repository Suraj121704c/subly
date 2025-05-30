import {View, Text, Modal, TouchableOpacity, Image} from 'react-native';
import React from 'react';

//user-defined import files
import {styles} from './styles';
import {Images} from '../../Utils/images';
import {Colors} from '../../Utils/colors';

interface propsTyp {
  visible: boolean;
  summery: any;
  onRequestClose: () => void;
}

const SummaryModal = (props: propsTyp) => {
  const {visible, summery, onRequestClose} = props;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {}}>
      <View style={styles.container}>
        <View style={styles.innerView}>
          <View style={styles.headerView}>
            <TouchableOpacity style={styles.closeBtn} onPress={onRequestClose}>
              <Image source={Images.close} style={styles.closeImg} />
            </TouchableOpacity>
            <Text style={styles.headerTxt}>Summary</Text>
          </View>
          <View style={styles.summaryView}>
            {summery.map((item: any, index: number) => {
              const isCorrect = item.answer === item.correctAnswer;
              return (
                <View key={index}>
                  <Text style={styles.questionTxt}>{`${index + 1}. ${
                    item?.question
                  }`}</Text>
                  <View style={styles.ansView}>
                    <Text style={styles.ansLabelTxt}>Your answer:</Text>
                    <Text
                      style={[
                        styles.ansTxt,
                        {color: isCorrect ? Colors.green : Colors.red},
                      ]}>
                      {item?.answer || 'Not answered'}
                    </Text>
                  </View>
                  {!isCorrect && (
                    <View style={styles.ansView}>
                      <Text style={styles.ansLabelTxt}>Correct answer:</Text>
                      <Text style={[styles.ansTxt, {color: Colors.green}]}>
                        {item?.correctAnswer}
                      </Text>
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SummaryModal;
