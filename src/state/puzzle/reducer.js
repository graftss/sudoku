import { assocPath } from 'ramda';

import { TYPES } from './actions';

const blank = null;
const clues = [
  [blank, blank, blank, 6, blank, 1, blank, 2, blank],
  [2, blank, 9, blank, blank, 5, 1, blank, blank],
  [8, 1, blank, blank, 4, blank, blank, blank, 6],
  [5, blank, 8, blank, 3, blank, blank, blank, blank],
  [4, blank, 1, blank, 5, blank, 3, blank, 2],
  [blank, blank, blank, blank, 8, blank, 7, blank, 4],
  [7, blank, blank, blank, 2, blank, blank, 6, 1],
  [blank, blank, 3, 5, blank, blank, 4, blank, 7],
  [blank, 8, blank, 4, blank, 7, blank, blank, blank],
];

const initialState = {
  clues,
  input: [[], [], [], [], [], [], [], [], []],
};

export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case TYPES.PUZZLE_CLUES_SET: {
      const { clues } = payload;
      return { ...state, clues };
    }

    case TYPES.PUZZLE_CELL_SET: {
      const { row, col, value } = payload;
      return {
        ...state,
        input: assocPath([row, col], value, state.input),
      };
    }
  }

  return state;
};
