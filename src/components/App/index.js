import React, { Component } from 'react';
import './App.css';

import CellPicker from '../CellPicker';
import Grid from '../Grid';
import connect from '../../state/connect';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CellPicker
          cellSizePx={30}
          cols={3}
          rows={3}
        />
      </div>
    );
  }
}

export default App;
