// @flow

import { delay } from 'redux-saga';
import { all, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { Http } from 'src/services/http';
import { LOGIN_PAGE, MODALS } from 'src/constants';
import { showModal } from 'src/state/actions';

import * as actions from './actions';

export function* register$({ payload }): Generator<*, *, *> {
  yield delay(500);
  try {
    // throw new Error({ response: { data: { message: 'Testing modal...' } } });
    yield Http.post('/api/user/registration', payload);
    yield put(push(LOGIN_PAGE));
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

  yield put(actions.clearRegisterState());
}

// $FlowIssue
export default function*() {
  yield all([takeEvery(actions.REGISTER, register$)]);
}
