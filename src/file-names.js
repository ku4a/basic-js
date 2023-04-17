const {NotImplementedError} = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the result should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
    let result = [];
    let file = {};
    names.forEach(fileName => {
        if (!file.hasOwnProperty(fileName)) {
            result.push(fileName);
            file[fileName] = 0;
            file[`${fileName}(${file[fileName] + 1})`] = 0;
        } else {
            result.push(`${fileName}(${file[fileName] + 1})`);
            file[fileName] = file[fileName] + 1;
        }
    });
    return result;
}

module.exports = {
    renameFiles
};
