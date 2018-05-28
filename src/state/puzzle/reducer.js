import { assocPath } from 'ramda';

import { deserialize } from './deserialize';
import { TYPES } from './actions';

const c = { value: null, fixed: false };
const b = [c, c, c, c, c, c, c, c, c];
const puzzle = [b, b, b, b, b, b, b, b, b];

const initialState = {
  puzzle,
};

export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case TYPES.PUZZLE_SET: {
      const { puzzleString } = payload;

      return { ...state, puzzle: deserialize(puzzleString) };
    }

    case TYPES.PUZZLE_CELL_SET: {
      const { row, col, value } = payload;
      const newCellData = { fixed: false, value };

      return {
        ...state,
        puzzle: assocPath([row, col], newCellData, state.puzzle),
      };
    }
  }

  return state;
};
