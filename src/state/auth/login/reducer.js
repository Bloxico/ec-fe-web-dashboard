// @flow

import { handleActions } from 'redux-actions';

import * as actions from './actions';
import initialState from './state';

export default handleActions(
  new Map([
    [
      actions.LOGIN,
      state => ({
        ...state,
        inProgress: true,
      }),
    ],
    [
      actions.LOGIN_FAIL,
      (state, { payload }) => ({
        ...state,
        inProgress: false,
        fail: true,
        ...(payload && payload.message ? { error: payload.message } : {}),
      }),
    ],
    [
      actions.CLEAR_LOGIN_STATE,
      () => ({
        ...initialState,
      }),
    ],
  ]),
  { ...initialState },
);
