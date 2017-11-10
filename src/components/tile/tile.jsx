import React from 'react';

import './tile.scss';

export default (props) => {
  let tileClass = 'tile';
  switch (props.type){
    case 'P':
      tileClass += ' tile--player';
      break;
    case 'O':
      tileClass += ' tile--player-on-target';
      break;
    case '#':
      tileClass += ' tile--wall';
      break;
    case 'B':
      tileClass += ' tile--box';
      break;
    case 'D':
      tileClass += ' tile--completed-box';
      break;
    case 'T':
      tileClass += ' tile--target';
      break;
    case 'X':
      tileClass += ' tile--exit';
      break;
    case ' ':
      tileClass += ' tile--space';
      break;
  }

  return <span className={tileClass}></span>;
}