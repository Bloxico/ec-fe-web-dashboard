// @flow

import React, { Fragment } from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';

import { Form, FormField, Button, Container, Row, Col } from '@ui';
import { LOGIN_PAGE, THEME_PREFIX } from 'src/constants';

export type Props = {
  handleLogin: Function,
  handleSubmit: Function,
  isLoginInProgress: boolean,
};

const baseClass = `${THEME_PREFIX}-login`;

const Login = ({ isLoginInProgress, handleLogin, handleSubmit }: Props) => (
  <Fragment>
    <Container>
      <Row>
        <Col>
          <div className={baseClass}>
            <h1>Sign in</h1>

            <Form onSubmit={handleSubmit(handleLogin)}>
              {/* TODO@martins add validatiors */}
              <Field
                placeholder="Email"
                component={FormField}
                name="username"
                width="full"
              />
              <Field
                placeholder="Password"
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
                {isLoginInProgress ? 'Logging in' : 'Login'}
              </Button>
              <span>Forgot the password?</span>{' '}
              <Link to={LOGIN_PAGE} className={`${THEME_PREFIX}-link`}>
                Reset
              </Link>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  </Fragment>
);

export default Login;
