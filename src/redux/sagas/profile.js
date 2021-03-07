import {UPDATE_EXPERT_DETAIL_DATA} from '../types';
import {put, takeEvery} from 'redux-saga/effects';
import {addUserData, getDataFromTable} from '../../utils/firebase';
import app from 'firebase/app';
import {setUserData} from '../actions/authLoading';

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
        name: userParams.location,
        license: userParams.license,
      },
      profileInfo: {
        bio: userParams.bio,
        city: userParams.city,
        dob: userParams.dob,
        email: userParams.email,
        firstName: userParams.firstName,
        gender: userParams.gender,
        languages: userParams.languages,
        lastName: userParams.lastName,
        license: userParams.license,
        profession: userParams.profession,
        profileImageUrl: userParams.profileImageUrl || '',
        pronouns: userParams.pronouns,
        state: userParams.state,
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
      console.error('Error updating profile.');
    }
  } catch (error) {
    console.error(error);
  }
}
export default function* settingExpertSaga() {
  yield takeEvery(UPDATE_EXPERT_DETAIL_DATA, updateExpertData);
}
