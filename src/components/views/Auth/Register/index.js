// @flow

import { connect } from 'react-redux';
import { compose, withHandlers, withProps } from 'recompose';
import { reduxForm } from 'redux-form';
import { injectIntl } from 'react-intl';

import { register } from 'src/state/actions';

import Register from './Register';
import messages from './messages';

const mapStateToProps = ({
  auth: {
    register: { inProgress },
  },
}) => ({ isRegistrationInProgress: inProgress });

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
)(Register);
