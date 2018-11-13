// @flow

import { all, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { VERIFY_PAGE, MODALS } from 'src/constants';
import http from 'src/services/http';
import { showModal } from 'src/state/actions';

import * as actions from './actions';

export function* resetPassword$({ payload }): Generator<*, *, *> {
  try {
    yield http.post('user/passwordForgot', payload);
    yield put(push(`${VERIFY_PAGE}/${payload.email}?reset=true`));
  } catch ({ response }) {
    yield put(
      showModal({
        modalName: MODALS.ErrorMessage,
        align: 'center',
        data: {
          content: response && response.data.message,
        },
      }),
    );
  }

  yield put(actions.clearResetPasswordState());
}

// $FlowIssue
export default function*() {
  yield all([takeEvery(actions.RESET_PASSWORD, resetPassword$)]);
}
