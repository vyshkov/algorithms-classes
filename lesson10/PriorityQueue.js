const { swap } = require('../lesson4-5/sorts');


class PriorityQueue {

    constructor(data = []) {
        this.buildHeap(data)
    }

    enqueue(value, priority) { 
        // push new element to the end and 'bubbleUp' it
        this.data.push({ value, priority });
        this.bubbleUp();
    }
    
    // O(log(n))
    bubbleUp(idx = this.data.length - 1) { 
        // recursive or iterative 
        const parentIndex = Math.floor((idx - 1) / 2);

        if (this.data[parentIndex] && this.data[parentIndex].priority < this.data[idx].priority) {
            swap(this.data, parentIndex, idx);

            if (parentIndex === 0) {
                return;
            }
            this.bubbleUp(parentIndex);
        }
    }
    

    // O(1)
    peak() {
        // get top element
        if(!this.data[0]) {
            return null;
        }
        return this.data[0].value;
    }

    dequeue() {
        if (this.data.length === 1) {
            return this.data.pop().value;
        }

        const result = this.peak();

        this.data[0] = this.data.pop();
        this.shiftDown(); //

        return result;
    }
    

    // maxHeapify/minHeapify
    // O(log n)
    shiftDown(idx = 0) {
        // if top element is not on his place - move it down
        let maxIndex = idx;
        const leftChildIdx = idx * 2 + 1;
        const rightChildIdx = idx * 2 + 2;

        if(this.data.length > leftChildIdx
            && this.data[leftChildIdx].priority > this.data[maxIndex].priority) {
            maxIndex = leftChildIdx;
        }
        if(this.data.length > rightChildIdx
            && this.data[rightChildIdx].priority > this.data[maxIndex].priority) {
            maxIndex = rightChildIdx;
        }

        if(maxIndex !== idx) {
            swap(this.data, maxIndex, idx);
            this.shiftDown(maxIndex);
        }
    }

    buildHeap(arr = []) {
        // build a heap from the array
        this.data = arr;
        for(let i = 0; i < this.data.length / 2; i++) {
            this.shiftDown(i)
        }
    }

}

const queue = new PriorityQueue();



const points = [[3, 2], [1,1], [-0.3, -0.4], [-2, -1]];


for(let point of points) {
    queue.enqueue(point, 1/Math.sqrt( point[0]**2 + point[1] **2 ));
}


console.log(queue.dequeue()) //!
console.log(queue.dequeue()) //hello

