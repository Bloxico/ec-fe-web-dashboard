// @flow

import { connect } from 'react-redux';
import { compose, withHandlers, withProps } from 'recompose';
import { reduxForm } from 'redux-form';
import { injectIntl } from 'react-intl';

import { isRegisterInProgress } from 'src/state/selectors';
import { register } from 'src/state/actions';
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
  ...isRegisterInProgress(state),
});

const actions = {
  register,
};

export default compose(
  injectIntl,
  reduxForm({
    form: 'Register',
  }),
  connect(
    mapStateToProps,
    actions,
  ),
  withHandlers({
    handleRegistration: ({ register }) => values => {
      // eslint-disable-next-line
      console.log(values);
      register(values);
    },
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
  })),
  withProps(({ intl }) => ({
    requiredIntl: required({ intl }),
    alphanumericIntl: alphanumeric({ intl }),
    passwordIntl: password({ intl }),
    emailIntl: email({ intl }),
    matchIntl: match({ intl }),
  })),
)(Register);
