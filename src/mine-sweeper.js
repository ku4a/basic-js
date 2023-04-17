const {NotImplementedError} = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    let mineMap = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1]
    ];
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        let resultStr = [];
        for (let k = 0; k < matrix[0].length; k++) {
            let value = 0;
            for (let l = 0; l < mineMap.length; l++) {
                if (matrix[i + mineMap[l][0]] !== undefined && matrix[i + mineMap[l][0]][k + mineMap[l][1]] !== undefined) {
                    if (matrix[mineMap[l][0] + i][k + mineMap[l][1]] === true) {
                        value++;
                    }
                }
            }
            resultStr.push(value);
        }
        result.push(resultStr);
    }
    return result;
}

module.exports = {
    minesweeper
};
