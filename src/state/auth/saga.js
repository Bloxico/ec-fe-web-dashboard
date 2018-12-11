// @flow

import { all } from 'redux-saga/effects';

import loginSaga from './login/saga';
import registerSaga from './register/saga';
import resetPasswordSaga from './resetPassword/saga';
import verifySaga from './verify/saga';

// $FlowIssue
export default function*() {
  yield all([registerSaga(), loginSaga(), resetPasswordSaga(), verifySaga()]);
}
