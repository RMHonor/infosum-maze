import { combineReducers } from 'redux';

import maze from './maze';
import selectedMaze from './selected-maze';


const rootReducer = combineReducers({
  maze,
  selectedMaze,
});

export default rootReducer;
