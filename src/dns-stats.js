const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    let invertDomains = [];
    domains.forEach(domain => {
        invertDomains.push(domain.split('.').reverse());
    });
    let result = {};
    invertDomains.forEach(domain => {
        let dns = '';
        for (let i = 0; i < domain.length; i++) {
            dns += `.${domain[i]}`;
            if (result.hasOwnProperty(dns)) {
                result[dns] = ++result[dns];
            } else {
                result[dns] = 1;
            }
        }
    });
    return result;
}

module.exports = {
    getDNSStats
};
