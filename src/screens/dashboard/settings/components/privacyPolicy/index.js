import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';

const PrivacyPolicy = () => {
  const sections = useSelector((state) => state.privacyPolicy.data.sections);

  return (
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}>
      <Image
        source={require('../../../../../../assets/logo-sm.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      {sections.map(({title, body}, index) => (
        <View key={`${title} ${index}`} style={styles.sectionContainer}>
          {Boolean(title) && <Text style={styles.sectionTitle}>{title}</Text>}
          <Text style={styles.sectionContent}>
            {body.replace(/\\n/g, '\n')}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default PrivacyPolicy;
