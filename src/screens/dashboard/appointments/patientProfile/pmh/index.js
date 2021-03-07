import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import {useSelector} from 'react-redux';
import Conditional from '../../../../../components/conditional';
import ExpertHeader from '../../../../../components/expertHeader';
import {CheckBox} from 'react-native-elements';
import {questions} from './questions';

import styles from './style';

const PersonalMedicalHistory = () => {
  const {cancer, rareDisease, disease} = useSelector(
    (state) => state.patientProfile.pmh,
  );

  const [answers, setAnswers] = useState({
    cancer: {
      history: cancer.history,
      notes: cancer.notes,
    },
    rareDisease: {
      history: rareDisease.history,
      notes: rareDisease.notes,
    },
    disease: {
      diabetes: disease.diabetes,
      highBloodPressure: disease.highBloodPressure,
      giReflux: disease.giReflux,
      giDisease: disease.giDisease,
      fibroids: disease.fibroids,
      endometriosos: disease.endometriosos,
      osteopenia: disease.osteopenia,
      osteoporosis: disease.osteoporosis,
      heartDisease: disease.heartDisease,
      highCholesterol: disease.highCholesterol,
      hepatitis: disease.hepatitis,
      liverProblems: disease.liverProblems,
      kidneyProblems: disease.kidneyProblems,
      arthritis: disease.arthritis,
      jointPain: disease.jointPain,
      fracture: disease.fracture,
      anxiety: disease.anxiety,
      depression: disease.depression,
      seizures: disease.seizures,
      asthma: disease.asthma,
      lungProblems: disease.lungProblems,
      tuberculosis: disease.tuberculosis,
      thyroidDisease: disease.thyroidDisease,
      clottingDisorder: disease.clottingDisorder,
      none: disease.none,
    },
  });

  const toggleSelection = (key) => {
    let answerToSet = {...answers};

    answerToSet[key].history = !answerToSet[key].history;
    setAnswers(answerToSet);
  };

  const setAnswer = (key) => {
    let answerToSet = {...answers};

    answerToSet[option.section][option.key] = !answerToSet[option.section][
      option.key
    ];
    setAnswers(answerToSet);
  };

  const setNotes = (key, text) => {
    let answerToSet = {...answers};

    answerToSet[key].notes = text;
    setAnswers(answerToSet);
  };

  return (
    <View style={styles.container}>
      <ExpertHeader title="Past Medical History" />

      {questions.map((question) => {
        console.log(question);
        return (
          <View key={question}>
            <Text style={styles.question}>{question.question}</Text>
            <Conditional if={question.options}>
              {question.options.map((option) => {
                console.log(option);
                return (
                  <CheckBox
                    key={option.title}
                    onPress={() => setAnswer(option)}
                    title={option.title}
                    checkedIcon="check"
                    uncheckedIcon="square-o"
                    checked={answers[option.section][option.key]}
                  />
                );
              })}
            </Conditional>
            {/* <Conditional if={!question.options}>
            <View>
              <View style={styles.buttonContainer}>
                <CheckBox
                  key={question.question}
                  onPress={() => toggleSelection(question.key)}
                  title="Yes"
                  checkedIcon="check"
                  uncheckedIcon="square-o"
                  checked={answers[question.key].history}
                />
                <CheckBox
                  key={question.question}
                  onPress={() => toggleSelection(question.key)}
                  title="No"
                  checkedIcon="check"
                  uncheckedIcon="square-o"
                  checked={answers[question.key].history}
                />
              </View>
              <Conditional if={question.textPrompt}>
                <TextInput
                  onChangeText={(text) => setNotes(questions.key, text)}
                  style={styles.input}
                  value={answers[question.key].notes}
                  multiline
                  placeholder={question.textPrompt}
                  placeholderTextColor="black"
                />
              </Conditional>
            </View>
          </Conditional> */}
          </View>
        );
      })}
    </View>
  );
};

export default PersonalMedicalHistory;
