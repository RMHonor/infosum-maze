import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

import Maze from './components/maze/maze';

const store = createStore(reducers);

render(
  <Provider store={store}>
    <Maze/>
  </Provider>,
  document.querySelector('#root'),
);