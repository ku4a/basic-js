const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let result = [];
    for (let i = 0; i < String(n).length; i++) {
        let arrStr = String(n).split('');
        arrStr.splice(i, 1).join('');
        result.push(+arrStr.join(''))
    }
    return Math.max(...result);
}

module.exports = {
    deleteDigit
};
