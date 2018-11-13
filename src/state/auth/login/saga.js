// @flow

import { all, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import http from 'src/services/http';
import Cookie from 'src/services/cookie';
import { AUTH_COOKIE, PORTAL_PAGE } from 'src/constants';

import * as actions from './actions';

export function* login$({ payload }): Generator<*, *, *> {

  const params = { grant_type: 'password', scope: 'access-profile', ...payload };
  try {
    const { data } = yield http.post(
      'oauth/token',
      Object.keys(params).map(key => key + '=' + params[key]).join('&'),
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

    // const data = {
    //     "access_token": "7078e5ce-38f1-44c1-b78f-d22757c510ae",
    //     "token_type": "bea  rer",
    //     "refresh_token": "ffdec8e8-8e60-4945-adbd-1f2fb606630a",
    //     "expires_in": 2363,
    //     "scope": "access-profile"
    //   };

    Cookie.setJSON(AUTH_COOKIE, {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
    });

    yield put(push(PORTAL_PAGE));
    yield put(actions.clearLoginState());
  } catch (e) {
    yield put(actions.loginFail());
  }
}

// $FlowIssue
export default function*() {
  yield all([takeEvery(actions.LOGIN, login$)]);
}
