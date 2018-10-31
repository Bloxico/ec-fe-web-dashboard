import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { reduxForm } from 'redux-form';
import { injectIntl } from 'react-intl';

import { verify } from 'src/state/actions';
import { codeLen, number, required, password } from 'src/utilities/validators';
import {
  isVerifyInProgress,
  getResetPasswordEmail,
  getRegisterEmail,
} from 'src/state/selectors';

import Verify from './Verify';
import messages from './messages';

const mapStateToProps = state => ({
  ...isVerifyInProgress(state),
  ...getResetPasswordEmail(state),
  ...getRegisterEmail(state),
});
const actions = {
  verify,
};

export default compose(
  injectIntl,
  connect(
    mapStateToProps,
    actions,
  ),
  reduxForm({
    form: 'Verify',
  }),
  withProps(({ intl: { formatMessage } }) => ({
    MSGVerifyAccount: formatMessage(messages.verifyAccount),
    MSG4DigitVerificationCode: formatMessage(
      messages.fourDigitVerificationCode,
    ),
    MSGVerify: formatMessage(messages.verify),
    MSGEnterYourCode: formatMessage(messages.enterYourCode),
    MSGDidntReceiveEmail: formatMessage(messages.didntReceiveEmail),
    MSGResendCode: formatMessage(messages.resendCode),
    MSGNewPassword: formatMessage(messages.newPassword),
  })),
  withProps(({ intl }) => ({
    requiredIntl: required({ intl }),
    numberIntl: number({ intl }),
    codeLenIntl: codeLen({ intl }),
    passwordIntl: password({ intl }),
  })),
)(Verify);
