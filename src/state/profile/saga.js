// @flow

import { all, takeEvery, put } from 'redux-saga/effects';

import http from 'src/services/http';

import * as actions from './actions';
import { MODALS } from '../../constants';
import { showModal } from '../actions';

export function* fetchProfileData$(): Generator<*, *, *> {
  try {
    const { data } = yield http.get('user/myProfile', null, {
      withAuth: true,
      cache: false,
    });

    yield put(actions.fetchProfileDataSuccess(data));
  } catch ({ response: { data } }) {
    yield put(
      showModal({
        modalName: MODALS.ErrorMessage,
        align: 'center',
        data: {
          content: data.errorCode,
        },
      }),
    );
  }
}

export function* updateProfile$({ payload }): Generator<*, *, *> {
  try {
    yield http.post('user/updateMyProfile', payload, { withAuth: true });
    yield put(actions.updateProfileSuccess());
  } catch ({ response: { data } }) {
    yield put(
      showModal({
        modalName: MODALS.ErrorMessage,
        align: 'center',
        data: {
          content: data.errorCode,
        },
      }),
    );
  }
}

// $FlowIssue
export default function*() {
  yield all([takeEvery(actions.FETCH_PROFILE_DATA, fetchProfileData$)]);
  yield all([takeEvery(actions.UPDATE_PROFILE, updateProfile$)]);
}
