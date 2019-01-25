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
      (
        state,
        { payload: { data, chartData, balance, totalVirtualCurrency } },
      ) => ({
        ...state,
        chartData,
        balance,
        totalVirtualCurrency,
        transactions: data.transactionInfoDtos,
        fail: false,
        fetchTransactionsInProgress: false,
      }),
    ],
    [
      actions.FETCH_EXCHANGE_RATE,
      state => ({
        ...state,
        fetchExchangeRateInProgress: true,
      }),
    ],
    [
      actions.FETCH_EXCHANGE_RATE_SUCCESS,
      (state, { payload: { enrgEurValue } }) => ({
        ...state,
        enrgEurValue,
        fetchExchangeRateInProgress: false,
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
