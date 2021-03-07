/* eslint-disable react/prop-types */
import React from 'react';
import {View, Modal, Text} from 'react-native';
import style from './style';
import CustomButton from '../customButton';

const CustomModal = ({showLoader, errorMsg, onPressErrorButtonOk}) => (
  <Modal
    animationType="fade"
    onRequestClose={() => {}}
    transparent
    isVisible={showLoader}>
    <View style={style.parentContainerStyle}>
      <View style={style.innerContainerStyle}>
        <Text style={style.textStyle}>{errorMsg}</Text>
        <CustomButton
          buttonStyle={style.okBtnErrorContainerStyle}
          textStyle={style.okBtnErrorTextStyle}
          text="OK"
          onPress={onPressErrorButtonOk}
        />
      </View>
    </View>
  </Modal>
);

export default CustomModal;
