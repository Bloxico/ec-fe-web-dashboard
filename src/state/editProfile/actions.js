// @flow

import { createAction } from 'redux-actions';

export const PROFILE_DATA = '[PROFILE_DATA]';
export const PROFILE_DATA_SUCCESS = `${PROFILE_DATA} success`;
export const PROFILE_DATA_FAIL = `${PROFILE_DATA} fail`;
export const UPDATE_PROFILE = `[UPDATE_PROFILE]`;
export const UPDATE_PROFILE_SUCCESS = `${UPDATE_PROFILE} success`;
export const UPDATE_PROFILE_FAIL = `${UPDATE_PROFILE} fail`;
export const CLEAR_PROFILE_STATE = `${UPDATE_PROFILE} clear state`;

export const profileData = createAction(PROFILE_DATA);
export const profileDataSuccess = createAction(PROFILE_DATA_SUCCESS);
export const profileDataFail = createAction(PROFILE_DATA_FAIL);
export const updateProfile = createAction(UPDATE_PROFILE);
export const updateProfileSuccess = createAction(UPDATE_PROFILE_SUCCESS);
export const updateProfileFail = createAction(UPDATE_PROFILE_FAIL);
export const clearProfileState = createAction(CLEAR_PROFILE_STATE);
