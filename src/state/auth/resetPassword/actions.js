// @flow

import { createAction } from 'redux-actions';

export const RESET_PASSWORD = '[RESET_PASSWORD]';
export const RESET_PASSWORD_SUCCESS = `${RESET_PASSWORD} success`;
export const RESET_PASSWORD_FAIL = `${RESET_PASSWORD} fail`;
export const CLEAR_RESET_PASSWORD_STATE = `${RESET_PASSWORD} clear state`;

export const resetPassword = createAction(RESET_PASSWORD);
export const resetPasswordSuccess = createAction(RESET_PASSWORD_SUCCESS);
export const resetPasswordFail = createAction(RESET_PASSWORD_FAIL);
export const clearResetPasswordState = createAction(CLEAR_RESET_PASSWORD_STATE);
