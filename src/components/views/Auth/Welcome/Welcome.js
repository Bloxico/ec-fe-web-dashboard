// @flow

import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import classNames from 'classnames';

import Logo from '@ui/Logo';
import {
  REGISTER_PAGE,
  LOGIN_PAGE,
  AUTH_PAGE,
  DASHBOARD_PAGE,
  THEME_PREFIX,
  AUTH_COOKIE,
  isProd,
} from 'src/constants';
import LanguageChange from '@partials/LanguageChange';
import Cookie from 'src/services/cookie';

// TODO@all fix this logo like it is in gc-lite, and links for term of use and privacy policy should open a modal or redirect to external link
export type Props = {
  MSGDashboard: string,
  MSGCreateAnAccount: string,
  MSGSignIn: string,
  MSGByContinuingYouAgreeToOur: string,
  MSGTermsOfUse: string,
  MSGAnd: string,
  MSGPrivacyPolicy: string,
  fetchPartner: Function,
  location: any,
  intl: any,
};

const baseClass = `${THEME_PREFIX}-welcome`;

const btnClasses = classNames(
  `${THEME_PREFIX}-button`,
  `${THEME_PREFIX}-button--large`,
  `${THEME_PREFIX}-button--wide`,
);
const randomExternalId = Math.random()
  .toString(36)
  .substr(2, 6);

class Welcome extends Component<Props> {
  constructor(props) {
    super(props);
    const { location } = props;
    const catchUserId = new URLSearchParams(location.search).get('userId');
    const catchToken = new URLSearchParams(location.search).get('token');
    this.externalId = isProd ? catchUserId : catchUserId || randomExternalId;

    if (catchToken)
      Cookie.setJSON(AUTH_COOKIE, {
        accessToken: catchToken,
      });
  }

  componentDidMount() {
    const { fetchPartner } = this.props;
    fetchPartner(this.externalId);
  }

  render() {
    const {
      MSGDashboard,
      MSGCreateAnAccount,
      MSGSignIn,
      MSGByContinuingYouAgreeToOur,
      MSGTermsOfUse,
      MSGAnd,
      MSGPrivacyPolicy,
      intl,
    } = this.props;

    if (Cookie.getJSON(AUTH_COOKIE)) return <Redirect to={DASHBOARD_PAGE} />;

    return (
      <div className={baseClass}>
        <header className={`${baseClass}__header`}>
          <Logo />
          <h1>{MSGDashboard}</h1>
          <LanguageChange intl={intl} value="nl" />
        </header>

        <section className={`${baseClass}__content`}>
          <Link
            to={
              (this.externalId &&
                `${REGISTER_PAGE}?userId=${this.externalId}`) ||
              `${REGISTER_PAGE}`
            }
            className={`${btnClasses} ${THEME_PREFIX}-button--primary`}
          >
            {MSGCreateAnAccount}
          </Link>
          <br />
          <Link to={LOGIN_PAGE} className={btnClasses}>
            {MSGSignIn}
          </Link>
        </section>

        <footer className={`${baseClass}__footer`}>
          <small className={`${THEME_PREFIX}-text--alt`}>
            {MSGByContinuingYouAgreeToOur} <br />
            <Link to={AUTH_PAGE} className={`${THEME_PREFIX}-link`}>
              {MSGTermsOfUse}
            </Link>{' '}
            {MSGAnd}{' '}
            <Link to={AUTH_PAGE} className={`${THEME_PREFIX}-link`}>
              {MSGPrivacyPolicy}
            </Link>
          </small>
        </footer>
      </div>
    );
  }
}

export default Welcome;
