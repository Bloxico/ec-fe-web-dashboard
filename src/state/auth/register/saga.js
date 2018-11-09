// @flow

import { all, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import http from 'src/services/http';
import { VERIFY_PAGE, MODALS } from 'src/constants';
import { showModal } from 'src/state/actions';

import * as actions from './actions';

export function* fetchRegions$(): Generator<*, *, *> {
  try {
    const {
      data: { regions },
    } = yield http.get(`user/registrationData`);

    yield put(actions.fetchRegionsSuccess({ regions }));
  } catch ({ response }) {
    //    TODO@all handle the error with modal?
  }
}

export function* register$({ payload }): Generator<*, *, *> {
  try {
    yield http.post('user/registration', payload);

    yield put(push(`${VERIFY_PAGE}/${payload.email}`));
  } catch ({ response: { data } }) {
    let errorMessage = data.message;
    const { validationErrorMessages } = data;

    if (validationErrorMessages) {
      errorMessage = '';
      Object.keys(validationErrorMessages).forEach(key => {
        errorMessage += `${key}: ${validationErrorMessages[key]} \n`;
      });
    }

    yield put(
      showModal({
        modalName: MODALS.ErrorMessage,
        align: 'center',
        data: {
          content: errorMessage,
        },
      }),
    );
  }
}

// $FlowIssue
export default function*() {
  yield all([takeEvery(actions.REGISTER, register$)]);
  yield all([takeEvery(actions.FETCH_REGIONS, fetchRegions$)]);
}
