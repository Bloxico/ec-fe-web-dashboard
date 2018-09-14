import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { AUTH_PAGE, PORTAL_PAGE, THEME_PREFIX } from 'src/constants';

import Header from '@partials/Header';

import { StateT } from 'src/state/state';

import Auth from './Auth';
import Portal from './Portal';

import './App.scss';

const baseClass = `${THEME_PREFIX}-app`;

const App = ({ store, history }: { store: StateT, history: Object }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className={baseClass}>
        <Header />
        <Switch className={`${baseClass}__content`}>
          <Route exact path="/" component={() => <Redirect to={AUTH_PAGE} />} />
          <Route path={PORTAL_PAGE} component={Portal} />
          <Route path={AUTH_PAGE} component={Auth} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
);
export default App;
