// @flow

import { createAction } from 'redux-actions';

export const VERIFY = '[VERIFY]';
export const VERIFY_SUCCESS = `${VERIFY} success`;
export const VERIFY_FAIL = `${VERIFY} fail`;
export const CLEAR_VERIFY_STATE = `${VERIFY} clear state`;

export const verify = createAction(VERIFY);
export const verifySuccess = createAction(VERIFY_SUCCESS);
export const verifyFail = createAction(VERIFY_FAIL);
export const clearVerifyState = createAction(CLEAR_VERIFY_STATE);
