// @flow

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from '@ui';
import logo from '@images/energycoin.png';
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

const Welcome = ({
  MSGDashboard,
  MSGCreateAnAccount,
  MSGSignIn,
  MSGByContinuingYouAgreeToOur,
  MSGTermsOfUse,
  MSGAnd,
  MSGPrivacyPolicy,
}: Props) => (
  <Fragment>
    <Container className={baseClass}>
      <Row className="align-items-center">
        <Col>
          <img src={logo} alt="" width="40%" />
          <h1>{MSGDashboard}</h1>
          <Link
            to={REGISTER_PAGE}
            className="enrg-button enrg-button--wide enrg-button--primary"
          >
            {MSGCreateAnAccount}
          </Link>
          <div className="clearfix" />
          <Link
            to={LOGIN_PAGE}
            className="enrg-button enrg-button--wide enrg-button--secondary"
          >
            {MSGSignIn}
          </Link>
        </Col>
      </Row>
    </Container>
    <Container className={`${baseClass}__footer`}>
      <Row>
        <span>
          {MSGByContinuingYouAgreeToOur}{' '}
          <Link to={AUTH_PAGE} className={`${THEME_PREFIX}-link`}>
            {MSGTermsOfUse}
          </Link>{' '}
          {MSGAnd}{' '}
          <Link to={AUTH_PAGE} className={`${THEME_PREFIX}-link`}>
            {MSGPrivacyPolicy}
          </Link>
        </span>
      </Row>
    </Container>
  </Fragment>
);

export default Welcome;
