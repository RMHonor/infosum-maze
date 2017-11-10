export const CHANGE_MAZE = 'change_maze';

export default function (maze) {
  return {
    type: CHANGE_MAZE,
    payload: maze,
  };
}