// @flow

import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';

import { Form, FormField, Button, Container, Row, Col } from '@ui';
import { RESETPASSWORD_PAGE, THEME_PREFIX } from 'src/constants';

import {
  required,
  password,
  email,
  alphanumeric,
} from 'src/utilities/validators';

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
  intl: Object,
};

const baseClass = `${THEME_PREFIX}-login`;

class Login extends Component<PropsT> {
  constructor(props) {
    super(props);
    const { intl } = props;
    this.validators = {
      required: required({ intl }),
      alphanumeric: alphanumeric({ intl }),
      password: password({ intl }),
      email: email({ intl }),
    };
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className={baseClass}>
              <h1>{this.props.MSGSignIn}</h1>

              <Form onSubmit={this.props.handleSubmit(this.props.handleLogin)}>
                {/* TODO@martins add validatiors */}
                <Field
                  placeholder={this.props.MSGEmail}
                  component={FormField}
                  name="username"
                  width="full"
                  validate={[
                    this.validators.required,
                    this.validators.email,
                    this.validators.alphanumeric,
                  ]}
                />
                <Field
                  placeholder={this.props.MSGPassword}
                  type="password"
                  component={FormField}
                  name="password"
                  width="full"
                  validate={[
                    this.validators.required,
                    this.validators.password,
                    this.validators.alphanumeric,
                  ]}
                />
                <Button
                  action="submit"
                  size="full"
                  type="primary"
                  disabled={this.props.isLoginInProgress}
                >
                  {this.props.MSGLogin}
                </Button>
                <span>{this.props.MSGForgotThePassword}</span>{' '}
                <Link
                  to={RESETPASSWORD_PAGE}
                  className={`${THEME_PREFIX}-link`}
                >
                  {this.props.MSGReset}
                </Link>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
