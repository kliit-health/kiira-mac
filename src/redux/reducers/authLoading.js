import {
  SET_USER_DATA,
  SET_FCM_TOKEN,
  SET_APP_STATE,
  SET_APP_SCREEN,
} from '../types';

const initialState = {
  userData: null,
  fcmToken: null,
  isActive: false,
  appScreen: {
    currentScreen: '',
    prevScreen: '',
  },
};

const authLoading = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userData: action.data,
      };
    case SET_FCM_TOKEN:
      return {
        ...state,
        fcmToken: action.data,
      };
    case SET_APP_STATE:
      return {
        ...state,
        isActive: action.data,
      };
    case SET_APP_SCREEN:
      return {
        ...state,
        appScreen: action.data,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authLoading;