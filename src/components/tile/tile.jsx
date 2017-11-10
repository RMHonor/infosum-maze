import React from 'react';

import './tile.scss';

export default (props) => {
  let tileClass = 'tile';
  switch (props.type){
    case 'P':
      tileClass += ' tile--player';
      break;
    case '#':
      tileClass += ' tile--wall';
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