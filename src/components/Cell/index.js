import React, { Component } from 'react';

import CellPicker from '../CellPicker';
import './Cell.css';

const getClassName = (dividerSides = [], edgeSides = []) => (
  [
    'cell',
    ...dividerSides.map(side => `cell-divider-${side}`),
    ...edgeSides.map(side => `cell-edge-${side}`),
  ].join(' ')
);

export default class extends Component {
  constructor() {
    super();

    this.state = {
      picker: {
        active: false,
        x: null,
        y: null,
      },
    };
  }

  onMouseDown = e => {
    this.setState({
      picker: {
        active: true,
        x: e.clientX,
        y: e.clientY,
      },
    });
  }

  onMouseUp = selection => {
    const { setValue } = this.props;

    this.setState({
      picker: {
        active: false,
      },
    });

    setValue && setValue(selection);
  }

  renderCellPicker() {
    const { x, y } = this.state.picker;

    return (
      <CellPicker
        cellSizePx={50}
        cols={3}
        mapIndex={i => i === null ? null : i + 1}
        onMouseUp={this.onMouseUp}
        render={this.renderCell}
        rows={3}
        x={x}
        y={y}
      />
    );
  }

  renderCell = content => {
    const { dividerSides, edgeSides } = this.props;

    return (
      <td
        className={getClassName(dividerSides, edgeSides)}
        onMouseDown={this.onMouseDown}
      >
        {content}
      </td>
    );
  }

  render() {
    const { active } = this.state.picker;
    const { children } = this.props;

    return active ? this.renderCellPicker() : this.renderCell(children);
  }
}
