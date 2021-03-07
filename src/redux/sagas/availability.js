import {put, takeEvery} from 'redux-saga/effects';
import {addUserData, getDataFromTable} from '../../utils/firebase';
import app from 'firebase/app';
import {setUserData} from '../actions/authLoading';
import {UPDATE_EXPERT_HOURS_DATA} from '../types';

let firebase = {
  auth: app.auth,
};

function* updateExpertData({data}) {
  try {
    const {userParams} = data;
    const user = firebase.auth().currentUser;
    const userRegistrationParams = {
      uid: user.uid,
      role: 'Expert',
      clinicInfo: {
        ...userParams.clinicInfo,
        hours: userParams.hours,
      },
      profileInfo: {
        ...userParams.userData.profileInfo,
      },
    };

    const response = yield addUserData(userRegistrationParams);

    if (response.success) {
      const obj = {
        tableName: 'users',
        uid: user.uid,
      };
      const userData = yield getDataFromTable(obj);
      yield put(setUserData(userData));
    } else {
      console.error('Error Updating Availability');
    }
  } catch (error) {
    console.error(error);
  }
}

export default function* updateExpertSaga() {
  yield takeEvery(UPDATE_EXPERT_HOURS_DATA, updateExpertData);
}
