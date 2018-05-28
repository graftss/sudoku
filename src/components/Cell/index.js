import React, { Component } from 'react';

import CellPicker from '../CellPicker';
import './Cell.css';

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

  getClassName() {
    const { dividerSides, edgeSides, fixed } = this.props;
    const { active } = this.state.picker;

    return [
      'cell',
      active ? 'cell-active' : '',
      fixed ? 'cell-clue' : 'cell-input',
      ...dividerSides.map(side => `cell-divider-${side}`),
      ...edgeSides.map(side => `cell-edge-${side}`),
    ].join(' ');
  }

  renderCellPicker() {
    const { x, y } = this.state.picker;

    return (
      <CellPicker
        initialValue={this.props.value}
        mapIndex={i => i === null ? null : i + 1}
        onMouseUp={this.onMouseUp}
        render={this.renderCell}
        x={x}
        y={y}
      />
    );
  }

  renderCell = value => {
    return (
      <td
        className={this.getClassName()}
        onMouseDown={this.onMouseDown}
      >
        {value}
      </td>
    );
  }

  render() {
    const { active } = this.state.picker;
    const { fixed, value } = this.props;

    return (active && !fixed) ?
      this.renderCellPicker() :
      this.renderCell(value);
  }
}
