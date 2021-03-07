import React from 'react';
import {View, useWindowDimensions} from 'react-native';

const Spacer = () => {
  const height = useWindowDimensions().height;

  return <View style={{height, width: 5}} />;
};

export default Spacer;
