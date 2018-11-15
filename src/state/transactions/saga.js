// @flow

import { all, takeEvery, put } from 'redux-saga/effects';

import http from 'src/services/http';

import * as actions from './actions';
import { MODALS } from '../../constants';
import { showModal } from '../actions';

export function* fetchTransactions$(): Generator<*, *, *> {
  try {
    const { data } = yield http.get('transaction/myTransactions', null, {
      withAuth: true,
    });
    yield put(actions.fetchTransactionsSuccess(data));
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
}
