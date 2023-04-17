const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    let arrS1 = new Array(...s1);
    let arrS2 = new Array(...s2);
    let result = 0;
    for (let i = 0; i < arrS1.length; i++) {
        let index = arrS2.indexOf(arrS1[i]);
        if (index !== -1) {
            arrS2.splice(index, 1);
            result++;
        }
    }
    return result;
}

module.exports = {
    getCommonCharacterCount
};
