import { injectIntl } from 'react-intl';
import { compose, withProps } from 'recompose';

import Navigation from './Navigation';
import messages from './messages';

export default compose(
  injectIntl,
  withProps(({ intl: { formatMessage } }) => ({
    MSGDashboard: formatMessage(messages.dashboard),
    MSGTransactions: formatMessage(messages.transactions),
    MSGProfile: formatMessage(messages.profile),
    MSGHelp: formatMessage(messages.help),
  })),
)(Navigation);
