const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
    let result;
    const position = email.lastIndexOf("@") + 1;
    result = email.slice(position);
    return result;
}

module.exports = {
    getEmailDomain
};
