// @flow

import React from 'react';
import { Field } from 'redux-form';

import Form, { FormField } from '@ui/Form';

import { THEME_PREFIX } from 'src/constants/ui';

export type Props = {
  handleLogin: Function,
  handleSubmit: Function,
  isLoginInProgress: boolean,
};

const baseClass = `${THEME_PREFIX}-login`;

const Login = ({ isLoginInProgress, handleLogin, handleSubmit }: Props) => (
  <div className={baseClass}>
    <h1>Login</h1>

    <Form onSubmit={handleSubmit(handleLogin)}>
      {/* TODO@martins add validatiors */}
      <Field label="Email" component={FormField} name="username" width="auto" />
      <Field
        label="Password"
        type="password"
        component={FormField}
        name="password"
        width="auto"
      />

      <button type="submit" disabled={isLoginInProgress}>
        {isLoginInProgress ? 'Logging in' : 'Login'}
      </button>
    </Form>
  </div>
);

export default Login;
