import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {AUTH_PAGE, PORTAL_PAGE, THEME_PREFIX} from "../../constants";
import Auth from './Auth';
import Portal from './Portal';
import Header from './partials/Header';

import './App.scss';

const baseClass = `${THEME_PREFIX}-app`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={baseClass}>
          <Header />
          <Switch className={`${baseClass}__content`}>
            <Route exact path="/" component={() => <Redirect to={AUTH_PAGE}/>}/>
            <Route path={PORTAL_PAGE} component={Portal}/>
            <Route path={AUTH_PAGE} component={Auth}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
