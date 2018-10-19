// @flow

import { handleActions } from 'redux-actions';

import * as actions from './actions';
import initialState from './state';

export default handleActions(
  new Map([
    [
      actions.RESET_PASSWORD,
      state => ({
        ...state,
        inProgress: true,
      }),
    ],
    [
      actions.RESET_PASSWORD_FAIL,
      (state, { payload }) => ({
        ...state,
        inProgress: false,
        fail: true,
        ...(payload && payload.message ? { error: payload.message } : {}),
      }),
    ],
    [
      actions.RESET_PASSWORD_SUCCESS,
      state => ({
        ...state,
        inProgress: false,
        fail: false,
      }),
    ],
    [
      actions.CLEAR_RESET_PASSWORD_STATE,
      () => ({
        ...initialState,
      }),
    ],
  ]),
  { ...initialState },
);
