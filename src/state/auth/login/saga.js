// @flow

import { all, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import http from 'src/services/http';
import Cookie from 'src/services/cookie';
import {
  AUTH_COOKIE,
  PORTAL_PAGE,
  CLIENT_ID,
  CLIENT_PASS,
  MODALS,
  VERIFY_PAGE,
  ERROR_CODES,
} from 'src/constants';
import { showModal } from 'src/state/actions';

import * as actions from './actions';

export function* login$({ payload }): Generator<*, *, *> {
  const params = {
    grant_type: 'password',
    scope: 'access-profile',
    ...payload,
  };

  try {
    const { data } = yield http.post(
      'oauth/token',
      Object.keys(params)
        .map(key => `${key}=${encodeURIComponent(params[key])}`)
        .join('&'),
      {
        auth: {
          username: `${CLIENT_ID}`,
          password: `${CLIENT_PASS}`,
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    Cookie.setJSON(AUTH_COOKIE, {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
    });

    yield put(push(PORTAL_PAGE));
    yield put(actions.clearLoginState());
  } catch ({ response: { data } }) {
    let redirectPath = '';

    if (data.error_description === ERROR_CODES.USER_NOT_VERIFIED) {
      redirectPath = `${VERIFY_PAGE}/${payload.username}`;
    }

    yield put(
      showModal({
        modalName: MODALS.ErrorMessage,
        align: 'center',
        data: {
          content: data.error_description,
          redirectPath,
        },
      }),
    );
    yield put(actions.loginFail());
  }
}

// $FlowIssue
export default function*() {
  yield all([takeEvery(actions.LOGIN, login$)]);
}
