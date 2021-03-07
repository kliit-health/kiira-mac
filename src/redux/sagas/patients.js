import {
  GET_PATIENTS_LIST,
  FETCH_PAITENT_APPOINTMENTS,
  PAITENT_CANCEL_APPOINTMENT,
} from '../types';
import {put, takeEvery} from 'redux-saga/effects';
import {
  getAppointmentsAsync,
  cancelAppointmentAsync,
  updateCredits,
} from '../../utils/firebase';

function getUserAppointments(data) {
  let users = Object.values(data);
  let allApponitments = users.reduce((acc, item) => {
    if (Object.values(item).length) return [...acc, ...Object.values(item)];
  }, []);

  return allApponitments;
}

function* getExpertPatients({data}) {
  try {
    const appointments = yield getAppointmentsAsync(data.uid);
    const allApponitments = yield getUserAppointments(appointments);
    yield put({
      type: FETCH_PAITENT_APPOINTMENTS,
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
      console.log('EXPERT CANCEL UNSUCCESSFUL');
    } else {
      console.log('EXPERT CANCEL SUCCESSFUL');
      yield updateCredits(1, data);
    }
    yield put({type: FETCH_PAITENT_APPOINTMENTS, data: allApponitments});
  } catch (error) {
    console.error(error);
  }
}

export default function* expertPatientsSaga() {
  yield takeEvery(GET_PATIENTS_LIST, getExpertPatients);
  yield takeEvery(PAITENT_CANCEL_APPOINTMENT, cancelAppointment);
}
