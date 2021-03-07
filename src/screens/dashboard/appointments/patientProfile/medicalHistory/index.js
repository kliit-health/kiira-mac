import React from 'react';
import {View, ScrollView, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import ExpertHeader from '../../../../../components/expertHeader';
import PregnancyHistory from '../pregnancy';
import GynHistory from '../gyn';
import PersonalMedicalHistory from '../pmh';
import Section from '../components/section';
import sections from './model';
import styles from './style';

const MedicalHistory = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {visit} = route.params;
  const medicalRecord = useSelector((state) => state.paitentProfile);

  return (
    <View style={styles.container}>
      <ExpertHeader title="Medical History " />
      <ScrollView indicatorStyle="black">
        <View style={styles.infoContainer}>
          <PregnancyHistory />
        </View>
        <View style={styles.infoContainer}>
          <GynHistory />
        </View>
        {/* <View style={styles.infoContainer}>
          <PersonalMedicalHistory />
        </View> */}
      </ScrollView>
    </View>
  );
};

export default MedicalHistory;
