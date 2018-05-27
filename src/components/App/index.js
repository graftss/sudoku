import React, { Component } from 'react';
import './App.css';

import GridContainer from '../GridContainer';
import connect from '../../state/connect';

class App extends Component {
  render() {
    return (
      <div className="App">
      <GridContainer />
      </div>
    );
  }
}

export default App;
