// @flow

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { Container, Row, Col } from '@ui';
import logo from '@images/icon-success.svg';
import { LOGIN_PAGE, THEME_PREFIX } from 'src/constants';

export type Props = {
  MSGSuccess: string,
  MSGSuccessfullyResetPass: string,
  MSGSignIn: string,
};

const baseClass = `${THEME_PREFIX}-success`;

const classes = classNames(baseClass, `${THEME_PREFIX}-layout--center`);

const Success = ({
  MSGSuccess,
  MSGSuccessfullyResetPass,
  MSGSignIn,
}: Props) => (
  <Fragment>
    <Container className={classes}>
      <Row>
        <Col>
          <h1>{MSGSuccess}</h1>
          <img src={logo} alt="" width="100" />
          <p>{MSGSuccessfullyResetPass}</p>
          <Link to={LOGIN_PAGE}>{MSGSignIn}</Link>
        </Col>
      </Row>
    </Container>
  </Fragment>
);

export default Success;
