import {FETCH_EXPERT_APPOINTMENTS} from '../types';

const initialState = {
  history: [],
};

const appointments = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXPERT_APPOINTMENTS:
      return {
        ...state,
        history: [...action.data],
      };
    default:
      return {
        ...state,
      };
  }
};

export default appointments;
