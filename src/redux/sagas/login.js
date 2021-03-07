import {put, takeEvery} from 'redux-saga/effects';
import {LOGIN_FIREBASE_USER} from '../types';
import {loginInWithFirebase, getDataFromTable} from '../../../utils/firebase';
import {loginFailure, loginSuccess} from '../actions/login';
import {setUserData} from '../actions/authLoading';
import {getTermsAndConditions} from '../actions/termsAndConditions';
import {getPrivacyPolicy} from '../actions/privacyPolicy';
import {setLoading} from '../actions/loading';
import {StackActions} from '@react-navigation/native';

function* loginFirebase({data}) {
  try {
    const {params, navigation} = data;
    const response = yield loginInWithFirebase(params);
    const {uid} = response;
    if (uid) {
      const obj = {
        tableName: 'users',
        uid,
      };
      const userData = yield getDataFromTable(obj);

      yield put(getTermsAndConditions());
      yield put(getPrivacyPolicy());
      if (userData && userData.role !== 'User') {
        yield put(setLoading(false));
        yield put(loginSuccess());
        yield put(setUserData(userData));
        navigation.dispatch(StackActions.replace('DashboardStack'));
      }
    } else {
      yield put(setLoading(false));
      yield put(loginFailure());
    }
  } catch (error) {
    yield put(setLoading(false));
  }
}

export default function* loginSaga() {
  yield takeEvery(LOGIN_FIREBASE_USER, loginFirebase);
}
