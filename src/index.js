import React from 'react';
import { render } from 'react-dom';

import configureStore from 'src/state/configureStore';
import App from 'src/components/views/App';

const { store, history } = configureStore();

render(
  <App store={store} history={history} />,
  document.getElementById('root'),
);
