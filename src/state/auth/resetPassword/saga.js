// @flow

import { delay } from 'redux-saga';
import { all, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { VERIFY_PAGE } from 'src/constants';

import * as actions from './actions';

export function* resetPassword$({ payload }): Generator<*, *, *> {
  // eslint-disable-next-line
  console.log(payload);
  yield delay(500);
  yield put(push(VERIFY_PAGE));
  yield put(actions.clearResetPasswordState());
}

// $FlowIssue
export default function*() {
  yield all([takeEvery(actions.RESET_PASSWORD, resetPassword$)]);
}
