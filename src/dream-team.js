const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    if (members === undefined || members === null) {
        return false;
    }
    let result = [];
    for (let i = 0; i < members.length; i++) {
        if (typeof (members[i]) === 'string') {
            if (members[i].trim().length > 0) {
                result.push(members[i].trim()[0].toUpperCase());
            }
        }
    }
    if (!result.length) {
        return false;
    }
    return result.sort().join('');
}

module.exports = {
    createDreamTeam
};
