import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Container from '../../../components/container';
import TextButton from '../../../components/textButton';
import Spacer from '../../../components/spacer';
import {
  getActiveQuestions,
  getResolvedQuestions,
} from '../../../redux/actions/askExpert';
import {getUser} from '../../../redux/actions';
import {ActiveQuestions, ResolvedQuestions} from './components';
import ExpertHeader from '../../../components/expertHeader';
import Section from '../../../components/section';
import Conditional from '../../../components/conditional';
import Chat from './chat';
import styles, {modifiers} from './styles';
import log from '../../../utils/functions/logger';

const AskExpert = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(true);
  const [searching, setSearching] = useState(false);
  const [value, setValue] = useState('');
  const [question, setQuestion] = useState(false);

  const lang = useSelector((state) => state.language);
  const expertDetails = useSelector((state) => state.authLoading.userData);
  const activeQuestions = useSelector((state) => state.askExpert.active);
  const resolvedQuestions = useSelector((state) => state.askExpert.resolved);
  const activeSearchResult = useSelector(
    (state) => state.askExpert.activeSearch,
  );
  const resolvedSearchResult = useSelector(
    (state) => state.askExpert.resolvedSearch,
  );

  useEffect(() => {
    dispatch(
      getActiveQuestions({
        uid: expertDetails.uid,
      }),
    );
  }, []);

  useEffect(() => {
    dispatch(
      getResolvedQuestions({
        uid: expertDetails.uid,
      }),
    );
  }, []);

  const toggleActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const getCurrentQuestionData = (data) => {
    setQuestion(data);
  };

  return (
    <Container>
      <Section>
        <View style={styles.container}>
          <View style={styles.header}>
            <ExpertHeader title="Chat" />
            <View style={styles.buttonsContainer}>
              <TextButton
                styles={modifiers.button}
                disabled={active}
                activeOpacity={1}
                onPress={toggleActive}>
                {lang.expertChats.active}
              </TextButton>
              <TextButton
                outlined
                styles={modifiers.button}
                disabled={!active}
                activeOpacity={1}
                onPress={toggleActive}>
                {lang.expertChats.resolved}
              </TextButton>
            </View>
          </View>
          <ActiveQuestions
            visible={active}
            data={searching ? activeSearchResult : activeQuestions}
          />
          <ResolvedQuestions
            visible={!active}
            handleQuestionClick={getCurrentQuestionData}
            data={searching ? resolvedSearchResult : resolvedQuestions}
          />
        </View>
      </Section>
      <Spacer />
      <Section>
        <View style={styles.container}>
          <Conditional if={question.userInfo}>
            <Chat questionData={question} />
          </Conditional>
        </View>
      </Section>
    </Container>
  );
};

export default AskExpert;
