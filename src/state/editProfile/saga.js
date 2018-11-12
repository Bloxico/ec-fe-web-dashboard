// @flow

import { all, takeEvery, put } from 'redux-saga/effects';

import http from 'src/services/http';

import * as actions from './actions';

export function* profileData$(): Generator<*, *, *> {
  try {
    const { data } = yield http.get('user/myProfile');
    yield put(actions.profileDataSuccess(data));
  } catch ({ response }) {
    //    TODO@tolja handle the error with modal
  }
}

export function* updateProfile$({ payload }): Generator<*, *, *> {
  try {
    yield http.post('user/updateMyProfile', payload);
  } catch ({ response, error }) {
    //    TODO@tolja handle the error with modal
  }
}

export default function*() {
  yield all([takeEvery(actions.PROFILE_DATA, profileData$)]);
  yield all([takeEvery(actions.UPDATE_PROFILE, updateProfile$)]);
}
