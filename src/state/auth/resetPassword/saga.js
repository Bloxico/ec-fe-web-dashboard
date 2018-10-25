// @flow

import { delay } from 'redux-saga';
import { all, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { VERIFY_PAGE, messages } from 'src/constants';
import { Http } from 'src/services/http';
import { showModal } from 'src/state/actions';
import { getIntl } from 'src/components/wrappers/IntlProvider';

import * as actions from './actions';

export function* resetPassword$({ payload }): Generator<*, *, *> {
  // eslint-disable-next-line
  // console.log(payload);
  yield delay(500);
  try {
    yield Http.post('/api/user/passwordForgot', payload);
    yield put(push(VERIFY_PAGE));
  } catch ({ response }) {
    const { formatMessage } = yield getIntl;

    let errorTitle = formatMessage(messages.serverError);
    let errorContent = formatMessage(messages.somethingWentWrong);
    let btnText = formatMessage(messages.damnDevelopers);

    if (response !== undefined) {
      errorContent = response.data.message;
      btnText = formatMessage(messages.gotIt);
      errorTitle = formatMessage(messages.tryAgain);
    }

    yield put(
      showModal({
        modalName: 'ResetPassword',
        title: errorTitle,
        align: 'center',
        footerBtnTxt: btnText,
        data: errorContent,
      }),
    );
  }

  yield put(actions.clearResetPasswordState());
}

// $FlowIssue
export default function*() {
  yield all([takeEvery(actions.RESET_PASSWORD, resetPassword$)]);
}
