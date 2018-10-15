// @flow

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { THEME_PREFIX } from 'src/constants/ui';
import { AUTH_PAGE, LOGIN_PAGE, REGISTER_PAGE } from 'src/constants/routes';

import Login from './Login';
import Register from './Register';

const baseClass = `${THEME_PREFIX}-auth`;

const Auth = () => (
  <div className={baseClass}>
    <Switch>
      <Route
        exact
        path={AUTH_PAGE}
        component={() => <Redirect to={LOGIN_PAGE} />}
      />
      <Route path={LOGIN_PAGE} component={Login} />
      <Route path={REGISTER_PAGE} component={Register} />
    </Switch>
  </div>
);

export default Auth;
