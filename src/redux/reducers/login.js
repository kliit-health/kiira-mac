import {
  LOGIN_FIREBASE_API_HIT_SUCCESS,
  LOGIN_FIREBASE_API_HIT_FAILURE,
  RESET_LOGIN_STATE,
} from '../../../redux/types';

const initialState = {
  loginFailure: null,
  loggedIn: false,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_FIREBASE_API_HIT_SUCCESS:
      return {
        ...state,
        loggedIn: true,
      };
    case LOGIN_FIREBASE_API_HIT_FAILURE:
      return {
        ...state,
        loginFailure: true,
      };
    case RESET_LOGIN_STATE:
      return {
        ...state,
        loginFailure: null,
        loggedIn: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default login;
