// @flow

import { createAction } from 'redux-actions';

export const LOGIN = '[AUTH] Login';
export const LOGIN_SUCCESS = `${LOGIN} success`;
export const LOGIN_FAIL = `${LOGIN} fail`;
export const CLEAR_LOGIN_STATE = `${LOGIN} clear state`;

export const login = createAction(LOGIN);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFail = createAction(LOGIN_FAIL);
export const clearLoginState = createAction(CLEAR_LOGIN_STATE);
