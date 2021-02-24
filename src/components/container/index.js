import React from 'react';
import {View} from 'react-native';
import SideBar from '../sideBar';
import styles from './styles';

const Container = ({children}) => {
  return (
    <View style={styles.root}>
      <SideBar />
      {children}
    </View>
  );
};

export default Container;
