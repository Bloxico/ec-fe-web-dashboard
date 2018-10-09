// @flow

import { delay } from 'redux-saga';
import { all, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { PORTAL_PAGE } from 'src/constants';

import * as actions from './actions';

export function* login$(): Generator<*, *, *> {
  yield delay(500);
  yield put(push(PORTAL_PAGE));
  yield put(actions.clearLoginState());
}

// $FlowIssue
export default function*() {
  yield all([takeEvery(actions.LOGIN, login$)]);
}
