// @flow

import { handleActions } from 'redux-actions';

import * as actions from './actions';
import initialState from './state';

export default handleActions(
  new Map([
    [
      actions.REGISTER,
      state => ({
        ...state,
        inProgress: true,
      }),
    ],
    [
      actions.FETCH_REGIONS,
      state => ({
        ...state,
        isFetchRegionsInProgress: true,
      }),
    ],
    [
      actions.FETCH_REGIONS_SUCCESS,
      (state, { payload }) => ({
        ...state,
        regions: payload.regions || {},
        isFetchRegionsInProgress: false,
      }),
    ],
    [
      actions.REGISTRATION_FAIL,
      (state, { payload }) => ({
        ...state,
        inProgress: false,
        fail: true,
        ...(payload && payload.message ? { error: payload.message } : {}),
      }),
    ],
    [
      actions.REGISTRATION_SUCCESS,
      state => ({
        ...state,
        inProgress: false,
        fail: false,
      }),
    ],
    [
      actions.CLEAR_REGISTER_STATE,
      () => ({
        ...initialState,
      }),
    ],
  ]),
  { ...initialState },
);
