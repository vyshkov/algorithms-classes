const Stack = require('./Stack');
const Queue = require('./Queue');




class QueueWithStacks {

    constructor() {
        this.stack = new Stack();
    }

    // 1 -> 2 -> 3
    enqueue(data) {
        this.stack.push(data);
    }

    // 
    dequeue() {
      const temp = new Stack();

      while (this.stack.length) {
          temp.push(this.stack.pop());
      }

      const value = temp.pop();

      while (temp.length) {
          this.stack.push(temp.pop());
      }
      
      return value;
    }

}


// const queue = new QueueWithStacks();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);

// console.log(queue.dequeue()); // 1
// console.log(queue.dequeue()); // 2
// console.log(queue.dequeue()); // 3
// console.log(queue.dequeue()); // 4


class StackWithQueues {
    constructor() {
        this.queue = new Queue();
    }

    // 1,2,3
    push(data) {
        this.queue.enqueue(data);
    }

    // 3 -> 2 -> 1
    pop(){
        const temp = new Queue();

        while(this.queue.length - 1) {
            temp.enqueue(this.queue.dequeue());
        }

        const result = this.queue.dequeue();

        while(temp.length) {
            this.queue.enqueue(temp.dequeue());
        }

        return result;
    }

    pop2() {
        const count = this.queue.length - 1;

        for (let i = 0; i < count; i ++) {
            this.queue.enqueue(this.queue.dequeue())
        }

        return this.queue.dequeue();
    }
}


const stack = new StackWithQueues();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop2()); // 3
console.log(stack.pop2()); // 2
console.log(stack.pop2()); // 1