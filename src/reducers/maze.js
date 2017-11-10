import { MOVE } from '../actions/move';

import defaultMaze from '../assets/maze/defaultMaze.json'

export default function (state = placePlayer(defaultMaze.maze), action) {
  switch (action.type) {
    case MOVE:
      const playerCoords = getCharacterLocation(state);
      return updateMaze(state, playerCoords, action.payload);
    default:
      return state;
  }
}

function getCharacterLocation(mazeState) {
  const x = mazeState.findIndex(row => ~row.indexOf('P'));
  //if no player
  if (!~x) return null;

  const y = mazeState[x].findIndex(col => ~col.indexOf('P'));

  return { x, y };
}

function updateMaze(state, playerCoords, direction) {
  switch (direction) {
    case 'up':
      return movePlayer(state, playerCoords, { x: playerCoords.x - 1, y: playerCoords.y });
    case 'down':
      return movePlayer(state, playerCoords, { x: playerCoords.x + 1, y: playerCoords.y });
    case 'right':
      return movePlayer(state, playerCoords, { x: playerCoords.x, y: playerCoords.y + 1 });
    case 'left':
      return movePlayer(state, playerCoords, { x: playerCoords.x, y: playerCoords.y - 1 });
  }

  return res;
}

function movePlayer(state, currentCoords, targetCoords){
  const newState = copyMaze(state);

  if (state[targetCoords.x][targetCoords.y] === 'X')
    return 'Victory!';

  if (state[targetCoords.x][targetCoords.y] === ' ') {
    newState[currentCoords.x][currentCoords.y] = ' ';
    newState[targetCoords.x][targetCoords.y] = 'P';
  }

  return newState;
}

function copyMaze(state) {
  return JSON.parse(JSON.stringify(state)); //this feels so dirty...
}

function placePlayer(maze) {
  if (getCharacterLocation(maze)) {
    return maze;
  }

  const spaces = [];
  
  maze.forEach((row, i) => {
    row.forEach((tile, j) => {
      if (tile === ' ')
        spaces.push({ x: i, y: j });
    });
  });

  const randomTile = spaces[Math.floor(Math.random() * spaces.length)];
  maze[randomTile.x][randomTile.y] = 'P';

  return maze;
}
