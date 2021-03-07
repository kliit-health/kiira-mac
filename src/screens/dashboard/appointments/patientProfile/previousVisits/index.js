import React, {Fragment, useEffect} from 'react';
import {View, Text, Pressable, FlatList, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Conditional from '../../../../../components/conditional';
import {useSelector, useDispatch} from 'react-redux';
import ExpertHeader from '../../../../../components/expertHeader';
import {getMedicalHistory} from '../../../../../redux/actions/patientProfile';
import moment from 'moment';

import styles from './style';

const PreviousVisits = ({visit}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const medicalHistory = useSelector((state) => state.medicalHistory);

  const {history} = medicalHistory;

  useEffect(() => {
    dispatch(getMedicalHistory(visit.uid));
  }, []);

  const Visit = ({item}) => {
    const {
      appointment: {visit},
    } = item;

    return (
      <Fragment>
        <View style={styles.infoContainer}>
          <Image
            defaultSource={require('../../../../../../assets/profile_img_placeholder.png')}
            containerStyle={{alignSelf: 'center'}}
            style={styles.image}
            source={{uri: visit.expert.imageUrl}}
            activeOpacity={0.7}
          />
          <View style={styles.detailsContainer}>
            <Text>{`Provider: ${visit.expert.firstName} ${visit.expert.lastName}`}</Text>
            <Text>{`CC: ${visit.reason}`}</Text>
            <Text>{`${moment(visit.time).format('llll')}`}</Text>
            <View style={styles.buttonContainer}>
              <Pressable
                style={styles.button}
                onPress={() =>
                  navigation.navigate('Recap', {item, title: 'Recap'})
                }>
                <Text style={{...styles.textStyle, color: '#2196F3'}}>
                  Full Notes
                </Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() =>
                  navigation.navigate('Recap', {
                    item,
                    short: true,
                    title: 'Summary',
                  })
                }>
                <Text style={{...styles.textStyle, color: '#2196F3'}}>
                  Summary
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Fragment>
    );
  };

  return (
    <View style={styles.container}>
      <ExpertHeader title="Previous Visits" />
      <Conditional if={history && history.length}>
        <FlatList
          data={history}
          keyExtractor={(item, index) =>
            item.appointment.visit.lastName + index
          }
          renderItem={Visit}
        />
      </Conditional>
      <Conditional if={!history}>
        <View style={styles.noVisitsContainer}>
          <Text style={styles.noVisits}>No previous visits</Text>
        </View>
      </Conditional>
    </View>
  );
};

export default PreviousVisits;
