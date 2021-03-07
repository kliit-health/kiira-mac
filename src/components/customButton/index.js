/* eslint-disable react/prop-types */
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const CustomButton = ({onPress, text, buttonStyle, disabled, textStyle}) => (
  <TouchableOpacity disabled={disabled} onPress={onPress} style={buttonStyle}>
    <Text style={textStyle}>{text}</Text>
  </TouchableOpacity>
);

export default CustomButton;
