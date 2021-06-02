/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */
/* 
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

1) Each row must contain the digits 1-9 without repetition.
2) Each column must contain the digits 1-9 without repetition.
3) Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Note:
A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function (board) {
  let rows = {};
  let cols = {};
  let threeGrid = {
    0: {},
    1: {},
    2: {},
  };

  const gridLookup = {
    0: 0,
    1: 0,
    2: 0,
    3: 1,
    4: 1,
    5: 1,
    6: 2,
    7: 2,
    8: 2,
  };

  for (let i = 0; i < board.length; i++) {
    //* row is cleared and re-used for each loop
    rows = {};
    const row = board[i];

    for (let j = 0; j < row.length; j++) {
      const val = row[j];

      //* reset threeGrid twice
      if ((i === 3 && j === 0) || (i === 6 && j === 0)) {
        threeGrid = {
          0: {},
          1: {},
          2: {},
        };
      }

      const gridKey = threeGrid[gridLookup[j]];

      //* initialize columns at each index
      if (i === 0) {
        cols[j] = {};
      }

      if (val !== ".") {
        if (rows[[val]] || cols[j][[val]] || gridKey[[val]]) {
          console.log(
            `violation: duplicate number found in row ${i + 1} col ${
              j + 1
            } :: (${val}'s)`
          );
          return false;
        }
        // after checking for violation, valid value is tracked
        rows = { ...rows, [val]: "x" };
        cols[j][[val]] = "x";
        gridKey[[val]] = "x";
      }
    }
  }
  return true;
};
// @lc code=end

//* row violation (i3.j4 and i3.j5)
/* const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["2", ".", ".", "1", "9", ".", ".", "6", "."],
  [".", "9", "8", ".", ".", ".", ".", "5", "."],
  ["8", ".", ".", ".", "6", "6", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]; */
//* column violation (i2.j7 and i3.j7)
/* const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["2", ".", ".", "1", "9", ".", ".", "6", "."],
  [".", "9", "8", ".", ".", ".", ".", "5", "."],
  ["8", ".", ".", ".", "6", ".", ".", "5", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]; */
//* 3x3 violation (i4.j3 and i5.j5)
/* const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["2", ".", ".", "1", "9", ".", ".", "6", "."],
  [".", "9", "8", ".", ".", ".", ".", "5", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", "8", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]; */

//* leetcode test case ---> false (first 3x3 has 8's and first column has 8's)
const board = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

isValidSudoku(board);
