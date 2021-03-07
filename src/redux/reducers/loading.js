import {SET_LOADING} from '../../../redux/types';

const initialState = {
  isLoading: false,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      console.log(action.type);
      console.log('PAYLOAD', action.payload);
      return {
        ...state,
        loading: action.payload,
      };
    default:
      console.log(action.type);
      return {
        ...state,
      };
  }
};

export default login;
