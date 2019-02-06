import { compose, withProps } from 'recompose';
import { injectIntl } from 'react-intl';

import LanguageChange from './LanguageChange';
import messages from './messages';

export default compose(
  injectIntl,
  withProps(({ intl: { formatMessage } }) => ({
    MSGLanguage: formatMessage(messages.language),
    MSGEnglish: formatMessage(messages.english),
    MSGDutch: formatMessage(messages.dutch),
    MSGSerbian: formatMessage(messages.serbian),
  })),
)(LanguageChange);
