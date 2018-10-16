// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  AUTH_PAGE,
  LOGIN_PAGE,
  REGISTER_PAGE,
  THEME_PREFIX,
} from 'src/constants';

import Login from './Login';
import Register from './Register';
import Welcome from './Welcome';

const baseClass = `${THEME_PREFIX}-auth`;

const Auth = () => (
  <div className={baseClass}>
    <Switch>
      <Route path={LOGIN_PAGE} component={Login} />
      <Route path={REGISTER_PAGE} component={Register} />
      <Route path={AUTH_PAGE} component={Welcome} />
    </Switch>
  </div>
);

export default Auth;
