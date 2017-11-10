import React from 'react';
import { connect } from 'react-redux';

import changeMaze from '../../actions/change-maze';

import './reset.scss';

const Reset = props => console.log(props) || (
  <button className="reset-button" onClick={() => props.reset(props.selectedMaze)}>Reset</button>
);

function mapStateToProps({ selectedMaze }) {
  return { selectedMaze };
}

function mapDispatchToProps(dispatch) {
  return {
    reset: selectedMaze => dispatch(changeMaze(selectedMaze)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reset);

