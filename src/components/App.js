import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import IntlProvider from 'src/components/wrappers/IntlProvider';
import { AUTH_PAGE, PORTAL_PAGE, THEME_PREFIX } from 'src/constants/index';
import { StateT } from 'src/state/state';
import ModalManager from 'src/components/views/common/ModalManager/index';

import Auth from './views/Auth/index';
import Portal from './views/Portal/index';

const baseClass = `${THEME_PREFIX}-app`;

const App = ({ store, history }: { store: StateT, history: Object }) => (
  <IntlProvider>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className={baseClass}>
          <ModalManager />
          <Switch className={`${baseClass}__content`}>
            <Route
              exact
              path="/"
              component={() => <Redirect to={AUTH_PAGE} />}
            />
            <Route path={PORTAL_PAGE} component={Portal} />
            <Route path={AUTH_PAGE} component={Auth} />
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>
  </IntlProvider>
);
export default App;
