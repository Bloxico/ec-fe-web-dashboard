// @flow

import { delay } from 'redux-saga';
import { all, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { Http } from 'src/services/http';
import { LOGIN_PAGE, messages } from 'src/constants';
import { showModal } from 'src/state/actions';
import { getIntl } from 'src/components/wrappers/IntlProvider';

import * as actions from './actions';

export function* register$({ payload }): Generator<*, *, *> {
  yield delay(500);
  try {
    yield Http.post('/api/user/registration', payload);
    yield put(push(LOGIN_PAGE));
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
        modalName: 'Register',
        title: errorTitle,
        align: 'center',
        footerBtnTxt: btnText,
        data: errorContent,
      }),
    );
  }

  yield put(actions.clearRegisterState());
}

// $FlowIssue
export default function*() {
  yield all([takeEvery(actions.REGISTER, register$)]);
}
