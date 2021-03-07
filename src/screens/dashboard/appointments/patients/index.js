import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './style';
import {getPatientsList} from '../../../../redux/actions/patients';
import Visit from './components/visit';
import {generateDateInfo} from '../../../../utils/helper';
import moment from 'moment';
import _ from 'lodash';
import Container from '../../../../components/container';
import ExpertHeader from '../../../../components/expertHeader';

const Patients = (props) => {
  const {navigation} = props;
  const dispatch = useDispatch();

  const lang = useSelector((state) => state.language);
  const userData = useSelector((state) => state.authLoading.userData);
  const visitData = useSelector((state) => state.patients.history);
  const [visits, setVisits] = useState([]);
  const [searchVisits, setSearchVisits] = useState([]);

  useEffect(() => {
    dispatch(getPatientsList({uid: userData.uid}));
  }, []);

  useEffect(() => {
    let record = _.flatten(visitData);

    if (record.length > 1) {
      let filtered = record.filter((visit) =>
        moment(visit.time).isSameOrAfter(new Date()),
      );

      filtered = filtered.sort((a, b) => {
        return (
          parseInt(moment(a.time).format('x')) -
          parseInt(moment(b.time).format('x'))
        );
      });

      setVisits([...filtered]);
      setSearchVisits([...filtered]);
    } else {
      setVisits([...record]);
      setSearchVisits([...record]);
    }
  }, [visitData]);

  return (
    <>
      <ExpertHeader title="Upcoming Visits" />
      <View style={styles.container}>
        {visits.length > 0 && (
          <FlatList
            showsVerticalScrollIndicator={false}
            keyboardDismissMode={Platform.OS === 'ios' ? 'none' : 'on-drag'}
            keyboardShouldPersistTaps={
              Platform.OS === 'ios' ? 'never' : 'always'
            }
            data={searchVisits}
            decelerationRate={'fast'}
            renderItem={({item, index}) => {
              const date = generateDateInfo(item.time);
              return <Visit visit={item} date={date} />;
            }}
            keyExtractor={(index) => `${index.id}`}
          />
        )}
      </View>
    </>
  );
};

export default Patients;
