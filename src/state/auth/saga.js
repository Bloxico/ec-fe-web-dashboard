// @flow

import { all } from 'redux-saga/effects';

import loginSaga from './login/saga';
import registerSaga from './register/saga';

// $FlowIssue
export default function*() {
  yield all([registerSaga(), loginSaga()]);
}
