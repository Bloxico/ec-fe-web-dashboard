// @flow

import { delay } from 'redux-saga';
import { all, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { LOGIN_PAGE } from 'src/constants';

import * as actions from './actions';

export function* register$({ payload }): Generator<*, *, *> {
  // eslint-disable-next-line
  console.log(payload);
  yield delay(500);
  yield put(push(LOGIN_PAGE));

  yield put(actions.clearRegisterState());
}

// $FlowIssue
export default function*() {
  yield all([takeEvery(actions.REGISTER, register$)]);
}
