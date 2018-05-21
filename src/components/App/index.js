import React, { Component } from 'react';
import './App.css';

import Grid from '../Grid';
import connect from '../../state/connect';

const blank = null;
const blankPuzzle = [
  [blank, blank, blank, blank, blank, blank, blank, blank, blank],
  [blank, blank, blank, blank, blank, blank, blank, blank, blank],
  [blank, blank, blank, blank, blank, blank, blank, blank, blank],
  [blank, blank, blank, blank, blank, blank, blank, blank, blank],
  [blank, blank, blank, blank, blank, blank, blank, blank, blank],
  [blank, blank, blank, blank, blank, blank, blank, blank, blank],
  [blank, blank, blank, blank, blank, blank, blank, blank, blank],
  [blank, blank, blank, blank, blank, blank, blank, blank, blank],
  [blank, blank, blank, blank, blank, blank, blank, blank, blank],
];

class App extends Component {
  constructor() {
    super();

    this.state = { puzzle: blankPuzzle };
  }

  setValueAt = (rowIndex, colIndex, value) => {
    const { puzzle } = this.state;

    puzzle[rowIndex][colIndex] = value;

    this.setState({ puzzle });
  }

  render() {
    const { puzzle } = this.state;

    return (
      <div className="App">
      <Grid
        puzzle={puzzle}
        setValueAt={this.setValueAt}
      />
      </div>
    );
  }
}

export default App;
