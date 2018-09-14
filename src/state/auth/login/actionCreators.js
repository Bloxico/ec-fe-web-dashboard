// @flow

import { createAction } from 'redux-actions';

import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, CLEAR_LOGIN_STATE } from './actions';

export const login = createAction(LOGIN);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFail = createAction(LOGIN_FAIL);
export const clearLoginState = createAction(CLEAR_LOGIN_STATE);
