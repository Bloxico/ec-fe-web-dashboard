import React, { Component } from 'react';

import { Select } from '@ui';
import { IntlConsumer } from 'src/components/wrappers/IntlProvider';
import { THEME_PREFIX, DUTCH_LANG, SERBIAN_LANG } from 'src/constants';

const baseClass = `${THEME_PREFIX}-change-language`;

type Props = {
  MSGLanguage: string,
  MSGEnglish: string,
  MSGDutch: string,
  MSGSerbian: string,
  value: string,
};

class LanguageChange extends Component<Props> {
  componentWillReceiveProps(nextProps) {
    const { value } = this.props;
    if (value !== nextProps.value)
      this.context.state.switchLanguage(nextProps.value);
  }

  switchLanguage = val => {
    this.context.state.switchLanguage(val);
  };

  render() {
    const { MSGLanguage, MSGEnglish, MSGDutch, MSGSerbian } = this.props;

    return (
      <IntlConsumer>
        {() => (
          <React.Fragment>
            <div className={baseClass}>
              <span className={`${baseClass}__label`}>{MSGLanguage}</span>
              <Select
                className={`${baseClass}__select`}
                onChange={this.switchLanguage}
                selected={this.context.state.locale}
                options={{
                  '': MSGEnglish,
                  [DUTCH_LANG]: MSGDutch,
                  [SERBIAN_LANG]: MSGSerbian,
                }}
              />
            </div>
          </React.Fragment>
        )}
      </IntlConsumer>
    );
  }
}
LanguageChange.contextType = IntlConsumer;

export default LanguageChange;
