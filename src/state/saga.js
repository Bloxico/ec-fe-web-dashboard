// @flow

import { all } from 'redux-saga/effects';

import authSaga from './auth/saga';
import editProfileSaga from './editProfile/saga';
import transactionsSaga from './transactions/saga';

// $FlowIssue
export default function*() {
  yield all([authSaga(), editProfileSaga(), transactionsSaga()]);
}
