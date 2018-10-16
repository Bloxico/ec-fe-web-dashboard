// @flow

import { combineReducers } from 'redux';

import login from './login/reducer';
import register from './register/reducer';

export default combineReducers({
  login,
  register,
});
