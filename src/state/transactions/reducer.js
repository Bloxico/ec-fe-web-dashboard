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
        fetchTransactionsInProgress: true,
      }),
    ],
    [
      actions.FETCH_TRANSACTIONS_SUCCESS,
      (state, { payload }) => ({
        ...state,
        transactions: payload.transactionDtos,
        fail: false,
        fetchTransactionsInProgress: false,
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
