import {CHANGE_PASSWORD} from '../types';

export const changePassword = (data) => ({
  type: CHANGE_PASSWORD,
  data,
});
