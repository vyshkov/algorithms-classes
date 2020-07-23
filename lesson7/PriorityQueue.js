class PriorityQueue {
    
    constructor() {
        this.queue = [];
    }

    enqueue(data, priority) { // n log(N)
        this.queue.push({ data, priority });
        this.queue.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        if (!this.queue.length) {
            return;
        }
        return this.queue.shift().data;
    }

}

const queue = new PriorityQueue();
queue.enqueue('hello', 10);
queue.enqueue('worlds', 1);
queue.enqueue('0', 1);
queue.enqueue('test', 100);

console.log(queue.dequeue()); // 'worlds';
console.log(queue.dequeue()); // '0';
console.log(queue.dequeue()); // 'hello';
console.log(queue.dequeue()); // 'test';