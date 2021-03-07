import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import styles from './style';
import {staticImages} from '../../../../../../utils/constants';

const Section = ({
  title,
  image,
  complete,
  screen,
  navigation,
  data,
  lock,
  visit,
}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        lock
          ? navigation.navigate(screen, {item: {...data}, visit})
          : navigation.navigate(screen, {visit})
      }>
      <View style={styles.container}>
        <Image
          resizeMode={'contain'}
          containerStyle={{alignSelf: 'center'}}
          style={styles.icon}
          source={staticImages[image]}
          activeOpacity={0.7}
        />
        <Text style={styles.info}>{title}</Text>
        <View style={styles.check}>
          {complete && (
            <Image
              containerStyle={{alignSelf: 'center'}}
              style={styles.icon}
              source={require('../../../../../../../assets/check.png')}
              activeOpacity={0.7}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Section;