// @flow

import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { reduxForm } from 'redux-form';

import { login } from 'src/state/actions';

import Login from './Login';

const mapStateToProps = ({
  auth: {
    login: { inProgress },
  },
}) => ({ isLoginInProgress: inProgress });

const actions = {
  login,
};

export default compose(
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
)(Login);
