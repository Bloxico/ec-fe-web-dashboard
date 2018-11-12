// @flow

import { handleActions } from 'redux-actions';

import * as actions from './actions';
import initialState from './state';

export default handleActions(
  new Map([
    [
      actions.PROFILE_DATA,
      state => ({
        ...state,
        isProfileDataInProgress: true,
      }),
    ],
    [
      actions.PROFILE_DATA_SUCCESS,
      (state, { payload }) => ({
        ...state,
        data: payload.userProfile,
        regions: payload.regions,
        fail: false,
        isProfileDataInProgress: false,
      }),
    ],
    [
      actions.UPDATE_PROFILE,
      state => ({
        ...state,
        isUpdateProfileInProgress: true,
      }),
    ],
    [
      actions.UPDATE_PROFILE_SUCCESS,
      state => ({
        ...state,
        fail: false,
        isUpdateProfileInProgress: false,
      }),
    ],
    [
      actions.CLEAR_PROFILE_STATE,
      () => ({
        ...initialState,
      }),
    ],
  ]),
  { ...initialState },
);
