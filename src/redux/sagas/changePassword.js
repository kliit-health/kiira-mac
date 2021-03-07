import {takeEvery} from 'redux-saga/effects';
import {CHANGE_PASSWORD} from '../types';
import {changePasswordCall, reAunthenticate} from '../../utils/firebase';

function* changeUserPassword({data}) {
  try {
    const {params} = data;
    const responseReAunthenticate = yield reAunthenticate(
      params.currentPassword,
    );
    if (responseReAunthenticate.success) {
      const responseChangePassword = yield changePassword(params.newPassword);
      if (responseChangePassword.success) {
        console.log('Success chaning password');
      } else {
        console.log('Error changing password');
      }
    }
  } catch (error) {
    console.error(error);
  }
}

export default function* changePassword() {
  yield takeEvery(CHANGE_PASSWORD, changeUserPassword);
}
