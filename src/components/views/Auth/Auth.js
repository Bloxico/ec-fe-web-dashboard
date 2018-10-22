// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  AUTH_PAGE,
  LOGIN_PAGE,
  REGISTER_PAGE,
  RESET_PASSWORD_PAGE,
  VERIFY_PAGE,
  SUCCESS_PAGE,
  THEME_PREFIX,
} from 'src/constants';

import Login from './Login';
import Register from './Register';
import Welcome from './Welcome';
import ResetPassword from './ResetPassword';
import Verify from './Verify';
import Success from './Success';

const baseClass = `${THEME_PREFIX}-auth`;

const Auth = () => (
  <div className={baseClass}>
    <Switch>
      <Route path={LOGIN_PAGE} component={Login} />
      <Route path={REGISTER_PAGE} component={Register} />
      <Route path={RESET_PASSWORD_PAGE} component={ResetPassword} />
      <Route path={VERIFY_PAGE} component={Verify} />
      <Route path={SUCCESS_PAGE} component={Success} />
      <Route path={AUTH_PAGE} component={Welcome} />
    </Switch>
  </div>
);

export default Auth;
