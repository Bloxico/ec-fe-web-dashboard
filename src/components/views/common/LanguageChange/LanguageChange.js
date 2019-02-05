import React, { Component } from 'react';
import { defineMessages } from 'react-intl';

import { Button } from '@ui';
import { IntlConsumer } from 'src/components/wrappers/IntlProvider';
import {
  THEME_PREFIX,
  DUTCH_LANG,
  ENGLISH_LANG,
  SERBIAN_LANG,
} from 'src/constants';

const baseClass = `${THEME_PREFIX}-change-language`;
const messages = defineMessages({
  language: {
    id: 'language',
    defaultMessage: 'Language',
  },
  english: {
    id: 'english',
    defaultMessage: 'English',
  },
  dutch: {
    id: 'dutch',
    defaultMessage: 'Dutch',
  },
  serbian: {
    id: 'serbian',
    defaultMessage: 'Serbian',
  },
});

type Props = {
  intl: any,
  value: string,
};
type State = {
  changeLangOpen: boolean,
};

class LanguageChange extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = { changeLangOpen: false };

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { value } = this.props;
    if (value !== nextProps.value)
      this.context.state.switchLanguage(nextProps.value);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  switchLanguage = val => {
    this.context.state.switchLanguage(val.target.value);
  };

  openLanguageSelect = () => {
    this.setState({ changeLangOpen: true });
    document.addEventListener('mousedown', this.handleClickOutside);
  };

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ changeLangOpen: false });
    }
  }

  render() {
    const {
      intl: { formatMessage },
    } = this.props;
    const MSGDutch = formatMessage(messages.dutch);
    const MSGSerbian = formatMessage(messages.serbian);
    const MSGEnglish = formatMessage(messages.english);
    const MSGLanguage = formatMessage(messages.language);

    let currentLang;

    switch (this.context.state.locale) {
      case DUTCH_LANG:
        currentLang = MSGDutch;
        break;
      case SERBIAN_LANG:
        currentLang = MSGSerbian;
        break;
      default:
        currentLang = MSGEnglish;
    }
    return (
      <IntlConsumer>
        {() => (
          <React.Fragment>
            <div className={baseClass}>
              <h5 className={`${baseClass}__h5`}>{MSGLanguage}</h5>
              <Button
                className={`${baseClass}__select`}
                onClick={this.openLanguageSelect}
                type="ghost"
              >
                {currentLang}
              </Button>
            </div>
            <div className={`${baseClass}__menu`}>
              {this.state.changeLangOpen && (
                <div
                  ref={this.setWrapperRef}
                  className={`${baseClass}__content`}
                >
                  <Button
                    value={DUTCH_LANG}
                    onClick={this.switchLanguage}
                    type="ghost"
                    className={`${
                      this.context.state.locale === DUTCH_LANG ? 'active' : ''
                    }`}
                  >
                    {MSGDutch}
                  </Button>
                  <Button
                    value={SERBIAN_LANG}
                    onClick={this.switchLanguage}
                    type="ghost"
                    className={`${
                      this.context.state.locale === SERBIAN_LANG ? 'active' : ''
                    }`}
                  >
                    {MSGSerbian}
                  </Button>
                  <Button
                    value={ENGLISH_LANG}
                    onClick={this.switchLanguage}
                    type="ghost"
                    className={`${
                      this.context.state.locale === ENGLISH_LANG
                        ? 'active'
                        : this.context.state.locale === ''
                        ? 'active'
                        : ''
                    }`}
                  >
                    {MSGEnglish}
                  </Button>
                </div>
              )}
            </div>
          </React.Fragment>
        )}
      </IntlConsumer>
    );
  }
}
LanguageChange.contextType = IntlConsumer;

export default LanguageChange;
