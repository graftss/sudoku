import React from 'react';

import './Grid.css';
import Cell from '../Cell';

const puzzle = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
];

const blank = null;
const blankPuzzle = [
  [blank, blank, blank, blank, blank, blank, blank, blank, blank],
  [blank, blank, blank, blank, blank, blank, blank, blank, blank],
  [blank, blank, blank, blank, blank, blank, blank, blank, blank],
  [blank, blank, blank, blank, blank, blank, blank, blank, blank],
  [blank, blank, blank, blank, blank, blank, blank, blank, blank],
  [blank, blank, blank, blank, blank, blank, blank, blank, blank],
  [blank, blank, blank, blank, blank, blank, blank, blank, blank],
  [blank, blank, blank, blank, blank, blank, blank, blank, blank],
  [blank, blank, blank, blank, blank, blank, blank, blank, blank],
];

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

export default () => (
  <div className="grid-container">
    <table className="grid noselect">
      <tbody>
        {blankPuzzle.map((row, rowIndex) => (
          <tr>
            {row.map(
              (content, colIndex) => {
                const sides = computeSides(3, rowIndex, colIndex);

                return (
                  <Cell
                    dividerSides={sides.divider}
                    edgeSides={sides.edge}
                    key={`${rowIndex},${colIndex}`}
                  >
                    {content}
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
