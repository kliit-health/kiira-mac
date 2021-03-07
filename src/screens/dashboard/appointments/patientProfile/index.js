import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {colors} from '../../../../utils/constants';
import ExpertHeader from '../../../../components/expertHeader';
import Container from '../../../../components/container';
import Section from '../../../../components/section';
import Spacer from '../../../../components/spacer';
import Conditional from '../../../../components/conditional';
import PatientCard from './components/patientCard';
import PersonalInformation from './personalInformation';
import MedicalHistory from './medicalHistory';
import PreviousVisits from './previousVisits';
import Consent from './consent';
import ExpertTwillioLogin from '../twillio/Login';
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from '../../../../redux/actions';
import {useRoute} from '@react-navigation/native';
import {getPatientDetails} from '../../../../redux/actions/patientProfile';
import styles from './styles';

const PatientProfile = () => {
  const route = useRoute();
  const {visit, patient} = route.params;
  const dispatch = useDispatch();
  const patientInfo = useSelector((state) => state.user.data);
  const appointment = useSelector((state) => state.medicalHistory.appointment);
  const [activeTab, setActiveTab] = useState('PreviousVisits');

  useEffect(() => {
    dispatch(getUser(patient.uid));
  }, []);

  useEffect(() => {
    dispatch(
      getPatientDetails({
        uid: patient.uid,
      }),
    );
  }, []);

  return (
    <Container>
      <Section>
        <View style={styles.left}>
          <Conditional if={activeTab !== 'VisitExpert'}>
            <ExpertHeader title="Patient Profile" />
            <PatientCard visit={visit} patientInfo={patientInfo} />
            <ScrollView>
              <View style={styles.infoContainer}>
                <TouchableOpacity
                  onPress={() => setActiveTab('PersonalInformation')}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      containerStyle={{alignSelf: 'center'}}
                      style={styles.icon}
                      source={require('../../../../../assets/HPI.png')}
                      activeOpacity={0.7}
                    />
                    <Text style={styles.info}>Personal Information</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor:
                      activeTab === 'MedicalHistory'
                        ? colors.lightBlue
                        : colors.white,
                  }}
                  disabled={appointment && appointment.visit.locked}
                  onPress={() => setActiveTab('MedicalHistory')}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      containerStyle={{alignSelf: 'center'}}
                      style={styles.icon}
                      source={require('../../../../../assets/firstaid.png')}
                      activeOpacity={0.7}
                    />
                    <Text style={styles.info}>Medical History</Text>
                    <View style={styles.check}>
                      {appointment && appointment.visit.locked && (
                        <Image
                          resizeMode="contain"
                          containerStyle={{alignSelf: 'center'}}
                          style={styles.icon}
                          source={require('../../../../../assets/lock.png')}
                          activeOpacity={0.7}
                        />
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setActiveTab('PreviousVisits')}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor:
                        activeTab === 'PreviousVisits'
                          ? colors.lightBlue
                          : colors.white,
                    }}>
                    <Image
                      containerStyle={{alignSelf: 'center'}}
                      style={styles.icon}
                      source={require('../../../../../assets/notes.png')}
                      activeOpacity={0.7}
                    />
                    <Text style={styles.info}>Previous Visits</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab('Consent')}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      containerStyle={{alignSelf: 'center'}}
                      style={styles.icon}
                      source={require('../../../../../assets/agreement.png')}
                      activeOpacity={0.7}
                    />
                    <Text style={styles.info}>Consent Agreements</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab('VisitExpert')}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      resizeMode="contain"
                      containerStyle={{alignSelf: 'center'}}
                      style={styles.icon}
                      source={require('../../../../../assets/phone.png')}
                      activeOpacity={0.7}
                    />
                    <Text style={styles.info}>Video Visit</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </Conditional>
          <Conditional if={activeTab === 'VisitExpert'}>
            <ExpertTwillioLogin />
          </Conditional>
        </View>
      </Section>
      <Spacer />
      <Section>
        <View style={styles.right}>
          {/* <Conditional if={activeTab === 'PersonalInformation'}>
            <PersonalInformation uid={patient.uid} visit={visit} />
          </Conditional> */}

          <Conditional
            if={activeTab === 'MedicalHistory' || activeTab === 'VisitExpert'}>
            <MedicalHistory />
          </Conditional>

          <Conditional if={activeTab === 'PreviousVisits'}>
            <PreviousVisits patientInfo={patientInfo} visit={visit} />
          </Conditional>

          <Conditional if={activeTab === 'Consent'}>
            <Consent />
          </Conditional>
        </View>
      </Section>
    </Container>
  );
};

export default PatientProfile;
