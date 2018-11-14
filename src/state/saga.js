// @flow

import { all } from 'redux-saga/effects';

import authSaga from './auth/saga';
import editProfileSaga from './profile/saga';

// $FlowIssue
export default function*() {
  yield all([authSaga(), editProfileSaga()]);
}
