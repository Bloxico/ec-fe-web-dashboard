// @flow

import { createAction } from 'redux-actions';

export const FETCH_TRANSACTIONS = '[TRANSACTIONS] Fetch';
export const FETCH_TRANSACTIONS_SUCCESS = `${FETCH_TRANSACTIONS} success`;
export const FETCH_TRANSACTIONS_FAIL = `${FETCH_TRANSACTIONS} fail`;
export const CLEAR_TRANSACTIONS_STATE = `${FETCH_TRANSACTIONS} clear`;

export const fetchTransactions = createAction(FETCH_TRANSACTIONS);
export const fetchTransactionsSuccess = createAction(
  FETCH_TRANSACTIONS_SUCCESS,
);
export const fetchTransactionsFail = createAction(FETCH_TRANSACTIONS_FAIL);
export const clearTransactionState = createAction(CLEAR_TRANSACTIONS_STATE);
