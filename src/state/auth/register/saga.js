// @flow

import { all, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { http } from 'src/services/http';
import { VERIFY_PAGE } from 'src/constants';
// import { showModal } from 'src/state/actions';
// import { getIntl } from 'src/components/wrappers/IntlProvider';

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

    yield put(push(VERIFY_PAGE));
  } catch ({ response }) {
    if (response.data) {
      if (response.data) {
        const { validationErrorMessages } = response.data;

        // eslint-disable-next-line
        console.log(validationErrorMessages);
      }
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
