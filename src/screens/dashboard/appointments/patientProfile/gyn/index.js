import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import {modal} from '../../../../../utils/constants';
import {useDispatch, useSelector} from 'react-redux';
import {Picker} from '@react-native-picker/picker';
import {CheckBox} from 'react-native-elements';

import styles from './styles';

const GynHistory = () => {
  const {
    lastPeriod,
    periodLength,
    abnormalPap,
    cycleLength,
    menarche,
    papDate,
    sti,
    hiv,
    des,
    sexuallyActive,
    underAge,
    multiplePartners,
    useContraception,
    useBirthControl,
    contraceptions,
    active,
    activeCurrent,
    sexualPartners,
    currentlyActive,
    numberOfPartners,
  } = useSelector((state) => state.patientProfile.gyn);
  const dispatch = useDispatch();

  const [answers, setAnswers] = useState({
    lastPeriod: {
      notes: lastPeriod.notes,
    },
    periodLength: {
      lessThan: periodLength.lessThan,
      moreThan: periodLength.moreThan,
    },
    abnormalPap: {
      history: abnormalPap.history,
      notes: abnormalPap.notes,
    },
    cycleLength: {
      lessThan: cycleLength.lessThan,
      about: cycleLength.about,
      moreThan: cycleLength.moreThan,
    },
    menarche: {
      notes: menarche.notes,
    },
    papDate: {
      notes: papDate.notes,
    },
    sti: {
      chlamydia: sti.chlamydia,
      gonorrhea: sti.gonorrhea,
      genitalWarts: sti.genitalWarts,
      herpes: sti.herpes,
      trichomonas: sti.trichomonas,
      syphilis: sti.syphilis,
      none: sti.none,
    },
    hiv: {
      history: hiv.history,
      notes: hiv.notes,
    },
    des: {
      history: des.history,
      notes: des.notes,
    },
    sexuallyActive: {
      history: sexuallyActive.history,
      notes: sexuallyActive.notes,
    },
    underAge: {
      history: underAge.history,
      notes: underAge.notes,
    },
    multiplePartners: {
      history: multiplePartners.history,
      notes: multiplePartners.notes,
    },
    useContraception: {
      history: useContraception.history,
      notes: useContraception.notes,
    },
    useBirthControl: {
      history: useBirthControl.history,
      notes: useBirthControl.notes,
    },
    contraceptions: {
      condoms: contraceptions.condoms,
      thePill: contraceptions.thePill,
      pullOut: contraceptions.pullOut,
      tubesTied: contraceptions.tubesTied,
      diaphram: contraceptions.diaphram,
      patch: contraceptions.patch,
      flim: contraceptions.flim,
      other: contraceptions.other,
    },
    active: {
      history: active.history,
      notes: active.notes,
    },
    activeCurrent: {
      history: activeCurrent.history,
      notes: activeCurrent.notes,
    },
    sexualPartners: {
      men: sexualPartners.men,
      women: sexualPartners.women,
      other: sexualPartners.other,
    },
    currentlyActive: {
      history: currentlyActive.history,
      notes: currentlyActive.notes,
    },
    numberOfPartners: {
      male: {
        number: numberOfPartners.male.number,
        visible: false,
      },
      female: {
        number: numberOfPartners.female.number,
        visible: false,
      },
      other: {
        number: numberOfPartners.other.number,
        visible: false,
      },
    },
  });

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>GYN History</Text>
        <View style={styles.container}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={styles.inputLabel}>Date of last period</Text>
              <TextInput
                onChangeText={(text) =>
                  setAnswers({...answers, lastPeriod: {notes: text}})
                }
                style={styles.singleInput}
                value={answers.lastPeriod.notes}
                placeholder="Please type here"
                placeholderTextColor="black"
              />
            </View>
            <View>
              <Text style={styles.inputLabel}>Age of Menarche</Text>
              <TextInput
                onChangeText={(text) =>
                  setAnswers({...answers, menarche: {notes: text}})
                }
                style={styles.singleInput}
                value={answers.menarche.notes}
                placeholder="Please type here"
                placeholderTextColor="black"
              />
            </View>
            <View>
              <Text style={styles.inputLabel}>Date of last Pap</Text>
              <TextInput
                onChangeText={(text) =>
                  setAnswers({...answers, papDate: {notes: text}})
                }
                style={styles.singleInput}
                value={answers.papDate.notes}
                placeholder="Please type here"
                placeholderTextColor="black"
              />
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.inputLabel}>Length of period</Text>
      <View style={styles.inputContainer}>
        <CheckBox
          key="Less Than"
          size={20}
          textStyle={styles.checkBox}
          onPress={() =>
            setAnswers({...answers, periodLength: {lessThan: true}})
          }
          title="7 Days or less"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.periodLength.lessThan}
        />
        <CheckBox
          key="More Than"
          size={20}
          textStyle={styles.checkBox}
          onPress={() =>
            setAnswers({...answers, periodLength: {moreThan: true}})
          }
          title="Over 7 Days"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.periodLength.moreThan}
        />
      </View>
      <Text style={styles.inputLabel}>Cycle Length</Text>
      <View style={styles.inputContainer}>
        <CheckBox
          size={20}
          textStyle={styles.checkBox}
          key="Under 21"
          onPress={() =>
            setAnswers({...answers, cycleLength: {lessThan: true}})
          }
          title="< 21 days"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.cycleLength.lessThan}
        />
        <CheckBox
          key="21-42"
          size={20}
          textStyle={styles.checkBox}
          onPress={() => setAnswers({...answers, cycleLength: {about: true}})}
          title="21 - 42 days"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.cycleLength.about}
        />
        <CheckBox
          key="Over 43"
          size={20}
          textStyle={styles.checkBox}
          onPress={() =>
            setAnswers({...answers, cycleLength: {moreThan: true}})
          }
          title="> 43 days"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.cycleLength.moreThan}
        />
      </View>
      <Text style={styles.inputLabel}>Abnormal Pap</Text>
      <View style={styles.inputContainer}>
        <CheckBox
          key="abnormalPap Yes"
          size={20}
          textStyle={styles.checkBox}
          onPress={() => setAnswers({...answers, abnormalPap: {history: true}})}
          title="Yes"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.abnormalPap.history}
        />
        <CheckBox
          key="abnormalPap No"
          size={20}
          textStyle={styles.checkBox}
          onPress={() =>
            setAnswers({...answers, abnormalPap: {history: false}})
          }
          title="No"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={!answers.abnormalPap.history}
        />
      </View>
      <View>
        <TextInput
          onChangeText={(text) =>
            setAnswers({...answers, abnormalPap: {notes: text}})
          }
          style={styles.input}
          value={answers.abnormalPap.notes}
          multiline
          placeholder="Please type here"
          placeholderTextColor="black"
        />
      </View>
      <Text style={styles.inputLabel}>Has been treated for: </Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        <CheckBox
          key="Chlamydia"
          size={20}
          textStyle={styles.checkBox}
          onPress={() => setAnswers({...answers, sti: {chlamydia: true}})}
          title="Chlamydia"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.sti.chlamydia}
        />
        <CheckBox
          key="Gonorrhea"
          size={20}
          textStyle={styles.checkBox}
          onPress={() =>
            setAnswers({...answers, periodLength: {gonorrhea: true}})
          }
          title="Gonorrhea"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.sti.gonorrhea}
        />
        <CheckBox
          key="Genital warts"
          size={20}
          textStyle={styles.checkBox}
          onPress={() => setAnswers({...answers, sti: {genitalWarts: true}})}
          title="Genital Warts"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.sti.genitalWarts}
        />
        <CheckBox
          key="Herpes"
          size={20}
          textStyle={styles.checkBox}
          onPress={() => setAnswers({...answers, sti: {herpes: true}})}
          title="Herpes"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.sti.herpes}
        />
        <CheckBox
          key="Trichomonas"
          size={20}
          textStyle={styles.checkBox}
          onPress={() => setAnswers({...answers, sti: {trichomonas: true}})}
          title="Trichomonas"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.sti.trichomonas}
        />
        <CheckBox
          key="Syphilis"
          size={20}
          textStyle={styles.checkBox}
          onPress={() =>
            setAnswers({...answers, periodLength: {syphilis: true}})
          }
          title="Syphilis"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.sti.syphilis}
        />
        <CheckBox
          key="None"
          size={20}
          textStyle={styles.checkBox}
          onPress={() => setAnswers({...answers, sti: {none: true}})}
          title="None"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.sti.none}
        />
      </View>
      <Text style={styles.inputLabel}>HIV Positive</Text>
      <View style={styles.inputContainer}>
        <CheckBox
          key="hivpos Yes"
          size={20}
          textStyle={styles.checkBox}
          onPress={() => setAnswers({...answers, hiv: {history: true}})}
          title="Yes"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.hiv.history}
        />
        <CheckBox
          key="hivpos No"
          size={20}
          textStyle={styles.checkBox}
          onPress={() => setAnswers({...answers, hiv: {history: false}})}
          title="No"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={!answers.hiv.history}
        />
      </View>
      <View>
        <TextInput
          onChangeText={(text) => setAnswers({...answers, hiv: {notes: text}})}
          style={styles.input}
          value={answers.hiv.notes}
          multiline
          placeholder="Please type here"
          placeholderTextColor="black"
        />
      </View>
      <Text style={styles.inputLabel}>DES use (mother)</Text>
      <View style={styles.inputContainer}>
        <CheckBox
          key="des Yes"
          size={20}
          textStyle={styles.checkBox}
          onPress={() => setAnswers({...answers, des: {history: true}})}
          title="Yes"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.des.history}
        />
        <CheckBox
          key="des No"
          size={20}
          textStyle={styles.checkBox}
          onPress={() => setAnswers({...answers, des: {history: false}})}
          title="No"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={!answers.des.history}
        />
      </View>
      <View>
        <TextInput
          onChangeText={(text) => setAnswers({...answers, des: {notes: text}})}
          style={styles.input}
          value={answers.des.notes}
          multiline
          placeholder="Please type here"
          placeholderTextColor="black"
        />
      </View>
      <Text style={styles.inputLabel}>Sexually Active: </Text>
      <View style={styles.inputContainer}>
        <CheckBox
          key="hivpos Yes"
          size={20}
          textStyle={styles.checkBox}
          onPress={() =>
            setAnswers({...answers, sexuallyActive: {history: true}})
          }
          title="Yes"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.sexuallyActive.history}
        />
        <CheckBox
          key="hivpos No"
          size={20}
          textStyle={styles.checkBox}
          onPress={() =>
            setAnswers({...answers, sexuallyActive: {history: false}})
          }
          title="No"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={!answers.sexuallyActive.history}
        />
      </View>
      <Text style={styles.inputLabel}>Sexually Active before 16: </Text>
      <View style={styles.inputContainer}>
        <CheckBox
          key="underage Yes"
          size={20}
          textStyle={styles.checkBox}
          onPress={() => setAnswers({...answers, underAge: {history: true}})}
          title="Yes"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.underAge.history}
        />
        <CheckBox
          key="underage No"
          size={20}
          textStyle={styles.checkBox}
          onPress={() => setAnswers({...answers, underAge: {history: false}})}
          title="No"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={!answers.underAge.history}
        />
      </View>
      <View>
        <TextInput
          onChangeText={(text) =>
            setAnswers({...answers, underAge: {notes: text}})
          }
          style={styles.input}
          value={answers.underAge.notes}
          multiline
          placeholder="Please type here"
          placeholderTextColor="black"
        />
      </View>
      <Text style={styles.inputLabel}>More than 5 sexual partners: </Text>
      <View style={styles.inputContainer}>
        <CheckBox
          key="multiple Yes"
          size={20}
          textStyle={styles.checkBox}
          onPress={() =>
            setAnswers({...answers, multiplePartners: {history: true}})
          }
          title="Yes"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.multiplePartners.history}
        />
        <CheckBox
          key="multiple No"
          size={20}
          textStyle={styles.checkBox}
          onPress={() =>
            setAnswers({...answers, multiplePartners: {history: false}})
          }
          title="No"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={!answers.multiplePartners.history}
        />
      </View>
      <View>
        <TextInput
          onChangeText={(text) =>
            setAnswers({...answers, multiplePartners: {notes: text}})
          }
          style={styles.input}
          value={answers.multiplePartners.notes}
          multiline
          placeholder="Please type here"
          placeholderTextColor="black"
        />
      </View>
      <Text style={styles.inputLabel}>Regular use of contraception: </Text>
      <View style={styles.inputContainer}>
        <CheckBox
          key="contraception Yes"
          size={20}
          textStyle={styles.checkBox}
          onPress={() =>
            setAnswers({...answers, useContraception: {history: true}})
          }
          title="Yes"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.useContraception.history}
        />
        <CheckBox
          key="contraception No"
          size={20}
          textStyle={styles.checkBox}
          onPress={() =>
            setAnswers({...answers, useContraception: {history: false}})
          }
          title="No"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={!answers.useContraception.history}
        />
      </View>
      <View>
        <TextInput
          onChangeText={(text) =>
            setAnswers({...answers, useContraception: {notes: text}})
          }
          style={styles.input}
          value={answers.useContraception.notes}
          multiline
          placeholder="Please type here"
          placeholderTextColor="black"
        />
      </View>
      <Text style={styles.inputLabel}>Birth Control use: </Text>
      <View style={styles.inputContainer}>
        <CheckBox
          key="birthControl Yes"
          size={20}
          textStyle={styles.checkBox}
          onPress={() =>
            setAnswers({...answers, useBirthControl: {history: true}})
          }
          title="Yes"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.useBirthControl.history}
        />
        <CheckBox
          key="birthControl No"
          size={20}
          textStyle={styles.checkBox}
          onPress={() =>
            setAnswers({...answers, useBirthControl: {history: false}})
          }
          title="No"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={!answers.useBirthControl.history}
        />
      </View>
      <View>
        <TextInput
          onChangeText={(text) =>
            setAnswers({...answers, useBirthControl: {notes: text}})
          }
          style={styles.input}
          value={answers.useBirthControl.notes}
          multiline
          placeholder="Please type here"
          placeholderTextColor="black"
        />
      </View>
      <Text style={styles.inputLabel}>Methods Used: </Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        <CheckBox
          key="Condoms"
          size={20}
          textStyle={styles.checkBox}
          onPress={() =>
            setAnswers({...answers, contraceptions: {condoms: true}})
          }
          title="Condoms"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.contraceptions.condoms}
        />
        <CheckBox
          key="Birth Control Pills"
          size={20}
          textStyle={styles.checkBox}
          onPress={() =>
            setAnswers({...answers, contraceptions: {thePill: true}})
          }
          title="Birth Control Pills"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.contraceptions.thePill}
        />
        <CheckBox
          key="Withdrawal"
          size={20}
          textStyle={styles.checkBox}
          onPress={() =>
            setAnswers({...answers, contraceptions: {pullOut: true}})
          }
          title="Withdrawal"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.contraceptions.pullOut}
        />
        <CheckBox
          key="Tubal Ligation"
          size={20}
          textStyle={styles.checkBox}
          onPress={() =>
            setAnswers({...answers, contraceptions: {tubesTied: true}})
          }
          title="Tubal Ligation"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.contraceptions.tubesTied}
        />
        <CheckBox
          key="Diaphragm"
          size={20}
          textStyle={styles.checkBox}
          onPress={() =>
            setAnswers({...answers, contraceptions: {diaphram: true}})
          }
          title="Diaphragm"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.contraceptions.diaphram}
        />
        <CheckBox
          key="Patch"
          size={20}
          textStyle={styles.checkBox}
          onPress={() =>
            setAnswers({...answers, contraceptions: {patch: true}})
          }
          title="Patch"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.contraceptions.patch}
        />
        <CheckBox
          key="Vaginal Film"
          size={20}
          textStyle={styles.checkBox}
          onPress={() => setAnswers({...answers, contraceptions: {film: true}})}
          title="Vaginal Film"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.contraceptions.film}
        />
        <CheckBox
          key="Other"
          size={20}
          textStyle={styles.checkBox}
          onPress={() =>
            setAnswers({...answers, contraceptions: {other: true}})
          }
          title="Other"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.contraceptions.other}
        />
      </View>
      <Text style={styles.inputLabel}>Sexually active in the last year: </Text>
      <View style={styles.inputContainer}>
        <CheckBox
          key="activeCurrent Yes"
          size={20}
          textStyle={styles.checkBox}
          onPress={() =>
            setAnswers({...answers, activeCurrent: {history: true}})
          }
          title="Yes"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.activeCurrent.history}
        />
        <CheckBox
          key="activeCurrent No"
          size={20}
          textStyle={styles.checkBox}
          onPress={() =>
            setAnswers({...answers, activeCurrent: {history: false}})
          }
          title="No"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={!answers.activeCurrent.history}
        />
      </View>
      <Text style={styles.inputLabel}>Sex since last period: </Text>
      <View style={styles.inputContainer}>
        <CheckBox
          key="currentlyActive Yes"
          size={20}
          textStyle={styles.checkBox}
          onPress={() =>
            setAnswers({...answers, currentlyActive: {history: true}})
          }
          title="Yes"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.currentlyActive.history}
        />
        <CheckBox
          key="activeCurrent No"
          size={20}
          textStyle={styles.checkBox}
          onPress={() =>
            setAnswers({...answers, currentlyActive: {history: false}})
          }
          title="No"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={!answers.currentlyActive.history}
        />
      </View>
      <View>
        <TextInput
          onChangeText={(text) =>
            setAnswers({...answers, currentlyActive: {notes: text}})
          }
          style={styles.input}
          value={answers.currentlyActive.notes}
          multiline
          placeholder="Please type here"
          placeholderTextColor="black"
        />
      </View>
      <Text style={styles.inputLabel}>Sexual partners: </Text>
      <View style={styles.inputContainer}>
        <CheckBox
          key="men"
          size={20}
          textStyle={styles.checkBox}
          onPress={() => setAnswers({...answers, sexualPartners: {men: true}})}
          title="Men"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.sexualPartners.men}
        />
        <CheckBox
          key="women"
          size={20}
          textStyle={styles.checkBox}
          onPress={() =>
            setAnswers({...answers, sexualPartners: {women: true}})
          }
          title="Women"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.sexualPartners.women}
        />
        <CheckBox
          key="other"
          size={20}
          textStyle={styles.checkBox}
          onPress={() =>
            setAnswers({...answers, sexualPartners: {other: true}})
          }
          title="Other"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checked={answers.sexualPartners.other}
        />
      </View>
      <View style={styles.dropDownContainer}>
        <Text style={styles.inputLabel}>Male Partners</Text>
        <Picker
          itemStyle={{width: 150}}
          selectedValue={answers.numberOfPartners.male.number}
          onValueChange={(itemValue) =>
            setAnswers({
              ...answers,
              numberOfPartners: {male: {number: itemValue}},
            })
          }>
          {modal.numbers.map((item) => (
            <Picker.Item label={item.value} value={item} />
          ))}
        </Picker>
        <Text style={styles.inputLabel}>Female Partners</Text>
        <Picker
          itemStyle={{width: 150}}
          selectedValue={answers.numberOfPartners.female.number}
          onValueChange={(itemValue) =>
            setAnswers({
              ...answers,
              numberOfPartners: {female: {number: itemValue}},
            })
          }>
          {modal.numbers.map((item) => (
            <Picker.Item label={item.value} value={item} />
          ))}
        </Picker>
        <Text style={styles.inputLabel}>Other Partners</Text>
        <Picker
          itemStyle={{width: 150}}
          selectedValue={answers.numberOfPartners.other.number}
          onValueChange={(itemValue) =>
            setAnswers({
              ...answers,
              numberOfPartners: {other: {number: itemValue}},
            })
          }>
          {modal.numbers.map((item) => (
            <Picker.Item label={item.value} value={item} />
          ))}
        </Picker>
      </View>
    </>
  );
};

export default GynHistory;
