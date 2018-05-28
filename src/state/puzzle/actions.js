import { argCreator, keyMirror } from '../../utils';

export const TYPES = keyMirror([
  'PUZZLE_SET',
  'PUZZLE_CELL_CLEAR',
  'PUZZLE_CELL_SET',
]);

export const setPuzzle = argCreator(TYPES.PUZZLE_SET, ['puzzleString']);

export const clearCell = argCreator(TYPES.PUZZLE_CELL_CLEAR, ['row', 'col']);

export const setCell = argCreator(TYPES.PUZZLE_CELL_SET, ['row', 'col', 'value']);
