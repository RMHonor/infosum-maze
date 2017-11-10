import React, { Component } from 'react';
import { connect } from 'react-redux';

import move from '../../actions/move';
import Tile from '../tile/tile';

import './maze.scss';

class Maze extends Component {

  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress)
  }

  handleKeyPress(evt) {
    if (~['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].indexOf(evt.key)) {
      this.props.move(evt.key.substr(5).toLowerCase());
    }
  }

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

function mapDispatchToProps(dispatch) {
  return {
    move: (direction) => dispatch(move(direction)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Maze);