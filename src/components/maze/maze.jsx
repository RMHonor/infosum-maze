import React, { Component } from 'react';
import { connect } from 'react-redux';

import Tile from '../tile/tile';

import './maze.scss';

class Maze extends Component {
  render() {
    return (
      this.props.maze.map((row, i) => (
        <div key={i} className='maze-row'>
          {row.map((tile, j) => <Tile key={j} type={tile} />)}
        </div>
      ))
    );
  }
}

function mapStateToProps({ maze }) {
  return {
    maze,
  };
}

export default connect(mapStateToProps)(Maze);