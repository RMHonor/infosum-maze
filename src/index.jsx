import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

import Maze from './components/maze/maze';
import MazeSelector from './components/maze-selector/maze-selector';
import Reset from './components/reset/reset'

import './index.scss';

const store = createStore(reducers);

render(
  <Provider store={store}>
    <div>
      <div className="settings">
        <MazeSelector />
        <Reset />
      </div>
      <Maze />
    </div>
  </Provider>,
  document.querySelector('#root'),
);