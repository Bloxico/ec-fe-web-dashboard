import { connect } from 'react-redux';
import { compose, withHandlers, withProps } from 'recompose';
import { reduxForm } from 'redux-form';
import { injectIntl } from 'react-intl';

import { verify } from 'src/state/actions';

import Verify from './Verify';
import messages from './messages';

const mapStateToProps = ({
  auth: {
    resetPassword: { inProgress },
  },
}) => ({ isVerifyInProgress: inProgress });

const actions = {
  verify,
};
export default compose(
  injectIntl,
  reduxForm({
    form: 'Verify',
  }),
  connect(
    mapStateToProps,
    actions,
  ),
  withHandlers({
    handleVerify: ({ verify }) => values => {
      verify(values);
    },
  }),
  withProps(({ intl: { formatMessage } }) => ({
    MSGVerifyAccount: formatMessage(messages.verifyAccount),
    MSG4DigitVerificationCode: formatMessage(
      messages.fourDigitVerificationCode,
    ),
    MSGVerify: formatMessage(messages.verify),
    MSGEnterYourCode: formatMessage(messages.enterYourCode),
    MSGDidntRecieveEmail: formatMessage(messages.didntRecieveEmail),
    MSGResendCode: formatMessage(messages.resendCode),
  })),
)(Verify);
