// @flow

import { all, takeEvery, put } from 'redux-saga/effects';
// import { push } from 'react-router-redux';

import { PORTAL_PAGE } from 'src/constants';

import * as actions from './actions';

export function* login$(): Generator<*, *, *> {
  yield console.log(PORTAL_PAGE);
  // yield put()
}

// $FlowIssue
export default function*() {
  yield all([takeEvery(actions.LOGIN, login$)]);
}
