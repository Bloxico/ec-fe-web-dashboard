// @flow

import { handleActions } from 'redux-actions';

import * as actions from './actions';
import initialState from './state';

export default handleActions(
  new Map([
    [
      actions.FETCH_TRANSACTIONS,
      state => ({
        ...state,
        isFetchTransactionsInProgress: true,
      }),
    ],
    [
      actions.FETCH_TRANSACTIONS_SUCCESS,
      (state, { payload }) => ({
        ...state,
        data: payload,
        fail: false,
        isFetchTransactionsInProgress: false,
      }),
    ],
    [
      actions.CLEAR_TRANSACTIONS_STATE,
      () => ({
        ...initialState,
      }),
    ],
  ]),
  { ...initialState },
);
