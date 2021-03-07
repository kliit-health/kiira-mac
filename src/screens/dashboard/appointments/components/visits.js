import React from 'react';
import {FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import ErrorBoundary from 'react-native-error-boundary';
import {useNavigation} from '@react-navigation/native';
import {setVisit} from '../../../../redux/actions/visit';
import Visit from './visit';

import styles from '../styles';

const Visits = ({selectedDate, search}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const FallBack = () => <View></View>;

  const handleVisitPress = (details) => {
    dispatch(setVisit(details));
    navigation.navigate('PaitentProfile', {
      expert: details.expert,
      visit: details.visit,
      patient: {
        uid: details.uid,
      },
    });
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={search}
      decelerationRate={'fast'}
      extraData={selectedDate}
      renderItem={({item, index}) => (
        <ErrorBoundary FallbackComponent={FallBack}>
          <Visit
            key={item.uid}
            onPress={handleVisitPress}
            visit={item}
            {...item}
          />
        </ErrorBoundary>
      )}
      keyExtractor={(index) => `${index.id}`}
      contentContainerStyle={styles.appointmentsList}
    />
  );
};

export default Visits;
