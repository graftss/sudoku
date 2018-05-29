const indices = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const oneToNine = arr => arr.slice().sort().join('') === '123456789';

const row = matrix => index => matrix[index];

const col = matrix => index => matrix.map(row => row[index]);

const square = matrix => index => (
  matrix
    .slice(3 * Math.floor(index / 3), 3 * Math.floor(index / 3) + 3)
    .map(row => row.slice(3 * (index % 3), 3 * (index % 3) + 3))
    .reduce((a, b) => a.concat(b), [])
);

const getters = [row, col, square];

const validateGetterAtIndex = (matrix, getter) => index => (
  oneToNine(getter(matrix)(index))
);

const validateGetter = matrix => getter => (
  indices.every(validateGetterAtIndex(matrix, getter))
);

const validate = matrix => getters.every(validateGetter(matrix));

export default validate;
