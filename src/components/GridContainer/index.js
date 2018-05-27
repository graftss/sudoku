import React, { Component } from 'react';

import connect from '../../state/connect';
import Grid from '../Grid';

const connections = {
  actions: ['setCell'],
  selectors: ['puzzleClues', 'puzzleInput'],
};

class GridContainer extends Component {
  setValueAt = (rowIndex, colIndex, value) => {
    this.props.setCell(rowIndex, colIndex, value);
  }

  render() {
    const { puzzleClues, puzzleInput } = this.props;

    return (
      <Grid
        clues={puzzleClues}
        input={puzzleInput}
        setValueAt={this.setValueAt}
      />
    );
  }
}

export default connect(connections)(GridContainer);
