// @flow

import React from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';

import { Form, FormField, Button, Container, Row, Col } from '@ui';
import { LOGIN_PAGE, THEME_PREFIX } from 'src/constants';

export type Props = {
  handleLogin: Function,
  handleSubmit: Function,
  isLoginInProgress: boolean,
  MSGSignIn: string,
  MSGEmail: string,
  MSGPassword: string,
  MSGLogin: string,
  MSGForgotThePassword: string,
  MSGReset: string,
};

const baseClass = `${THEME_PREFIX}-login`;

const Login = ({
  isLoginInProgress,
  handleLogin,
  handleSubmit,
  MSGSignIn,
  MSGEmail,
  MSGPassword,
  MSGLogin,
  MSGForgotThePassword,
  MSGReset,
}: Props) => (
  <Container>
    <Row>
      <Col>
        <div className={baseClass}>
          <h1>{MSGSignIn}</h1>

          <Form onSubmit={handleSubmit(handleLogin)}>
            {/* TODO@martins add validatiors */}
            <Field
              placeholder={MSGEmail}
              component={FormField}
              name="username"
              width="full"
            />
            <Field
              placeholder={MSGPassword}
              type="password"
              component={FormField}
              name="password"
              width="full"
            />
            <Button
              action="submit"
              size="full"
              type="primary"
              disabled={isLoginInProgress}
            >
              {MSGLogin}
            </Button>
            <span>{MSGForgotThePassword}</span>{' '}
            <Link to={LOGIN_PAGE} className={`${THEME_PREFIX}-link`}>
              {MSGReset}
            </Link>
          </Form>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Login;
