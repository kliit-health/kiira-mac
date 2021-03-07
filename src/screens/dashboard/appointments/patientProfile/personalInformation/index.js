import React, {useState} from 'react';
import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  Header,
  Container,
  TextInput,
  TextButton,
} from '../../../../../components';
import model from './model';
import styles, {modifiers} from './styles';
import {updatePatientDetails} from '../../../../../redux/actions/patientProfile';
import moment from 'moment';

const PersonalInfo = ({uid, visit}) => {
  const dispatch = useDispatch();

  const [updates, setUpdates] = useState({
    fullName: `${visit.firstName} ${visit.lastName}`,
    gender: visit.gender,
    dateOfBirth: visit.dob,
    phoneNumber: visit.phoneNumber,
    primaryCarePhysician: '',
  });

  const [picker, setPicker] = useState(false);
  const lang = useSelector((state) => state.language);

  const handleDatePress = () => {
    setPicker(true);
  };

  const handleDateDismiss = () => {
    setPicker(false);
  };

  const handleDateSave = (date) => {
    setUpdates({...updates, dateOfBirth: date});
    setPicker(false);
  };

  const handleUpdate = (dataKey, value) => {
    setUpdates({...updates, [dataKey]: value});
  };

  const handleSave = () => {
    dispatch(
      updatePatientDetails({
        dataKey: 'personalInformation',
        updates,
        uid,
        navigation,
      }),
    );
  };

  return (
    <Container>
      <Header
        title={lang.personalInformation.title}
        onBack={() => navigation.goBack()}
        themed
      />
      <View style={styles.body}>
        {model.map(({label, date, dataKey}) => {
          const value = date
            ? moment(updates[dataKey]).format('MM/DD/YYYY')
            : updates[dataKey];

          return (
            <TextInput
              outlined
              key={label}
              label={label}
              chevron={date}
              onPress={date ? handleDatePress : null}
              defaultValue={value}
              onChange={(value) => handleUpdate(dataKey, value)}
            />
          );
        })}
        <TextButton
          styles={modifiers.saveButton}
          disabled={!updates}
          onPress={handleSave}>
          {lang.personalInformation.save}
        </TextButton>
      </View>
    </Container>
  );
};

export default PersonalInfo;
