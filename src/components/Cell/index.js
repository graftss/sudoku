import React from 'react';

import './Cell.css';

const getClassName = (dividerSides = [], edgeSides = []) => (
  [
    'cell',
    ...dividerSides.map(side => `cell-divider-${side}`),
    ...edgeSides.map(side => `cell-edge-${side}`),
  ].join(' ')
);

export default ({
  children,
  dividerSides,
  edgeSides,
}) => (
  <td className={getClassName(dividerSides, edgeSides)}>
    {children}
  </td>
);
