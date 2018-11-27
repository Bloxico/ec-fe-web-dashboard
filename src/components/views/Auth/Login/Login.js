// @flow

import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import Header from '@partials/Header';
import { Form, FormField, Button } from '@ui';
import { RESET_PASSWORD_PAGE, THEME_PREFIX } from 'src/constants';

type PropsT = {
  MSGSignIn: string,
  handleSubmit: Function,
  handleLogin: Function,
  MSGEmail: string,
  MSGPassword: string,
  isLoginInProgress: boolean,
  MSGForgotThePassword: string,
  MSGReset: string,
  requiredIntl: Function,
  passwordIntl: Function,
  emailIntl: Function,
};

const baseClass = `${THEME_PREFIX}-login`;
const classes = classNames(baseClass);

class Login extends Component<PropsT> {
  constructor(props: PropsT) {
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
      <div className={classes}>
        <Header title={MSGSignIn} />

        <Form onSubmit={handleSubmit(handleLogin)} className={`${baseClass}__content`}>
          <Field
            placeholder={MSGEmail}
            component={FormField}
            name="username"
            width="full"
            validate={[requiredValidator, emailValidator]}
          />
          <Field
            placeholder={MSGPassword}
            type="password"
            component={FormField}
            name="password"
            width="full"
            validate={[requiredValidator, passwordValidator]}
          />

          <Button
            action="submit"
            size="large"
            width="full"
            type="primary"
            disabled={isLoginInProgress}
          >
            {MSGSignIn}
          </Button>

          <footer className={`${baseClass}__footer`}>
            {MSGForgotThePassword}{' '}
            <Link to={RESET_PASSWORD_PAGE} className={`${THEME_PREFIX}-link`}>
              {MSGReset}
            </Link>
          </footer>
        </Form>
      </div>
    );
  }
}

export default Login;
