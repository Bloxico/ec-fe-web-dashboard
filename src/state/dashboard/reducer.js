// @flow

import { handleActions } from 'redux-actions';

import * as actions from './actions';
import initialState from './state';

export default handleActions(
  new Map([
    [
      actions.SET_PASSWORD,
      state => ({
        ...state,
        setPasswordCompleted: false,
        setPasswordInProgress: true,
      }),
    ],
    [
      actions.SET_PASSWORD_SUCCESS,
      state => ({
        ...state,
        setPasswordCompleted: true,
        setPasswordInProgress: false,
      }),
    ],
    [
      actions.SET_PASSWORD_FAIL,
      state => ({
        ...state,
        setPasswordInProgress: false,
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
      actions.FETCH_DASHBOARD_DATA,
      state => ({
        ...state,
        fetchDashboardDataInProgress: true,
      }),
    ],
    [
      actions.FETCH_DASHBOARD_DATA_SUCCESS,
      (state, { payload: { chartData, balance, totalVirtualCurrency } }) => ({
        ...state,
        chartData,
        balance,
        totalVirtualCurrency,
        fetchDashboardDataInProgress: false,
      }),
    ],
  ]),
  { ...initialState },
);
