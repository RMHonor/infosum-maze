import React, { Component } from 'react';
import { connect } from 'react-redux';

import changeMaze from '../../actions/change-maze';

class MazeSelector extends Component {
  constructor(props) {
    super(props);

    this.changeMaze = this.changeMaze.bind(this);
  }

  changeMaze(evt) {
    this.props.changeMaze(evt.target.value);
    evt.target.blur();
  }

  render() {
    return (
      <label>Select a maze:
        <select onChange={this.changeMaze}>
          <option value="defaultMaze">Default</option>
          <option value="boxMaze">Box pushing</option>
        </select>
      </label>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeMaze: (maze) => dispatch(changeMaze(maze)),
  }
}

export default connect(null, mapDispatchToProps)(MazeSelector);