import React from 'react';

import './tile.scss';

export default (props) => {
  let tileClass = 'tile';
  switch (props.type){
    case 'X':
      tileClass += ' tile--player';
      break;
    case '#':
      tileClass += ' tile--wall';
      break;
    case 'W':
      tileClass += ' tile--exit';
      break;
    case ' ':
      tileClass += ' tile--space';
      break;
  }

  return <span className={tileClass}></span>;
}