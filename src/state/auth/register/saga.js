// @flow

import { delay } from 'redux-saga';
import { all, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as actions from './actions';
import { LOGIN_PAGE } from '../../../constants';

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
