// @flow
import { compose, withProps } from 'recompose';
import { injectIntl } from 'react-intl';

import Welcome from './Welcome';
import messages from './messages';

export default compose(
  injectIntl,
  withProps(({ intl: { formatMessage } }) => ({
    MSGDashboard: formatMessage(messages.dashboard),
    MSGCreateAnAccount: formatMessage(messages.createAnAccount),
    MSGSignIn: formatMessage(messages.signIn),
    MSGByContinuingYouAgreeToOur: formatMessage(
      messages.byContinuingYouAgreeToOur,
    ),
    MSGTermsOfUse: formatMessage(messages.termsOfUse),
    MSGAnd: formatMessage(messages.and),
    MSGPrivacyPolicy: formatMessage(messages.privacyPolicy),
  })),
)(Welcome);
