const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    arr: [],
    getLength() {
        return this.arr.length;
    },
    addLink(value) {
        this.arr.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if (position > this.arr.length || !Number.isInteger(position) || position <= 0) {
            this.arr = [];
            throw new Error("You can't remove incorrect link!");
        }
        this.arr.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        let arrReverse = [];
        for (let i = this.arr.length - 1; i >= 0; i--) {
            arrReverse.push(this.arr[i]);
        }
        this.arr = arrReverse;
        return this;
    },
    finishChain() {
        let str = '';
        for (let i = 0; i < this.arr.length; i++) {
            if (i !== this.arr.length - 1) {
                str += `${this.arr[i]}~~`;
            } else {
                str += `${this.arr[i]}`;
            }
        }
        this.arr = [];
        return str;
    }
};

module.exports = {
    chainMaker
};
