import {SIGN_OUT_API_HIT} from '../types';

export const signOut = (data) => ({
  type: SIGN_OUT_API_HIT,
  data,
});
