// @flow

import React from 'react';
import { IntlProvider } from 'react-intl';

// TODO@martins: get locale from state and messages from json when more languages are added

const locale = 'en';

const IntlWrapper = ({ children }: any) => <IntlProvider locale={locale}>{children}</IntlProvider>;

const intlProvider = new IntlProvider({
  locale,
  messages: {},
});

const { intl } = intlProvider.getChildContext();

export { intl as getIntl };

export default IntlWrapper;
