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
          <img src={logo} alt="" />
          <h1>{MSGDashboard}</h1>
          <Link to={REGISTER_PAGE} className={`${THEME_PREFIX}-link-button`}>
            {MSGCreateAnAccount}
          </Link>
          <br />
          <Link to={LOGIN_PAGE}>{MSGSignIn}</Link>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col>
          <div className={`${baseClass}__footer`}>
            <span>
              {MSGByContinuingYouAgreeToOur}{' '}
              <Link to={AUTH_PAGE}>{MSGTermsOfUse}</Link> {MSGAnd}{' '}
              <Link to={AUTH_PAGE}>{MSGPrivacyPolicy}</Link>
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  </Fragment>
);

export default Welcome;
