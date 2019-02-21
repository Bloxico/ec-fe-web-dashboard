// @flow
import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { reduxForm } from 'redux-form';
import { injectIntl } from 'react-intl';

import {
  isRegisterInProgress,
  getRegions,
  getPartnerId,
  getFailedData,
  isFail,
} from 'src/state/selectors';
import { register, fetchRegions } from 'src/state/actions';
import {
  alphanumeric,
  email,
  match,
  password,
  required,
} from 'src/utilities/validators';

import Register from './Register';
import messages from './messages';

const mapStateToProps = state => ({
  initialValues: getFailedData(state),
  registerInProgress: isRegisterInProgress(state),
  regions: getRegions(state),
  registerFailed: isFail(state),
  ...getPartnerId(state),
});

const actions = {
  register,
  fetchRegions,
};

export default compose(
  injectIntl,
  connect(
    mapStateToProps,
    actions,
  ),
  reduxForm({
    form: 'Register',
  }),
  withProps(({ intl: { formatMessage } }) => ({
    MSGCreateAnAccount: formatMessage(messages.createAnAccount),
    MSGEmail: formatMessage(messages.email),
    MSGPassword: formatMessage(messages.password),
    MSGRepeatPassword: formatMessage(messages.repeatPassword),
    MSGRegion: formatMessage(messages.region),
    MSGCity: formatMessage(messages.city),
    MSGNicknameOptional: formatMessage(messages.nicknameOptional),
    MSGContinue: formatMessage(messages.continue),
    MSGEmptyRegistration: formatMessage(messages.emptyRegistration),
    MSGSelectCountry: formatMessage(messages.selectCountry),
    MSGRingRing: formatMessage(messages.ringRing),
  })),
  withProps(({ intl }) => ({
    requiredIntl: required({ intl }),
    alphanumericIntl: alphanumeric({ intl }),
    passwordIntl: password({ intl }),
    emailIntl: email({ intl }),
    matchIntl: match({ intl }),
  })),
)(Register);
