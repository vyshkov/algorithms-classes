const { LinkedList } = require('../lesson6/LinkedList');

class Queue extends LinkedList {
    enqueue(value) { // O(1)
        return this.push(value);
    }
    dequeue() { // O(1)
        return this.shift();
    }
}

module.exports = Queue;