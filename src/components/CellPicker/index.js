import { Component } from 'react';

import pick from './pick';

export default class CellPicker extends Component {
  constructor() {
    super();

    this.state = {
      hasMoved: false,
      selection: null,
    };
  }

  componentDidMount() {
    const { initialValue } = this.props;

    window.addEventListener('mouseup', this.onMouseUp, false);
    window.addEventListener('mousemove', this.onMouseMove, false);

    if (initialValue === null) {
      this.updateDisplay(0, 0);
    } else {
      this.setState({ selection: initialValue });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.onMouseUp, false);
    window.removeEventListener('mousemove', this.onMouseMove, false);
  }

  onMouseUp = e => {
    const { onMouseUp } = this.props;
    const { selection } = this.state;

    const value =
      this.props.initialValue !== null && !this.state.hasMoved ?
        null :
        selection;

    onMouseUp && onMouseUp(value);
  }

  onMouseMove = e => {
    const { x, y } = this.props;
    const { hasMoved } = this.state;
    const { clientX, clientY } = e;

    this.updateDisplay(clientX - x, clientY - y);

    if (!hasMoved) {
      this.setState({ hasMoved: true });
    }
  }

  updateDisplay(dx, dy) {
    const { mapIndex } = this.props;

    const index = pick(15, 60, dx, dy);
    const selection = mapIndex ? mapIndex(index) : index;

    this.setState({ selection });
  }

  render() {
    const { render } = this.props;
    const { selection } = this.state;

    return render(selection);
  }
}
