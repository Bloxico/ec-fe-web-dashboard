// @flow

import { connect } from 'react-redux';
import { compose, withHandlers, withProps } from 'recompose';
import { reduxForm } from 'redux-form';
import { injectIntl } from 'react-intl';

import { login } from 'src/state/actions';

import Login from './Login';
import messages from './messages';

const mapStateToProps = ({
  auth: {
    login: { inProgress },
  },
}) => ({ isLoginInProgress: inProgress });

const actions = {
  login,
};

export default compose(
  injectIntl,
  reduxForm({
    form: 'Login',
  }),
  connect(
    mapStateToProps,
    actions,
  ),
  withHandlers({
    handleLogin: ({ login }) => values => {
      login(values);
    },
  }),
  withProps(({ intl: { formatMessage } }) => ({
    MSGLoginHeading: formatMessage(messages.loginHeading),
  })),
)(Login);
