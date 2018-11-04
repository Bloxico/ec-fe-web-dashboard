// @flow

import { all, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { http } from 'src/services/http';
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
    // throw new Error({ response: { data: { message: 'Testing modal...' } } });
    yield http.post('user/registration', payload);

    yield put(push(`${VERIFY_PAGE}/${payload.email}`));
  } catch ({ response }) {
    // TODO@martins create a generic error handler
    if (response.data) {
      const { validationErrorMessages } = response.data;

      // eslint-disable-next-line
      console.log(validationErrorMessages);
      yield put(
        showModal({
          modalName: MODALS.ErrorMessage,
          align: 'center',
          data: {
            content: validationErrorMessages,
          },
        }),
      );
    }

    // TODO@martins show error modal
  }

  // yield put(actions.clearRegisterState());
}

// $FlowIssue
export default function*() {
  yield all([takeEvery(actions.REGISTER, register$)]);
  yield all([takeEvery(actions.FETCH_REGIONS, fetchRegions$)]);
}
