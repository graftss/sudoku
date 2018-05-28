import React from 'react';

import './Grid.css';
import Cell from '../Cell';

const computeSides = (dim, rowIndex, colIndex) => {
  const result = { divider: [], edge: [] };
  const size = dim * dim;

  if (rowIndex === 0) result.edge.push('top');
  else if (rowIndex % dim === 0) result.divider.push('top');

  if (rowIndex === size - 1) result.edge.push('bottom');
  else if (rowIndex % dim === dim - 1) result.divider.push('bottom');

  if (colIndex === 0) result.edge.push('left');
  else if (colIndex % dim === 0) result.divider.push('left');

  if (colIndex === size - 1) result.edge.push('right');
  else if (colIndex % dim === dim - 1) result.divider.push('right');

  return result;
};

export default ({
  puzzle,
  setValueAt,
}) => (
  <div className="grid-container">
    <table className="grid noselect">
      <tbody>
        {puzzle.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map(
              (cellData, colIndex) => {
                const sides = computeSides(3, rowIndex, colIndex);
                const { fixed, value } = cellData;

                return (
                  <Cell
                    dividerSides={sides.divider}
                    edgeSides={sides.edge}
                    fixed={fixed}
                    key={colIndex}
                    setValue={v => setValueAt(rowIndex, colIndex, v)}
                  >
                    {value}
                  </Cell>
                );
              }
            )}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
