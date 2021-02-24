import {put, takeEvery, select} from 'redux-saga/effects';
import {LOGIN_FIREBASE_USER} from '../types';
import {showApiLoader, hideApiLoader} from '../actions/apiLoader';
import {loginInWithFirebase, getDataFromTable} from '../../../utils/firebase';
import {showOrHideModal} from '../../../components/customModal/action';
import {loginFailure, loginSuccess} from '../actions/login';
import {setUserData} from '../actions/authLoading';
import {getTermsAndConditions} from '../actions/termsAndConditions';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* loginFirebase({data}) {
  const lang = yield select((state) => state.language);
  try {
    const {params, navigation} = data;
    yield put(showApiLoader(lang.apiLoader.loadingText));
    const response = yield loginInWithFirebase(params);
    yield delay(500);
    yield put(hideApiLoader());
    yield delay(500);
    const {uid} = response;
    if (uid) {
      const obj = {
        tableName: 'users',
        uid,
      };
      const userData = yield getDataFromTable(obj);

      yield put(getTermsAndConditions());
      if (userData && userData.role !== 'User') {
        yield put(loginSuccess());
        yield put(setUserData(userData));
        navigation.navigate('DashboardStack');
      }
    } else {
      yield put(
        showOrHideModal(
          response.message ? response.message : lang.errorMessage.serverError,
        ),
      );
      yield put(loginFailure());
    }
  } catch (error) {
    yield put(hideApiLoader());
    yield put(showOrHideModal(lang.errorMessage.serverError));
  }
}

export default function* loginSaga() {
  yield takeEvery(LOGIN_FIREBASE_USER, loginFirebase);
}
