import React, {useState} from 'react';
import {View, ScrollView, TextInput, Text} from 'react-native';
import {modal} from '../../../../../utils/constants';
import {Picker} from '@react-native-picker/picker';
import {CheckBox} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';

import styles from './style';

const PregnancyHistory = () => {
  const {
    pregnancies,
    miscarriages,
    fullTermBirths,
    abortions,
    cesarean,
    livingChildren,
    pregnancyIssues,
  } = useSelector((state) => state.patientProfile.pregnancy);
  const dispatch = useDispatch();

  const [answers, setAnswers] = useState({
    pregnancies: {
      number: pregnancies.number,
    },
    miscarriages: {
      number: miscarriages.number,
    },
    fullTermBirths: {
      number: fullTermBirths.number,
    },
    abortions: {
      number: abortions.number,
    },
    cesarean: {
      number: cesarean.number,
    },
    livingChildren: {
      number: livingChildren.number,
    },
    pregnancyIssues: {
      history: pregnancyIssues.history,
      notes: pregnancyIssues.notes,
    },
  });

  return (
    <>
      <Text style={styles.heading}>Pregnancy History</Text>
      <View style={styles.container}>
        <View style={styles.dropDownContainer}>
          <Text style={styles.inputLabel}>Pregnancies</Text>
          <Picker
            itemStyle={{width: 150}}
            selectedValue={answers.pregnancies.number}
            onValueChange={(itemValue) =>
              setAnswers({...answers, pregnancies: itemValue})
            }>
            {modal.numbers.map((item) => (
              <Picker.Item label={item.value} value={item} />
            ))}
          </Picker>
        </View>
        <View style={styles.dropDownContainer}>
          <Text style={styles.inputLabel}>Miscarriages</Text>
          <Picker
            itemStyle={{width: 150}}
            selectedValue={answers.miscarriages.number}
            onValueChange={(itemValue) =>
              setAnswers({...answers, miscarriages: itemValue})
            }>
            {modal.numbers.map((item) => (
              <Picker.Item label={item.value} value={item} />
            ))}
          </Picker>
        </View>
        <View style={styles.dropDownContainer}>
          <Text style={styles.inputLabel}>FullTerm</Text>
          <Picker
            itemStyle={{width: 150}}
            selectedValue={answers.fullTermBirths.number}
            onValueChange={(itemValue) =>
              setAnswers({...answers, fullTermBirths: itemValue})
            }>
            {modal.numbers.map((item) => (
              <Picker.Item label={item.value} value={item} />
            ))}
          </Picker>
        </View>
        <View style={styles.dropDownContainer}>
          <Text style={styles.inputLabel}>Abortions</Text>
          <Picker
            itemStyle={{width: 150}}
            selectedValue={answers.abortions.number}
            onValueChange={(itemValue) =>
              setAnswers({...answers, abortions: itemValue})
            }>
            {modal.numbers.map((item) => (
              <Picker.Item label={item.value} value={item} />
            ))}
          </Picker>
        </View>
        <View style={styles.dropDownContainer}>
          <Text style={styles.inputLabel}>C Section</Text>
          <Picker
            itemStyle={{width: 150}}
            selectedValue={answers.cesarean.number}
            onValueChange={(itemValue) =>
              setAnswers({...answers, cesarean: itemValue})
            }>
            {modal.numbers.map((item) => (
              <Picker.Item label={item.value} value={item} />
            ))}
          </Picker>
        </View>
        <View style={styles.dropDownContainer}>
          <Text style={styles.inputLabel}>Children</Text>
          <Picker
            itemStyle={{width: 150}}
            selectedValue={answers.livingChildren.number}
            onValueChange={(itemValue) =>
              setAnswers({...answers, livingChildren: itemValue})
            }>
            {modal.numbers.map((item) => (
              <Picker.Item label={item.value} value={item} />
            ))}
          </Picker>
        </View>
      </View>

      <Text style={styles.inputLabel}>Pregnancy Issues</Text>
      <View style={styles.inputContainer}>
        <CheckBox
          key="Issues Yes"
          size={20}
          textStyle={styles.checkBox}
          onPress={() =>
            setAnswers({...answers, pregnancyIssues: {history: true}})
          }
          title="Yes"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.pregnancyIssues.history}
        />
        <CheckBox
          key="Issues No"
          size={20}
          textStyle={styles.checkBox}
          onPress={() =>
            setAnswers({...answers, pregnancyIssues: {history: false}})
          }
          title="No"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={!answers.pregnancyIssues.history}
        />
      </View>
      <View>
        <TextInput
          onChangeText={(text) =>
            setAnswers({...answers, pregnancyIssues: {notes: text}})
          }
          style={styles.input}
          value={answers.pregnancyIssues.notes}
          multiline
          placeholder="Please type here"
          placeholderTextColor="black"
        />
      </View>
    </>
  );
};

export default PregnancyHistory;
