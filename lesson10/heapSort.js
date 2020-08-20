const Heap = require('./Heap');

function heapSort(arr = []) { // n log n
    const result = [];
    const heap = new Heap(arr);

    while(heap.data.length) {
        result.push(heap.pop());
    }

    return result;
}

console.log(heapSort([1,-99,0,66.2,111,5]))