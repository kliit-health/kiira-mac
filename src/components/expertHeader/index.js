import React from 'react';
import {View, Text} from 'react-native';
import {string} from 'prop-types';
import styles from './style';

const ExpertHeader = ({title}) => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

ExpertHeader.propTypes = {
  title: string,
};

export default ExpertHeader;
