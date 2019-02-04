import React, { Component } from 'react';
import { defineMessages } from 'react-intl';

import { Button } from '@ui';
import { IntlConsumer } from 'src/components/wrappers/IntlProvider';
import { THEME_PREFIX } from 'src/constants';

const baseClass = `${THEME_PREFIX}-change-language`;
const messages = defineMessages({
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

    let currentLang;

    switch (this.context.state.locale) {
      case 'nl':
        currentLang = formatMessage(messages.dutch);
        break;
      case 'sr-Latn':
        currentLang = formatMessage(messages.serbian);
        break;
      default:
        currentLang = formatMessage(messages.english);
    }
    return (
      <IntlConsumer>
        {() => (
          <React.Fragment>
            <div>
              <h5 className={`${baseClass}`}>Language</h5>
              <Button onClick={this.openLanguageSelect} type="ghost">
                {currentLang}
              </Button>
            </div>
            <div className="mgo-change-language__wrapper">
              {this.state.changeLangOpen && (
                <div ref={this.setWrapperRef} className="mgo-change-language">
                  <Button
                    value="nl"
                    onClick={this.switchLanguage}
                    type="ghost"
                    className={`${
                      this.context.state.locale === 'nl' ? 'active' : ''
                    }`}
                  >
                    {formatMessage(messages.dutch)}
                  </Button>
                  <Button
                    value="sr-Latn"
                    onClick={this.switchLanguage}
                    // icon={iconChina}
                    type="ghost"
                    className={`${
                      this.context.state.locale === 'sr-Latn' ? 'active' : ''
                    }`}
                  >
                    {formatMessage(messages.serbian)}
                  </Button>
                  <Button
                    value="en"
                    onClick={this.switchLanguage}
                    // icon={iconUsa}
                    type="ghost"
                    className={`${
                      this.context.state.locale === 'en'
                        ? 'active'
                        : this.context.state.locale === ''
                        ? 'active'
                        : ''
                    }`}
                  >
                    {formatMessage(messages.english)}
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
