export const MOVE = 'move';

export default function (direction) {
  return {
    type: MOVE,
    payload: direction,
  };
}