const { performance } = require('perf_hooks');

function checkTime(fn, args, name) {
    const t1 = performance.now();

    const result = fn.apply(null, args); // fn(...args)

    const t2 = performance.now();

    return {
        runningTime: t2 - t1,
        result,
        name,
    };
} // { runningTime: 10, name, result }

// O(n)
function generateRandomArray(length) {
    // n = 3 => [234,21,1]
    return Array.from({ length }, () => Math.floor(Math.random() * 100000));
}

const swap = (arr, i, j) => {
    const temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
};

// Time complexity O(n ^ 2)
// Space complexity O(1)
function bubbleSort(arr = []) {
    let didSwap = true;
    let i = 0;
    while (didSwap) {
        // n
        didSwap = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            // n
            if (arr[j] > arr[j + 1]) {
                // swap
                swap(arr, j, j + 1);
                didSwap = true;
            }
        }
        i++;
    }
    return arr;
}
//  i          m
// [1,100, 4, 0, 9]

// Time complexity O(n ^ 2)
// Space complexity O(1)
function selectionSort(arr) {
    // iterate from 0 to n
    // itrate from i to n
    // find minimum
    // swap i'th elemnt with minimum element

    for (let i = 0; i < arr.length - 1; i++) {
        // O(n)
        let minIndex = i;
        for (let j = i; j < arr.length; j++) {
            // O(n)
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        swap(arr, minIndex, i);
    }

    return arr;
}

//     j
// 6,7,1,1000

//   j
// 6,1,7,1000

// j
// 1,6,7,1000

// Time complexity O(n ^ 2)
// Space complexity O(1)
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            swap(arr, j - 1, j);
            j--;
        }
    }
    return arr;
}

let testArray = generateRandomArray(50000);
//console.log(checkTime(bubbleSort, [[...testArray]], 'bubbleSort').runningTime);
console.log(checkTime(selectionSort, [[...testArray]], 'selectionSort').runningTime);
console.log(checkTime(insertionSort, [[...testArray]], 'insertionSort').runningTime);

describe('Sorts testing', () => {
    it('should test bubbleSort', () => {
        expect(bubbleSort([3, 2, 100])).toEqual([2, 3, 100]);
        expect(bubbleSort([])).toEqual([]);
        expect(bubbleSort([1])).toEqual([1]);
        expect(bubbleSort([100, 1000, -100, -100, 1, 2, 3])).toEqual([
            -100,
            -100,
            1,
            2,
            3,
            100,
            1000,
        ]);
    });

    it('should test selectionSort', () => {
        expect(selectionSort([3, 2, 100])).toEqual([2, 3, 100]);
        expect(selectionSort([])).toEqual([]);
        expect(selectionSort([1])).toEqual([1]);
        expect(selectionSort([100, 1000, -100, -100, 1, 2, 3])).toEqual([
            -100,
            -100,
            1,
            2,
            3,
            100,
            1000,
        ]);
    });

    it('should test insertionSort', () => {
        expect(insertionSort([3, 2, 100])).toEqual([2, 3, 100]);
        expect(insertionSort([])).toEqual([]);
        expect(insertionSort([1])).toEqual([1]);
        expect(insertionSort([100, 1000, -100, -100, 1, 2, 3])).toEqual([
            -100,
            -100,
            1,
            2,
            3,
            100,
            1000,
        ]);
    });
});
