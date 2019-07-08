// @flow

import { all, takeEvery, put } from 'redux-saga/effects';

import http from 'src/services/http';
import { MODALS, CO2_PREVENTED } from 'src/constants';
import { showModal } from 'src/state/actions';

import * as actions from './actions';

export function* setPassword$({ payload: { password } }): Generator<*, *, *> {
  try {
    yield http.post('user/passwordSet', { password }, { withAuth: true });
    yield put(actions.setPasswordSuccess());
  } catch ({ response: { data } }) {
    yield put(actions.setPasswordFail());
    yield put(
      showModal({
        modalName: MODALS.ErrorMessage,
        align: 'center',
        data: {
          content: data.errorCode,
        },
      }),
    );
  }
}

export function* fetchExchangeRate$(): Generator<*, *, *> {
  try {
    const { data } = yield http.get('transaction/exchangeRate', null, {
      withAuth: true,
      cache: false,
    });
    const {
      exchangeRateDto: {
        enrgExchangeRateDto: { enrgBtcValue, btcEurValue },
      },
    } = data;
    const enrgEurValue = enrgBtcValue * btcEurValue || undefined;
    yield put(actions.fetchExchangeRateSuccess({ enrgEurValue }));
  } catch ({ response }) {
    // no error handle needed
  }
}

export function* fetchDashboardData$({ payload }): Generator<*, *, *> {
  try {
    const { data } = yield http.get('transaction/myTransactions', null, {
      withAuth: true,
      cache: false,
    });
    const date = new Date();
    const balance = data.enrgBalance || 0;
    const totalVirtualCurrency = data.virtualValuesSum || {};
    date.setMonth(date.getMonth() - payload);

    // in future most of this will be done on BE
    // filter from payload => reduce it to one object and see if there is more transactions on the same date and sum it => map that object in array for the chart
    const chartData = Object.entries(
      data.transactionInfoDtos
        .filter(o => new Date(o.created) >= date)
        .reverse()
        .reduce((obj, item) => {
          const newDate = new Date(item.created).toLocaleDateString();
          if (newDate in obj) {
            obj[newDate] += item.envAmount * CO2_PREVENTED;
          } else {
            obj[newDate] = item.envAmount * CO2_PREVENTED;
          }
          return obj;
        }, {}),
    ).map(([date, CO2Prevented]) => {
      const r = {};
      r.date = date;
      r['CO2 prevented'] = CO2Prevented;
      return r;
    });

    yield put(
      actions.fetchDashboardDataSuccess({
        chartData,
        balance,
        totalVirtualCurrency,
      }),
    );
  } catch ({ response: { data } }) {
    yield put(
      showModal({
        modalName: MODALS.ErrorMessage,
        align: 'center',
        data: {
          content: data.errorCode,
        },
      }),
    );
  }
}

// $FlowIssue
export default function*() {
  yield all([takeEvery(actions.SET_PASSWORD, setPassword$)]);
  yield all([takeEvery(actions.FETCH_EXCHANGE_RATE, fetchExchangeRate$)]);
  yield all([takeEvery(actions.FETCH_DASHBOARD_DATA, fetchDashboardData$)]);
}
