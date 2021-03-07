import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {View, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {ExpertHeader} from '../../../../components';
import {PatientDetails, VisitDetails} from './components';
import {getExpertsData} from '../../../../redux/actions/appointments';

const ExpertVisit = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const {visit, patientInfo} = route.params;

  const params = {
    expertsParams: {
      tableName: 'users',
      uid: visit.uid,
    },
  };

  useEffect(() => {
    dispatch(getExpertsData(params));
  }, []);

  return (
    <View style={{flex: 1}}>
      <ExpertHeader title="Appointment Details" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <PatientDetails visit={visit} patientInfo={patientInfo} />
          <VisitDetails visit={visit} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ExpertVisit;
