// @flow

import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { reduxForm } from 'redux-form';

import { register } from 'src/state/actions';

import Register from './Register';

const mapStateToProps = ({
  auth: {
    register: { inProgress },
  },
}) => ({ isRegistrationInProgress: inProgress });

const actions = {
  register,
};

export default compose(
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
)(Register);
