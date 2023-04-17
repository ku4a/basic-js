const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let arrStr = [];
    let current = '';
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        console.log(`i= ${i}`);
        if (str.length === 1) return [1, str[0]];
        if (i === 0) {
            current = str[i];
            sum = 1;
        } else if (i === str.length - 1) {
            if (str[i] === current) {
                arrStr.push([++sum, current])
            } else {
                arrStr.push([sum, current]);
                arrStr.push([1, str[i]]);
            }
        } else {
            if (str[i] === current) {
                sum++;
            } else {
                arrStr.push([sum, current]);
                current = str[i];
                sum = 1;
            }
        }
    }
    let result = '';
    arrStr.forEach(elem => {
        if (elem[0] !== 1) {
            result += elem[0];
        }
        result += elem[1];
    });
    return result;
}

module.exports = {
    encodeLine
};
