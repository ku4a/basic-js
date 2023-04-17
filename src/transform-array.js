const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }
    let arrResult = arr.slice();
    while (true) {
        let isChanges = false;
        for (let i = 0; i < arrResult.length; i++) {
            if (arrResult[i] === '--discard-next') {
                isChanges = true;
                if (i === arrResult.length - 1) {
                    arrResult = arrResult.slice(0, -1);
                    break;
                } else {
                    arrResult.splice(i, 2, 'x');
                    break;
                }
            } else if (arrResult[i] === '--discard-prev') {
                isChanges = true;
                if (i === 0) {
                    arrResult.splice(0, 1);
                    break;
                } else {
                    arrResult.splice(i - 1, 2);
                    break;
                }
            } else if (arrResult[i] === '--double-next') {
                isChanges = true;
                if (i + 1 === arrResult.length) {
                    arrResult = arrResult.slice(0, -1);
                    break;
                } else {
                    arrResult.splice(i, 1, arrResult[i + 1]);
                    break;
                }
            } else if (arrResult[i] === '--double-prev') {
                isChanges = true;
                if (i > 0) {
                    if (arrResult[i - 1] !== 'x') {
                        arrResult.splice(i, 1, arrResult[i - 1]);
                        break;
                    } else {
                        arrResult.splice(i, 1);
                        break;
                    }
                } else {
                    arrResult.splice(0, 1);
                    isChanges = true;
                    break;
                }
            }
        }
        if (!isChanges) break;
    }
    for (let j = 0; j < arrResult.length; j++) {
        if (arrResult[j] === 'x') arrResult.splice(j, 1);
    }
    return arrResult;
}

module.exports = {
    transform
};
