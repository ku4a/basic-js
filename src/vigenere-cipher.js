const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    constructor(isDirect = true) {
        this.isDirect = isDirect;

    }

    encrypt(message, key) {
        if (key === undefined || message === undefined) {
            throw new Error("Incorrect arguments!");
        }
        message = message.toUpperCase();
        key = key.toUpperCase();
        let strKey = '';
        if (key.length > message.length) {
            strKey = key.slice(0, message.length);
        } else {
            let times = Math.floor(message.length / key.length);
            for (let i = 0; i < times + 1; i++) {
                strKey += key;
            }
            strKey = strKey.slice(0, message.length);
        }
        let keyArr = strKey.split('');
        let arr = [];
        for (let i = 0; i < message.length; i++) {
            if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
                arr.push(keyArr.shift());
            } else {
                arr.push("n");
            }
        }
        strKey = arr.join('');
        let keyMove = [];
        for (let i = 0; i < strKey.length; i++) {
            keyMove.push(strKey.charCodeAt(i) - 65);
        }
        let result = [];
        for (let i = 0; i < message.length; i++) {
            if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
                let code = message.charCodeAt(i) + keyMove[i];
                if (code > 90) code = code - 26;
                result.push(String.fromCharCode(code));
            } else {
                result.push(message[i]);
            }
        }
        return this.isDirect ? result.join('') : result.reverse().join('');
    }

    decrypt(message, key) {
        if (key === undefined || message === undefined) throw new Error("Incorrect arguments!");
        message = message.toUpperCase();
        key = key.toUpperCase();
        let strKey = '';
        if (key.length > message.length) {
            strKey = key.slice(0, message.length);
        } else {
            let times = Math.floor(message.length / key.length);
            for (let i = 0; i < times + 1; i++) {
                strKey += key;
            }
            strKey = strKey.slice(0, message.length);
        }
        let keyArr = strKey.split('');
        let arr = [];
        for (let i = 0; i < message.length; i++) {
            if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
                arr.push(keyArr.shift());
            } else {
                arr.push("n");
            }
        }
        strKey = arr.join('');
        let keyMove = [];
        for (let i = 0; i < strKey.length; i++) {
            keyMove.push(strKey.charCodeAt(i) - 65);
        }
        let result = [];
        for (let i = 0; i < message.length; i++) {
            if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
                let code = message.charCodeAt(i) - keyMove[i];
                if (code < 65) code = code + 26;
                result.push(String.fromCharCode(code));
            } else {
                result.push(message[i]);
            }
        }
        return this.isDirect ? result.join('') : result.reverse().join('');
    }
}

module.exports = {
    VigenereCipheringMachine
};
