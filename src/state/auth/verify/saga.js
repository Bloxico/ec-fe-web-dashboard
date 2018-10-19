// @flow

import { delay } from 'redux-saga';
import { all, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { PORTAL_PAGE } from 'src/constants';

import * as actions from './actions';

export function* verify$({ payload }): Generator<*, *, *> {
  // eslint-disable-next-line
  console.log(payload);
  yield delay(500);
  yield put(push(PORTAL_PAGE));
  yield put(actions.clearVerifyState());
}

// $FlowIssue
export default function*() {
  yield all([takeEvery(actions.VERIFY, verify$)]);
}
