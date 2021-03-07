import React from 'react';
import {View, Text, Image} from 'react-native';
import {useRoute} from '@react-navigation/native';
import moment from 'moment';
import styles from '../styles';

const PatientDetails = () => {
  const route = useRoute();
  const {visit} = route.params;
  const {firstName, lastName, profile} = visit;

  return (
    <View style={styles.expertInfoParentContainerStyle}>
      <View style={styles.expertImageContainer}>
        <Image
          style={styles.expertImage}
          resizeMode="cover"
          source={{uri: profile}}
          activeOpacity={0.7}
        />
        <View>
          <View style={styles.myRecentExpertContainerStyle}>
            <View style={styles.expertName}>
              <Text style={styles.expertNameTextStyle}>
                {`${firstName} ${lastName}`}
              </Text>
            </View>
            <View style={styles.expertProfession}>
              <Text style={styles.expertProfessionTextStyle}>
                Chief Complaint:
              </Text>
            </View>
            <View style={styles.expertProfession}>
              <Text style={styles.expertProfessionTextStyle}>
                {visit.reason}
              </Text>
            </View>
            <View style={{marginTop: 5}}>
              <Text style={styles.expertProfessionTextStyle}>
                {moment(visit.time).format('llll')}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PatientDetails;
