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
      const chartData = data.transactionDtos
        .filter(o => new Date(o.created) >= date)
        .reduce((obj, item) => {
          const newDate = new Date(item.created).toLocaleDateString();
          if (newDate in obj) {
            obj[newDate] += item.envAmount * 250;
          } else {
            obj[newDate] = item.envAmount * 250;
          }
          return obj;
        }, {});

      data.transactionDtos.forEach(e => {
        balance += e.enrgAmount;
        totalVirtualCurrency += e.virtualCurrencyAmmount;
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
