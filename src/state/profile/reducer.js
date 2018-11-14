// @flow

import { handleActions } from 'redux-actions';

import * as actions from './actions';
import initialState from './state';

export default handleActions(
  new Map([
    [
      actions.FETCH_PROFILE_DATA,
      state => ({
        ...state,
        fetchProfileDataInProgress: true,
      }),
    ],
    [
      actions.FETCH_PROFILE_DATA_SUCCESS,
      (state, { payload }) => ({
        ...state,
        data: payload.userProfile,
        regions: payload.regions,
        fetchProfileDataInProgress: false,
      }),
    ],
    [
      actions.UPDATE_PROFILE,
      state => ({
        ...state,
        updateProfileInProgress: true,
      }),
    ],
    [
      actions.UPDATE_PROFILE_SUCCESS,
      state => ({
        ...state,
        updateProfileInProgress: false,
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
