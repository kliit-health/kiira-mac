import {put, takeEvery, select} from 'redux-saga/effects';
import {showApiLoader, hideApiLoader} from '../actions/apiLoader';
import {resetLoginState} from '../actions/login';
import {showOrHideModal} from '../../../components/customModal/action';
import {SIGN_OUT_API_HIT} from '../types';
import {logout} from '../../../utils/firebase';

function* signout({data}) {
  const {navigation} = data;
  const lang = yield select((state) => state.language);
  try {
    yield put(showApiLoader(lang.apiLoader.loadingText));

    const response = yield logout();
    yield put(resetLoginState());
    if (response.success && navigation) {
      yield put(hideApiLoader());
      navigation.navigate('Login');
    }
  } catch (error) {
    console.log('error', error);
    yield put(hideApiLoader());
  }
  if (navigation) {
    navigation.navigate('Login');
  }
  yield put(showOrHideModal(lang.errorMessage.serverError));
}
export default function* signOutSaga() {
  yield takeEvery(SIGN_OUT_API_HIT, signout);
}
