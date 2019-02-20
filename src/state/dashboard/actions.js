// @flow

import { createAction } from 'redux-actions';

export const SET_PASSWORD = '[SET_PASSWORD]';
export const SET_PASSWORD_SUCCESS = `${SET_PASSWORD} success`;
export const SET_PASSWORD_FAIL = `${SET_PASSWORD} fail`;

export const FETCH_EXCHANGE_RATE = '[EXCHANGE_RATE] Fetch';
export const FETCH_EXCHANGE_RATE_SUCCESS = `${FETCH_EXCHANGE_RATE} success`;
export const FETCH_EXCHANGE_RATE_FAIL = `${FETCH_EXCHANGE_RATE} fail`;

export const FETCH_DASHBOARD_DATA = '[DASHBOARD_DATA] Fetch';
export const FETCH_DASHBOARD_DATA_SUCCESS = `${FETCH_DASHBOARD_DATA} success`;
export const FETCH_DASHBOARD_DATA_FAIL = `${FETCH_DASHBOARD_DATA} fail`;

export const setPassword = createAction(SET_PASSWORD);
export const setPasswordSuccess = createAction(SET_PASSWORD_SUCCESS);
export const setPasswordFail = createAction(SET_PASSWORD_FAIL);

export const fetchExchangeRate = createAction(FETCH_EXCHANGE_RATE);
export const fetchExchangeRateSuccess = createAction(
  FETCH_EXCHANGE_RATE_SUCCESS,
);
export const fetchExchangeRateFail = createAction(FETCH_EXCHANGE_RATE_FAIL);

export const fetchDashboardData = createAction(FETCH_DASHBOARD_DATA);
export const fetchDashboardDataSuccess = createAction(
  FETCH_DASHBOARD_DATA_SUCCESS,
);
export const fetchDashboardDataFail = createAction(FETCH_DASHBOARD_DATA_FAIL);
