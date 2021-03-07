import React from 'react';
import {View, useWindowDimensions} from 'react-native';

const Section = ({children}) => {
  const width = useWindowDimensions().width / 2;
  const height = useWindowDimensions().height;

  return <View style={{width, height, flex: 1}}>{children}</View>;
};

export default Section;
