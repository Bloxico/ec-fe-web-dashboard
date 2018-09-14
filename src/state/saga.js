// @flow

import { all } from 'redux-saga/effects';

import authSaga from './auth/saga';

// $FlowIssue
export default function*() {
  yield all([authSaga()]);
}
