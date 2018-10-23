// @flow

import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { Form, FormField, Button, Container, Row, Col } from '@ui';
import { RESET_PASSWORD_PAGE, THEME_PREFIX } from 'src/constants';

type PropsT = {
  MSGSignIn: string,
  handleSubmit: Function,
  handleLogin: Function,
  MSGEmail: string,
  MSGPassword: string,
  isLoginInProgress: boolean,
  MSGLogin: string,
  MSGForgotThePassword: string,
  MSGReset: string,
  requiredIntl: Function,
  passwordIntl: Function,
  emailIntl: Function,
};

const baseClass = `${THEME_PREFIX}-login`;
const classes = classNames(baseClass, `${THEME_PREFIX}-layout--center`);

class Login extends Component<PropsT> {
  constructor(props) {
    super(props);
    const { requiredIntl, passwordIntl, emailIntl } = props;
    this.validators = {
      requiredValidator: requiredIntl,
      passwordValidator: passwordIntl,
      emailValidator: emailIntl,
    };
  }

  render() {
    const {
      MSGSignIn,
      MSGEmail,
      MSGPassword,
      MSGLogin,
      MSGForgotThePassword,
      MSGReset,
      handleSubmit,
      handleLogin,
      isLoginInProgress,
    } = this.props;

    const {
      requiredValidator,
      passwordValidator,
      emailValidator,
    } = this.validators;

    return (
      <Container>
        <Row>
          <Col sm={{ size: 4, offset: 4 }} xs={{ size: 10, offset: 1 }}>
            <div className={classes}>
              <h1>{MSGSignIn}</h1>
              <Form onSubmit={handleSubmit(handleLogin)}>
                <Field
                  placeholder={MSGEmail}
                  component={FormField}
                  name="username"
                  width="full"
                  validate={[
                    requiredValidator,
                    passwordValidator,
                    emailValidator,
                  ]}
                />
                <Field
                  placeholder={MSGPassword}
                  type="password"
                  component={FormField}
                  name="password"
                  width="full"
                  validate={[
                    requiredValidator,
                    passwordValidator,
                    emailValidator,
                  ]}
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
                <Link to={RESET_PASSWORD_PAGE}>{MSGReset}</Link>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
