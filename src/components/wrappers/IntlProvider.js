// @flow

import React from 'react';
import { IntlProvider } from 'react-intl';

// TODO@martins: get locale from state and messages from json when more languages are added

const IntlWrapper = ({ children }: any) => {
  const locale = 'en';

  return <IntlProvider locale={locale}>{children}</IntlProvider>;
};

export default IntlWrapper;
