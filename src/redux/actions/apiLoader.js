import {SHOW_API_LOADER, HIDE_API_LOADER} from '../types';

export const showApiLoader = (data) => ({
  type: SHOW_API_LOADER,
  data,
});

export const hideApiLoader = (data) => ({
  type: HIDE_API_LOADER,
  data,
});
