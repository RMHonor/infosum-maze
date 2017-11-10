import { MOVE } from '../actions/move';

import defaultMaze from '../assets/maze/defaultMaze.json'

export default function (state = defaultMaze.maze, action) {
  switch (action.type) {
    case MOVE:
      return action.payload;
    default:
      return state;
  }
}

function getCharacterLocation(mazeState) {

}
