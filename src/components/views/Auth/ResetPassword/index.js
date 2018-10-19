import { connect } from 'react-redux';
import { compose, withHandlers, withProps } from 'recompose';
import { reduxForm } from 'redux-form';
import { injectIntl } from 'react-intl';

import { resetPassword } from 'src/state/actions';

import ResetPassword from './ResetPassword';
import messages from './messages';

const mapStateToProps = ({
  auth: {
    resetPassword: { inProgress },
  },
}) => ({ isResetPasswordInProgress: inProgress });

const actions = {
  resetPassword,
};
export default compose(
  injectIntl,
  reduxForm({
    form: 'ResetPassword',
  }),
  connect(
    mapStateToProps,
    actions,
  ),
  withHandlers({
    handleResetPassword: ({ resetPassword }) => values => {
      resetPassword(values);
    },
  }),
  withProps(({ intl: { formatMessage } }) => ({
    MSGResetPassword: formatMessage(messages.resetPassword),
    MSGEmail: formatMessage(messages.email),
    MSGContinue: formatMessage(messages.continue),
    MSGYourENRGEmail: formatMessage(messages.yourENRGEmail),
  })),
)(ResetPassword);
