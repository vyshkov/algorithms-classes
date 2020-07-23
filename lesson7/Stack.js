const { LinkedList } = require('../lesson6/LinkedList');

class Stack extends LinkedList {
    peak() {
        if (!this.tail) {
            return undefined;
        }
        return this.tail.data;
    }
}

module.exports = Stack;