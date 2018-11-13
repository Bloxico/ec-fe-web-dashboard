// @flow

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Sidebar from '@partials/Sidebar';

import {
  THEME_PREFIX,
  PORTAL_PAGE,
  DASHBOARD_PAGE,
  TRANSACTIONS_PAGE,
  EDIT_PROFILE,
} from 'src/constants';

import Dashboard from './Dashboard';
import Transactions from './Transactions';
import EditProfile from './EditProfile';

const baseClass = `${THEME_PREFIX}-portal`;

const Portal = () => (
  <div className={baseClass}>
    <Sidebar />
    <Switch>
      <Route
        exact
        path={PORTAL_PAGE}
        component={() => <Redirect to={DASHBOARD_PAGE} />}
      />
      <Route path={DASHBOARD_PAGE} component={Dashboard} />
      <Route path={TRANSACTIONS_PAGE} component={Transactions} />
    <Route path={EDIT_PROFILE} component={EditProfile} />
    </Switch>
  </div>
);

export default Portal;
