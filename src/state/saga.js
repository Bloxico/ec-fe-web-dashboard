// @flow

import { all } from 'redux-saga/effects';

import authSaga from './auth/saga';
import transactionsSaga from './transactions/saga';
import editProfileSaga from './profile/saga';
import welcomeSaga from './welcome/saga';

// $FlowIssue
export default function*() {
  yield all([authSaga(), editProfileSaga(), transactionsSaga(), welcomeSaga()]);
}
