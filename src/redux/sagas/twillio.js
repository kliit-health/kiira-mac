import {
  GET_CALL_TOKEN,
  SET_CALL_CONFIG,
  GET_EXPERT_CALL_TOKEN,
  SET_EXPERT_CALL_CONFIG,
} from '../types';
import {put, takeEvery} from 'redux-saga/effects';
import {authorizeVideo} from '../../utils/firebase';

function* getToken({data: {navigation, uid}}) {
  try {
    const response = yield authorizeVideo(uid);
    yield put({
      type: SET_CALL_CONFIG,
      data: response.data,
    });
    navigation.navigate('TwillioCalling');
  } catch (error) {
    console.log(error);
    // navigation.navigate('TwillioLogin');
  }
}

function* getExpertToken({data: {navigation, euid}}) {
  try {
    const response = yield authorizeVideo(euid);
    yield put({
      type: SET_EXPERT_CALL_CONFIG,
      data: response.data,
    });
    navigation.navigate('ExpertTwillioCalling');
  } catch (error) {
    console.log(error);
    navigation.navigate('ExpertTwillioLogin');
  }
}

export default function* () {
  yield takeEvery(GET_CALL_TOKEN, getToken);
  yield takeEvery(GET_EXPERT_CALL_TOKEN, getExpertToken);
}
