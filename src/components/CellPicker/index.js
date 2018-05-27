import { Component } from 'react';

import pick from './pick';
import './CellPicker.css';

export default class CellPicker extends Component {
  constructor() {
    super();

    this.state = { selection: null };
  }

  componentDidMount() {
    window.addEventListener('mouseup', this.onMouseUp, false);
    window.addEventListener('mousemove', this.onMouseMove, false);

    this.updateDisplay(0, 0);
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.onMouseUp, false);
    window.removeEventListener('mousemove', this.onMouseMove, false);
  }

  onMouseUp = e => {
    const { onMouseUp } = this.props;
    const { selection } = this.state;

    onMouseUp && onMouseUp(selection);
  }

  onMouseMove = e => {
    const { x, y } = this.props;
    const { clientX, clientY } = e;

    this.updateDisplay(clientX - x, clientY - y);
  }

  updateDisplay(dx, dy) {
    const { cellSizePx, cols, mapIndex, rows } = this.props;

    const index = pick(15, 60, dx, dy);
    const selection = mapIndex ? mapIndex(index) : index;

    this.setState({ selection });
  }

  render() {
    const { selection } = this.state;
    const { render } = this.props;

    return render(selection);
  }
}
