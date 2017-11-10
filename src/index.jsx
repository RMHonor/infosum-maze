import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

import Maze from './components/maze/maze';
import MazeSelector from './components/maze-selector/maze-selector';

const store = createStore(reducers);

render(
  <Provider store={store}>
    <div>
      <Maze />
      <MazeSelector />
    </div>
  </Provider>,
  document.querySelector('#root'),
);