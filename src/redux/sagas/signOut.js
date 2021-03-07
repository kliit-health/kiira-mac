import {put, takeEvery} from 'redux-saga/effects';
import {resetLoginState} from '../actions/login';
import {SIGN_OUT_API_HIT} from '../types';
import {StackActions} from '@react-navigation/native';
import {logout} from '../../../utils/firebase';

function* signout({data}) {
  const {navigation} = data;
  try {
    const response = yield logout();
    yield put(resetLoginState());
    if (response.success && navigation) {
      navigation.dispatch(StackActions.replace('AuthStack'));
    }
  } catch (error) {
    console.log('error', error);
  }
  if (navigation) {
    navigation.dispatch(StackActions.replace('AuthStack'));
  }
}
export default function* signOutSaga() {
  yield takeEvery(SIGN_OUT_API_HIT, signout);
}
