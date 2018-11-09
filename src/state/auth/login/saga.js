// @flow

import { all, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { PORTAL_PAGE } from 'src/constants';
import http from 'src/services/http';

import * as actions from './actions';

export function* login$({ payload }): Generator<*, *, *> {
  try {
    const response = yield http.post(
      '/oauth/token',
      { grant_type: 'password', scope: 'access-profile', ...payload },
      {
        auth: {
          username: 'clientapp',
          password: '123456',
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    yield put(push(PORTAL_PAGE));
    yield put(actions.clearLoginState());
  } catch (e) {
    console.log(e.request);
    console.log(e.config);
  }
}

// $FlowIssue
export default function*() {
  yield all([takeEvery(actions.LOGIN, login$)]);
}
