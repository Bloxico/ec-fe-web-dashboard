// @flow

import React, { Component } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import localeEN from 'react-intl/locale-data/en';
import localeNL from 'react-intl/locale-data/nl';
import localeSR from 'react-intl/locale-data/sr';

import messagesEN from 'src/translations/lib/i18n/lang/en.json';
import messagesNL from 'src/translations/lib/i18n/lang/nl.json';
import messagesSR from 'src/translations/lib/i18n/lang/sr-Latn.json';

addLocaleData([...localeEN, ...localeNL, ...localeSR]);

const { Provider, Consumer } = React.createContext();

const messages = {
  en: messagesEN,
  nl: messagesNL,
  'sr-Latn': messagesSR,
};

type Props = {
  children: any,
};

type State = {
  locale: string,
  messages: any,
  switchLanguage: Function,
};
class IntlProviderWrapper extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // pass everything in state to avoid creating object inside render method (like explained in the documentation)
    this.state = {
      locale: 'en',
      messages: messagesEN,
      switchLanguage: this.switchLanguage, // eslint-disable-line
    };
  }
  switchLanguage = (val: string) => {
    this.setState({ locale: val, messages: messages[val] });
  };

  render() {
    const { children } = this.props;
    const { locale, messages } = this.state;
    return (
      <Provider
        value={{
          state: this.state,
        }}
      >
        <IntlProvider
          key={locale}
          locale={locale}
          messages={messages}
          defaultLocale="en"
        >
          {children}
        </IntlProvider>
      </Provider>
    );
  }
}

export { IntlProviderWrapper as IntlProvider, Consumer as IntlConsumer };
