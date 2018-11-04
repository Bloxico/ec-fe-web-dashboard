// @flow

import { all, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { SUCCESS_PAGE, LOGIN_PAGE } from 'src/constants';
import { http } from 'src/services/http';

// import { showModal } from 'src/state/actions';
// import { getIntl } from 'src/components/wrappers/IntlProvider';
// import messages from 'src/components/views/common/ModalManager/messages';

import * as actions from './actions';

export function* verify$({
  payload: { isForReset, data },
}): Generator<*, *, *> {
  try {
    if (isForReset) {
      yield http.post('user/passwordForgotUpdate', data);
      yield put(push(SUCCESS_PAGE));
    } else {
      yield http.post('user/registrationConfirm', data);
      yield put(push(LOGIN_PAGE));
    }
  } catch ({ response: { data } }) {
    // eslint-disable-next-line
    console.log(data);
    // TODO display error in modal
    // const { formatMessage } = yield getIntl;

    // let errorTitle = formatMessage(messages.serverError);
    // let errorContent = formatMessage(messages.somethingWentWrong);
    // let btnText = formatMessage(messages.damnDevelopers);
    //
    // if (response !== undefined) {
    //   errorContent = response.data.message;
    //   btnText = formatMessage(messages.gotIt);
    //   errorTitle = formatMessage(messages.tryAgain);
    // }
    //
    // yield put(
    //   showModal({
    //     modalName: 'Verify',
    //     title: errorTitle,
    //     align: 'center',
    //     footerBtnTxt: btnText,
    //     data: errorContent,
    //   }),
    // );
  }
  yield put(actions.clearVerifyState());
}

// $FlowIssue
export default function*() {
  yield all([takeEvery(actions.VERIFY, verify$)]);
}
