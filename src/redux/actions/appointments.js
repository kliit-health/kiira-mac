import {
  GET_EXPERT_APPOINTMENTS,
  EXPERT_CANCEL_APPOINTMENT,
  GET_EXPERTS_DETAIL_DATA_SUCCESS,
  GET_EXPERTS_DETAIL_DATA,
  CLEAR_EXPERT_PROFILE_STATE,
  SET_VISIT,
} from '../types';

export const getAppointmentsList = (data) => ({
  type: GET_EXPERT_APPOINTMENTS,
  data,
});

export const cancelAppointment = (data) => ({
  type: EXPERT_CANCEL_APPOINTMENT,
  data,
});

export const getExpertsData = (data) => ({
  type: GET_EXPERTS_DETAIL_DATA,
  data,
});

export const getExpertsDataSuccess = (data) => ({
  type: GET_EXPERTS_DETAIL_DATA_SUCCESS,
  data,
});

export const clearExpertProfileState = (data) => ({
  type: CLEAR_EXPERT_PROFILE_STATE,
  data,
});

export const setVisit = (data) => ({
  type: SET_VISIT,
  data,
});
