// @flow
import { compose, withProps } from 'recompose';
import { injectIntl } from 'react-intl';

import Success from './Success';
import messages from './messages';

export default compose(
  injectIntl,
  withProps(({ intl: { formatMessage } }) => ({
    MSGSuccess: formatMessage(messages.success),
    MSGSuccessfullyResetPass: formatMessage(messages.successfullyResetPass),
    MSGSignIn: formatMessage(messages.signIn),
  })),
)(Success);
