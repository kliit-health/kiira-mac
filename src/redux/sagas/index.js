import {all} from 'redux-saga/effects';

import appointments from './appointments';
import askExpert from './askExpert';
import login from './login';
import signOut from './signOut';
import terms from './termsAndConditions';
import privacyPolicy from './privacyPolicy';
import availability from './availability';
import profile from './profile';
import changePassword from './changePassword';
import questions from './questions';
import user from './user';
import paitentProfile from './patientProfile';
import patients from './patients';
import twillio from './twillio';

export default function* rootSaga() {
  yield all([
    appointments(),
    askExpert(),
    login(),
    signOut(),
    terms(),
    privacyPolicy(),
    availability(),
    profile(),
    changePassword(),
    questions(),
    user(),
    paitentProfile(),
    patients(),
    twillio(),
  ]);
}
