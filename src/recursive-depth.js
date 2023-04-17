const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth(arr) {
        let arrIndex = this.checkLevel(arr);
        if (arrIndex.length === 0) {
            return 1;
        } else {
            let arrDep = [];
            for (let i = 0; i < arrIndex.length; i++) {
                arrDep.push(this.calculateDepth(arr[arrIndex[i]]));
            }
            return 1 + Math.max(...arrDep);
        }
    }

    checkLevel = (arr) => {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                result.push(i);
            }
        }
        return result;
    }
}

module.exports = {
    DepthCalculator
};
