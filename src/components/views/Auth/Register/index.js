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

import { showModal } from 'src/state/modal/actions';

import Register from './Register';
import messages from './messages';

const mapStateToProps = state => ({
  ...isRegisterInProgress(state),
});

const actions = {
  register,
  showModal,
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
    handleContinueClick: ({ showModal }) => e => {
      showModal({
        modalName: 'Register',
        title: 'This is a server error',
        align: 'center',
        footerBtnTxt: 'Got it!',
        autoFocus: false,
        data: 'User already exists',
      });
      e.preventDefault();
    },
    handleContinueClick2: ({ showModal }) => e => {
      showModal({
        modalName: 'Register',
        title: 'Confirm me pls',
        align: 'left',
        autoFocus: true,
        hasClose: true,
        data: 'User already exists',
      });
      e.preventDefault();
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
