const { swap } = require('../lesson4-5/sorts');

class Heap {
    /*
        1 (0)
       /  \
      7 (1)  100 (2)
      /
      22 (3)
      
      [7, 1, 100, 22]
                   3
                   (3 - 1)/2 => 1

             (1 - 1)/ 2 => 0

    */
    constructor(data = []) {
        this.buildHeap(data)
    }

    //
    push(val) { 
        // push new element to the end and 'bubbleUp' it
        this.data.push(val);
        this.bubbleUp();
    }
    
    // O(log(n))
    bubbleUp(idx = this.data.length - 1) { 
        // recursive or iterative 
        const parentIndex = Math.floor((idx - 1) / 2);

        if (this.data[parentIndex] > this.data[idx]) {
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

        return this.data[0];
    }

    pop() {

        /* 
             9 
           /  \
          10  11

          minIndex = idx (0)

          leftChild = 1
          rightChild = 2

          if (data[leftChild] < data[minIndex]) minIndex = leftChild
          if (data[rightChild] < data[minIndex]) minIndex = rightChild

          minIndex !== ind => swap => recursive call (minIndex)
           
          2 => return
        */

        // return top element, place last element of the data on the top and 'shift down' it

        if (this.data.length === 1) {
            return this.data.pop();
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
        let minIdx = idx;
        const leftChildIdx = idx * 2 + 1;
        const rightChildIdx = idx * 2 + 2;

        if(this.data.length > leftChildIdx && this.data[leftChildIdx] < this.data[minIdx]) {
            minIdx = leftChildIdx;
        }
        if(this.data.length > rightChildIdx && this.data[rightChildIdx] < this.data[minIdx]) {
            minIdx = rightChildIdx;
        }

        if(minIdx !== idx) {
            swap(this.data, minIdx, idx);
            this.shiftDown(minIdx);
        }
    }

    buildHeap(arr = []) {
        // build a heap from the array
        this.data = arr;
        for(let i = 0; i < this.data.length / 2; i++) {
            this.shiftDown(i)
        }
    }

    print() { console.log(this.data) }
}

module.exports = Heap