import React, { Component } from 'react';

import pick from './pick';
import './CellPicker.css';

const initialState = {
  mouseDown: false,
  mouseDownX: null,
  mouseDownY: null,
  display: null,
};

class CellPicker extends Component {
  constructor() {
    super();

    this.state = { ...initialState };
  }

  componentDidMount() {
    window.addEventListener('mouseup', this.onMouseUp, false);
    window.addEventListener('mousemove', this.onMouseMove, false);
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.onMouseUp, false);
    window.removeEventListener('mousemove', this.onMouseMove, false);
  }

  onMouseDown = e => {
    const { clientX, clientY } = e;

    this.setState({
      mouseDown: true,
      mouseDownX: clientX,
      mouseDownY: clientY,
    });

    this.updateDisplay(0, 0);
  }

  onMouseUp = e => {
    const { mouseDownX, mouseDownY } = this.state;
    const { clientX, clientY } = e;

    const dx = clientX - mouseDownX;
    const dy = clientY - mouseDownY;

    this.setState(initialState);
  }

  onMouseMove = e => {
    const { mouseDown, mouseDownX, mouseDownY } = this.state;
    const { clientX, clientY } = e;

    if (!mouseDown) return;

    this.updateDisplay(clientX - mouseDownX, clientY - mouseDownY);
  }

  updateDisplay(dx, dy) {
    const { cellSizePx, cols, rows } = this.props;

    const index = pick(rows, cols, cellSizePx, dx, dy);
    const display = index === null ? null : index + 1;

    this.setState({ display });
  }

  render() {
    const { display } = this.state;

    return (
      <div className="cell-picker-container">
        <div
          className="capture-mousedown noselect"
          onMouseDown={this.onMouseDown}
        >
          {display}
        </div>
      </div>
    );
  }
}

export default CellPicker;
