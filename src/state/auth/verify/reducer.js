// @flow

import { handleActions } from 'redux-actions';

import * as actions from './actions';
import initialState from './state';

export default handleActions(
  new Map([
    [
      actions.VERIFY,
      state => ({
        ...state,
        inProgress: true,
      }),
    ],
    [
      actions.VERIFY_FAIL,
      (state, { payload }) => ({
        ...state,
        inProgress: false,
        fail: true,
        ...(payload && payload.message ? { error: payload.message } : {}),
      }),
    ],
    [
      actions.VERIFY_SUCCESS,
      state => ({
        ...state,
        inProgress: false,
        fail: false,
      }),
    ],
    [
      actions.CLEAR_VERIFY_STATE,
      () => ({
        ...initialState,
      }),
    ],
  ]),
  { ...initialState },
);
