import React from 'react';
import { render } from 'react-dom';

import configureStore from 'src/state/configureStore';
import App from 'src/components/views/App';

const { store } = configureStore();

render(<App store={store} />, document.getElementById('root'));
