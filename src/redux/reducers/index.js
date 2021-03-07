import {combineReducers} from 'redux';

import appointments from './appointments';
import authLoading from './authLoading';
import chat from './chat';
import login from './login';
import loading from './loading';
import navigator from './navigator';
import language from './language';
import termsAndConditions from './termsAndConditions';
import privacyPolicy from './privacyPolicy';
import askExpert from './askExpert';
import questions from './questions';
import user from './user';
import patientProfile from './patientProfile';
import medicalHistory from './medicalHistory';
import patients from './patients';
import visit from './visit';
import twillio from './twillio';

export default combineReducers({
  appointments,
  authLoading,
  askExpert,
  chat,
  language,
  login,
  loading,
  navigator,
  termsAndConditions,
  privacyPolicy,
  questions,
  user,
  patientProfile,
  medicalHistory,
  patients,
  visit,
  twillio,
});
