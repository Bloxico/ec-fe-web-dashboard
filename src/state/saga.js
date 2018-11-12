// @flow

import { all } from 'redux-saga/effects';

import authSaga from './auth/saga';
import userProfileSaga from './userProfile/saga';

// $FlowIssue
export default function*() {
  yield all([authSaga(), userProfileSaga()]);
}
