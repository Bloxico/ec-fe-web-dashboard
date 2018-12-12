// @flow

import { all, takeEvery, put } from 'redux-saga/effects';

import http from 'src/services/http';
import { MODALS } from 'src/constants';

import * as actions from './actions';
import { showModal } from '../actions';

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

export function* fetchTransactions$({ payload }): Generator<*, *, *> {
  try {
    const { data } = yield http.get('transaction/myTransactions', null, {
      withAuth: true,
      cache: false,
    });
    if (payload) {
      const date = new Date();
      let balance = 0;
      let totalVirtualCurrency = 0;
      date.setMonth(date.getMonth() - payload);

      // in future most of this will be done on BE
      // filter from payload => reduce it to one object and see if there is more transactions on the same date and sum it => map that object in array for the chart
      const chartData = Object.entries(
        data.transactionDtos
          .filter(o => new Date(o.created) >= date)
          .reduce((obj, item) => {
            const newDate = new Date(item.created).toLocaleDateString();
            if (newDate in obj) {
              obj[newDate] += item.envAmount * 250;
            } else {
              obj[newDate] = item.envAmount * 250;
            }
            return obj;
          }, {}),
      ).map(([date, CO2Prevented]) => {
        const r = {};
        r.date = date;
        r['CO2 prevented'] = CO2Prevented;
        return r;
      });

      // collect ENRG and BB balance
      data.transactionDtos.forEach(e => {
        balance += e.enrgAmount;
        totalVirtualCurrency += e.virtualCurrencyAmount;
      });

      yield put(
        actions.fetchTransactionsSuccess({
          data,
          chartData,
          balance,
          totalVirtualCurrency,
        }),
      );
    } else {
      yield put(actions.fetchTransactionsSuccess({ data }));
    }
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
  yield all([takeEvery(actions.FETCH_TRANSACTIONS, fetchTransactions$)]);
  yield all([takeEvery(actions.FETCH_EXCHANGE_RATE, fetchExchangeRate$)]);
}
