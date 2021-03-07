import {
  GET_EXPERT_APPOINTMENTS,
  GET_EXPERTS_DETAIL_DATA,
  FETCH_EXPERT_APPOINTMENTS,
  EXPERT_CANCEL_APPOINTMENT,
} from '../types';
import {getExpertsDataSuccess} from '../actions/appointments';
import {put, takeEvery} from 'redux-saga/effects';
import {
  getAppointmentsAsync,
  cancelAppointmentAsync,
  updateCredits,
  getDataFromTable,
} from '../../utils/firebase';

function getUserAppointments(data) {
  let users = Object.values(data);
  let allApponitments = users.reduce((acc, item) => {
    if (Object.values(item).length) return [...acc, ...Object.values(item)];
  }, []);

  return allApponitments;
}

function* getAppointments({data}) {
  try {
    const appointments = yield getAppointmentsAsync(data.uid);
    const allApponitments = yield getUserAppointments(appointments);
    yield put({
      type: FETCH_EXPERT_APPOINTMENTS,
      data: allApponitments,
    });
  } catch (error) {
    console.error(error);
  }
}

function* cancelAppointment(data) {
  const {
    data: {expert},
  } = data;

  try {
    const result = yield cancelAppointmentAsync(data);
    const appointments = yield getAppointmentsAsync(expert.uid);
    const allApponitments = yield getUserAppointments(appointments);

    if (result) {
      console.log('EXPERT CANCEL FAILURE');
    } else {
      console.log('EXPERT CANCEL SUCCESSFUL');
      yield updateCredits(1, data);
    }

    yield put({type: FETCH_EXPERT_APPOINTMENTS, data: allApponitments});
  } catch (error) {
    console.error(error);
  }
}

function* getExperts({data}) {
  try {
    const {expertsParams} = data;
    const response = yield getDataFromTable(expertsParams);
    if (response) {
      yield put(getExpertsDataSuccess(response));
    }
  } catch (error) {
    console.error(error);
  }
}

export default function* appointments() {
  yield takeEvery(GET_EXPERT_APPOINTMENTS, getAppointments);
  yield takeEvery(EXPERT_CANCEL_APPOINTMENT, cancelAppointment);
  yield takeEvery(GET_EXPERTS_DETAIL_DATA, getExperts);
}
