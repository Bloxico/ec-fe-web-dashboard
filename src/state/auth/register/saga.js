// @flow

import { all, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { Http } from 'src/services/http';
import { VERIFY_PAGE } from 'src/constants';
import { showModal } from 'src/state/actions';
import { getIntl } from 'src/components/wrappers/IntlProvider';
import messages from 'src/components/views/common/ModalManager/messages';

import * as actions from './actions';

export function* fetchRegions$(): Generator<*, *, *> {
  try {
    const response = yield Http.get('api/user/registrationData');

    let regions = response.data.regions.reduce((obj, item) => {
      obj[item.regionName.trim(' ')] = item.regionName;
      return obj;
    }, {});
    regions = { '': 'Select', ...regions };

    yield put(actions.fetchRegionsSuccess({ regions }));
  } catch ({ response }) {
    //    TODO@all handle the error with modal?
  }
}

export function* register$({ payload }): Generator<*, *, *> {
  try {
    yield Http.post('/api/user/registration', payload);
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
  yield all([takeEvery(actions.FETCH_REGIONS, fetchRegions$)]);
}
