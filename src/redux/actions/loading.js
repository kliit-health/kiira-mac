import {SET_LOADING} from '../types';

export const setLoading = (data) => {
  console.log('DATA', data);
  return {
    type: SET_LOADING,
    payload: data,
  };
};
