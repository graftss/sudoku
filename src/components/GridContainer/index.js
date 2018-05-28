import React, { Component } from 'react';

import connect from '../../state/connect';
import Grid from '../Grid';

const connections = {
  actions: ['setCell', 'setPuzzle'],
  selectors: ['puzzle'],
};

class GridContainer extends Component {
  componentDidMount() {
    this.loadPuzzle();
  }

  loadPuzzle = () => {
    this.props.setPuzzle(
      'c6a1a2a2a9b51b81b4c65a8a3d4a1a5a3a2d8a7a47c2b61b35b4a7a8a4a7c'
    );
  }

  setValueAt = (rowIndex, colIndex, value) => {
    this.props.setCell(rowIndex, colIndex, value);
  }

  render() {
    const { puzzle } = this.props;

    return (
      <Grid
        puzzle={puzzle}
        setValueAt={this.setValueAt}
      />
    );
  }
}

export default connect(connections)(GridContainer);
