import {all} from 'redux-saga/effects';

import login from './login';
import signOut from './signOut';

export default function* rootSaga() {
  yield all([login(), signOut()]);
}
