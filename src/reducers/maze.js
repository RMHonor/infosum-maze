import { MOVE } from '../actions/move';
import { CHANGE_MAZE } from '../actions/change-maze';

import defaultMaze from '../assets/maze/defaultMaze.json';
import boxMaze from '../assets/maze/boxMaze.json';

export default function (state = placePlayer(defaultMaze.maze), action) {
  switch (action.type) {
    case MOVE:
      const playerCoords = getCharacterLocation(state);
      return updateMaze(state, playerCoords, action.payload);

    case CHANGE_MAZE:
      switch(action.payload) {
        case 'boxMaze':
          return boxMaze.maze;
        default:
          return placePlayer(defaultMaze.maze);
      }

    default:
      return state;
  }
}

function getCharacterLocation(mazeState) {
  const x = mazeState.findIndex(row => ~row.indexOf('P') || ~row.indexOf('O'));
  //if no player
  if (!~x) return null;

  const y = mazeState[x].findIndex(col => ~col.indexOf('P') || ~col.indexOf('O'));

  return { x, y };
}

function updateMaze(state, playerCoords, direction) {
  switch (direction) {
    case 'up':
      return movePlayer(state, playerCoords, -1, 0);
    case 'down':
      return movePlayer(state, playerCoords, 1, 0);
    case 'right':
      return movePlayer(state, playerCoords, 0, 1);
    case 'left':
      return movePlayer(state, playerCoords, 0, -1);
  }

  return res;
}

function movePlayer(state, currentCoords, xDiff, yDiff){
  const newState = copyMaze(state);
  const underTile = state[currentCoords.x][currentCoords.y] === 'P' ? ' ' : 'T'; //get tile type under player


  //Tile types: T - target, B - box, D - box on target, X - exit, P - player, O - player on target
  switch (state[currentCoords.x + xDiff][currentCoords.y + yDiff]){
    case 'X': //exit
      if (allBoxesComplete(state))
        return 'Victory!';
      break;
    case ' ':
      newState[currentCoords.x][currentCoords.y] = underTile;
      newState[currentCoords.x + xDiff][currentCoords.y + yDiff] = 'P';
      break;
    case 'T': //free space
      newState[currentCoords.x][currentCoords.y] = underTile;
      newState[currentCoords.x + xDiff][currentCoords.y + yDiff] = 'O';
      break;
    case 'B':
      if (newState[currentCoords.x + (xDiff * 2)][currentCoords.y + (yDiff * 2)] === ' '){
        newState[currentCoords.x + (xDiff * 2)][currentCoords.y + (yDiff * 2)] = 'B';
        newState[currentCoords.x + xDiff][currentCoords.y + yDiff] = 'P';
        newState[currentCoords.x][currentCoords.y] = underTile;
      } else if (newState[currentCoords.x + (xDiff * 2)][currentCoords.y + (yDiff * 2)] === 'T') {
        newState[currentCoords.x + (xDiff * 2)][currentCoords.y + (yDiff * 2)] = 'D';
        newState[currentCoords.x + xDiff][currentCoords.y + yDiff] = 'P';
        newState[currentCoords.x][currentCoords.y] = underTile;
      }
      break;
    case 'D':
      if (newState[currentCoords.x + (xDiff * 2)][currentCoords.y + (yDiff * 2)] === ' '){
        newState[currentCoords.x + (xDiff * 2)][currentCoords.y + (yDiff * 2)] = 'B';
        newState[currentCoords.x + xDiff][currentCoords.y + yDiff] = 'O';
        newState[currentCoords.x][currentCoords.y] = underTile;
      } else if (newState[currentCoords.x + (xDiff * 2)][currentCoords.y + (yDiff * 2)] === 'T') {
        newState[currentCoords.x + (xDiff * 2)][currentCoords.y + (yDiff * 2)] = 'D';
        newState[currentCoords.x + xDiff][currentCoords.y + yDiff] = 'O';
        newState[currentCoords.x][currentCoords.y] = underTile;
      }
      break;
  }

  return newState;
}

function allBoxesComplete(state) {
  return !~state.findIndex(row => ~row.indexOf('T')); //no target squares left
}

function copyMaze(state) {
  return JSON.parse(JSON.stringify(state)); //this feels so dirty...
}

function placePlayer(maze) {
  if (getCharacterLocation(maze)) {
    return maze;
  }

  const res = copyMaze(maze);

  const spaces = [];
  
  res.forEach((row, i) => {
    row.forEach((tile, j) => {
      if (tile === ' ')
        spaces.push({ x: i, y: j });
    });
  });

  const randomTile = spaces[Math.floor(Math.random() * spaces.length)];
  res[randomTile.x][randomTile.y] = 'P';

  return res;
}
