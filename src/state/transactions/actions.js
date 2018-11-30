// @flow

import { createAction } from 'redux-actions';

export const FETCH_TRANSACTIONS = '[TRANSACTIONS] Fetch';
export const FETCH_TRANSACTIONS_SUCCESS = `${FETCH_TRANSACTIONS} success`;
export const FETCH_TRANSACTIONS_FAIL = `${FETCH_TRANSACTIONS} fail`;
export const CLEAR_TRANSACTIONS_STATE = `${FETCH_TRANSACTIONS} clear`;

export const FETCH_EXCHANGE_RATE = '[EXCHANGE_RATE] Fetch';
export const FETCH_EXCHANGE_RATE_SUCCESS = `${FETCH_EXCHANGE_RATE} success`;
export const FETCH_EXCHANGE_RATE_FAIL = `${FETCH_EXCHANGE_RATE} fail`;
export const CLEAR_EXCHANGE_RATE_STATE = `${FETCH_EXCHANGE_RATE} clear`;

export const fetchTransactions = createAction(FETCH_TRANSACTIONS);
export const fetchTransactionsSuccess = createAction(
  FETCH_TRANSACTIONS_SUCCESS,
);
export const fetchTransactionsFail = createAction(FETCH_TRANSACTIONS_FAIL);
export const clearTransactionState = createAction(CLEAR_TRANSACTIONS_STATE);

export const fetchExchangeRate = createAction(FETCH_EXCHANGE_RATE);
export const fetchExchangeRateSuccess = createAction(
  FETCH_EXCHANGE_RATE_SUCCESS,
);
export const fetchExchangeRateFail = createAction(FETCH_EXCHANGE_RATE_FAIL);
export const clearExchangeRateState = createAction(CLEAR_EXCHANGE_RATE_STATE);
