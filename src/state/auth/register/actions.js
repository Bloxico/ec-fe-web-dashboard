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

export const FETCH_REGIONS = '[REGIONS] Fetch';
export const FETCH_REGIONS_SUCCESS = `${FETCH_REGIONS} success`;

export const fetchRegions = createAction(FETCH_REGIONS);
export const fetchRegionsSuccess = createAction(FETCH_REGIONS_SUCCESS);
