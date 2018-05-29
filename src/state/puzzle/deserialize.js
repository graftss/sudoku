import { flatten, splitEvery } from 'ramda';

const isNumber = c => c >= '1' && c <= '9';
const letterSpaces = c => c.charCodeAt(0) - 'a'.charCodeAt(0) + 1;

export const deserialize = puzzleString => {
  const result = [];

  for (let i = 0; i < puzzleString.length; i++) {
    const char = puzzleString[i];

    if (isNumber(char)) {
      result.push({ fixed: true, value: Number(char) });
    } else {
      for (let j = 0; j < letterSpaces(char); j++) {
        result.push({ fixed: false, value: null });
      }
    }
  }

  return splitEvery(9, result);
};

const nullEntry = nulls => String.fromCharCode('a'.charCodeAt(0) + nulls - 1);

export const serialize = matrix => {
  const entries = flatten(matrix);

  return entries.reduce(
    ({ result, nulls }, entry) => {
      if (entry === null) {
        return { result, nulls: nulls + 1 };
      } else if (nulls === 0) {
        return { result: result + entry, nulls: 0 };
      } else {
        return { result: result + nullEntry(nulls) + entry, nulls: 0 };
      }
    },
    { result: '', nulls: 0 }
  ).result;
};
