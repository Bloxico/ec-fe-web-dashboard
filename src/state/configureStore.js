// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducer';
import sagas from './saga';

export default (initialState: Object) => {
  const sagaMiddleware = createSagaMiddleware();

  const enhancer = compose(applyMiddleware(sagaMiddleware));

  const store = createStore(rootReducer, initialState, enhancer);

  sagaMiddleware.run(sagas);

  return { store };
}