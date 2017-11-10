import { CHANGE_MAZE } from '../actions/change-maze';

export default function (state = 'defaultMaze', action) {
  switch (action.type) {
    case CHANGE_MAZE:
      return action.payload;
    default:
      return state;
  }
}