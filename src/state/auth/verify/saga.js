// @flow

import { all, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { SUCCESS_PAGE, LOGIN_PAGE, MODALS } from 'src/constants';
import { http } from 'src/services/http';

import { showModal } from 'src/state/actions';

import * as actions from './actions';

export function* verify$({
  payload: { isForReset, data },
}): Generator<*, *, *> {
  try {
    if (isForReset) {
      yield http.post('user/passwordForgotUpdate', data);
      yield put(push(SUCCESS_PAGE));
    } else {
      yield http.post('user/registrationConfirm', data);
      yield put(push(LOGIN_PAGE));
    }
  } catch ({ response: { data } }) {
    yield put(
      showModal({
        modalName: MODALS.ErrorMessage,
        align: 'center',
        data: {
          content: data && data.message,
        },
      }),
    );
  }
  yield put(actions.clearVerifyState());
}

// $FlowIssue
export default function*() {
  yield all([takeEvery(actions.VERIFY, verify$)]);
}
