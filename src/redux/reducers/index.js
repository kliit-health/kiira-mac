import {combineReducers} from 'redux';
import authLoading from './authLoading';
import login from './login';
import navigator from './navigator';
import language from './language';

export default combineReducers({
  authLoading,
  language,
  login,
  navigator,
});
