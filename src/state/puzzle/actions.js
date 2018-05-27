import { argCreator, keyMirror } from '../../utils';

export const TYPES = keyMirror([
  'PUZZLE_CLUES_SET',
  'PUZZLE_CELL_CLEAR',
  'PUZZLE_CELL_SET',
]);

export const setClues = argCreator(TYPES.PUZZLE_CLUES_SET, ['clues']);

export const clearCell = argCreator(TYPES.PUZZLE_CELL_CLEAR, ['row', 'col']);

export const setCell = argCreator(TYPES.PUZZLE_CELL_SET, ['row', 'col', 'value']);
