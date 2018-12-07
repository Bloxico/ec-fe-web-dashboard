// @flow

import { combineReducers } from 'redux';

import login from './login/reducer';
import register from './register/reducer';
import resetPassword from './resetPassword/reducer';
import verify from './verify/reducer';

export default combineReducers({
  login,
  register,
  resetPassword,
  verify,
});
