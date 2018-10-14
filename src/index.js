import React from 'react';
import { render } from 'react-dom';
import 'src/assets/styles/main.scss';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import configureStore from 'src/state/configureStore';
import App from 'src/components/views/App';

const { store, history } = configureStore();

render(
  <App store={store} history={history} />,
  document.getElementById('root'),
);
