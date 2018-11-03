// @flow

import { delay } from 'redux-saga';
import { all, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { SUCCESS_PAGE, MODALS } from 'src/constants';
import { Http } from 'src/services/http';
import { showModal } from 'src/state/actions';

import * as actions from './actions';

export function* verify$({ payload: { formData } }): Generator<*, *, *> {
  // eslint-disable-next-line
  yield delay(500);
  try {
    yield Http.post('/api/user/passwordForgotUpdate', formData);
    yield put(push(SUCCESS_PAGE));
  } catch ({ response }) {
    yield put(
      showModal({
        modalName: MODALS.ErrorMessage,
        align: 'center',
        data: {
          content: response && response.data.message
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
