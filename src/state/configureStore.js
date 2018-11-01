// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import {
  connectRouter,
  routerMiddleware as createRouterMiddleware,
} from 'connected-react-router';

import rootReducer from './reducer';
import sagas from './saga';
import { StateT } from './state';

const history = createBrowserHistory();

export default (initialState?: StateT) => {
  const sagaMiddleware = createSagaMiddleware();
  const routerMiddleware = createRouterMiddleware(history);

  const enhancer = compose(applyMiddleware(sagaMiddleware, routerMiddleware));
  const connectedReducer = connectRouter(history)(rootReducer);
  const store = createStore(connectedReducer, initialState, enhancer);

  sagaMiddleware.run(sagas);

  return { store, history };
};
