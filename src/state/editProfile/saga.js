// @flow

import { all, takeEvery, put } from 'redux-saga/effects';

import http from 'src/services/http';

import * as actions from './actions';
import { MODALS } from '../../constants';
import { showModal } from '../actions';

export function* profileData$(): Generator<*, *, *> {
  try {
    const { data } = yield http.get('user/myProfile');
    yield put(actions.profileDataSuccess(data));
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
    yield http.post('user/updateMyProfile', payload);
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
  yield all([takeEvery(actions.FETCH_PROFILE_DATA, profileData$)]);
  yield all([takeEvery(actions.UPDATE_PROFILE, updateProfile$)]);
}
