// @flow

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from '@ui';
import { REGISTER_PAGE, LOGIN_PAGE, THEME_PREFIX } from 'src/constants';
import logo from '@images/energycoin.png';

// TODO@all fix this logo like it is in gc-lite, and links for term of use and privacy policy should open a modal or redirect to external link

const baseClass = `${THEME_PREFIX}-welcome`;

const Welcome = () => (
  <Fragment>
    <Container className={baseClass}>
      <Row className="align-items-center">
        <Col>
          <img src={logo} alt="" width="40%" />
          <h1>Dashboard</h1>
          <Link
            to={REGISTER_PAGE}
            className="enrg-button enrg-button--wide enrg-button--primary"
          >
            Create an account
          </Link>
          <div className="clearfix" />
          <Link
            to={LOGIN_PAGE}
            className="enrg-button enrg-button--wide enrg-button--secondary"
          >
            Sign in
          </Link>
        </Col>
      </Row>
    </Container>
    <Container className={`${baseClass}__footer`}>
      <Row>
        <span>
          By continuing you agree to our{' '}
          <a href="/" className="enrg-link">Terms of use</a> and{' '}
          <a href="/" className="enrg-link">Privacy plicy</a>
        </span>
      </Row>
    </Container>
  </Fragment>
);

export default Welcome;
