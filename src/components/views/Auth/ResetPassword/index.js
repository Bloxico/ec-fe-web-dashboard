import { connect } from 'react-redux';
import { compose, withHandlers, withProps } from 'recompose';
import { reduxForm } from 'redux-form';
import { injectIntl } from 'react-intl';

import { resetPassword } from 'src/state/actions';
import { required, email } from 'src/utilities/validators';
import { isResetPasswordInProgress } from 'src/state/selectors';

import ResetPassword from './ResetPassword';
import messages from './messages';

const mapStateToProps = state => ({
  ...isResetPasswordInProgress(state),
});

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
  withProps(({ intl }) => ({
    requiredIntl: required({ intl }),
    emailIntl: email({ intl }),
  })),
)(ResetPassword);
