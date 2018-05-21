const getIndex = (cellSize, offset, position) => (
  Math.floor((position - offset) / cellSize)
);

const hardCoded3x3Value = 1;

const validIndices = (rows, cols, rowIndex, colIndex) => (
  rowIndex >= 0 && rowIndex < rows && colIndex >= 0 && colIndex < cols
);

export default (rows, cols, cellSizePx, dx, dy) => {
  const colIndex = getIndex(cellSizePx, -cellSizePx * .5, dx) + hardCoded3x3Value;
  const rowIndex = getIndex(cellSizePx, -cellSizePx * .5, dy) + hardCoded3x3Value;

  console.log({ rows, cols, rowIndex, colIndex })

  return validIndices(rows, cols, rowIndex, colIndex) ?
    colIndex + rowIndex * cols :
    null;
};
