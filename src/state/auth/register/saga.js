// @flow

import { delay } from 'redux-saga';
import { all, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { Http } from 'src/services/http';
import { LOGIN_PAGE } from 'src/constants';
import { showModal } from 'src/state/actions';
import * as actions from './actions';

export function* register$({ payload }): Generator<*, *, *> {
  yield delay(500);
  try {
    yield Http.post('/api/user/registration', payload);
    yield put(push(LOGIN_PAGE));
  } catch ({ response }) {
    // console.log(response);
    yield put(
      showModal({
        modalName: 'Register',
        title: 'Register Header',
        align: 'center',
          footerBtnTxt: 'Got it!',
        data: response.data.message,
      }),
    );
  }

  yield put(actions.clearRegisterState());
}

// $FlowIssue
export default function*() {
  yield all([takeEvery(actions.REGISTER, register$)]);
}
