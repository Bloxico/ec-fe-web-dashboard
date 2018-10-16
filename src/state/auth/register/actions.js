// @flow

import { createAction } from 'redux-actions';

export const REGISTER = '[REGISTER]';
export const REGISTRATION_SUCCESS = `${REGISTER} success`;
export const REGISTRATION_FAIL = `${REGISTER} fail`;
export const CLEAR_REGISTER_STATE = `${REGISTER} clear state`;

export const register = createAction(REGISTER);
export const registrationSuccess = createAction(REGISTRATION_SUCCESS);
export const registrationFail = createAction(REGISTRATION_FAIL);
export const clearRegisterState = createAction(CLEAR_REGISTER_STATE);
