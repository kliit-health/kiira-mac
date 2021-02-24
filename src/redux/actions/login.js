import {
  LOGIN_FIREBASE_USER,
  LOGIN_FIREBASE_API_HIT_FAILURE,
  LOGIN_FIREBASE_API_HIT_SUCCESS,
  RESET_LOGIN_STATE,
} from '../types';

export const loginApi = (data, dispatch) => ({
  type: LOGIN_FIREBASE_USER,
  data,
  dispatch,
});

export const loginSuccess = () => ({
  type: LOGIN_FIREBASE_API_HIT_SUCCESS,
});

export const loginFailure = () => ({
  type: LOGIN_FIREBASE_API_HIT_FAILURE,
});

export const resetLoginState = () => ({
  type: RESET_LOGIN_STATE,
});
