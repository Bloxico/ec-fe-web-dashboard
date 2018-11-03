// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import Logo from '@ui/Logo';
import {
  REGISTER_PAGE,
  LOGIN_PAGE,
  AUTH_PAGE,
  THEME_PREFIX,
} from 'src/constants';

// TODO@all fix this logo like it is in gc-lite, and links for term of use and privacy policy should open a modal or redirect to external link

export type Props = {
  MSGDashboard: string,
  MSGCreateAnAccount: string,
  MSGSignIn: string,
  MSGByContinuingYouAgreeToOur: string,
  MSGTermsOfUse: string,
  MSGAnd: string,
  MSGPrivacyPolicy: string,
};

const baseClass = `${THEME_PREFIX}-welcome`;

const btnClasses = classNames(
  `${THEME_PREFIX}-button`,
  `${THEME_PREFIX}-button--large`,
  `${THEME_PREFIX}-button--wide`,
);

const Welcome = ({
  MSGDashboard,
  MSGCreateAnAccount,
  MSGSignIn,
  MSGByContinuingYouAgreeToOur,
  MSGTermsOfUse,
  MSGAnd,
  MSGPrivacyPolicy,
}: Props) => (
  <div className={baseClass}>
    <header className={`${baseClass}__header`}>
      <Logo />
      <h1>{MSGDashboard}</h1>
    </header>

    <section className={`${baseClass}__content`}>
      <Link
        to={REGISTER_PAGE}
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

export default Welcome;
