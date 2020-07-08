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
    if (i === j) return;

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

//      p
// 3 10 6 12 1 2

//   i
//             j

//     p
// 3 2 6 12 1 10

//     i
//          j


//     
// 3 2 1 12 6 10

//        i
//          j

//     
// 3 2 1 6 12 10


// Time comolexity
//[1,2,6,6,6,6,8,10]
function partition(arr = [], a = 0, b = arr.length - 1) { // O(n)
    const mid = (a + b) >>> 1;
    const pivot = arr[mid];

    while(a <= b) { // O(2n) => O(n)
        while(arr[a] < pivot) { // O(n)
            a++;
        }
        while(arr[b] > pivot) { // O(n)
            b--;
        }

        if (a <= b) {
            swap(arr, a, b);
            a++; b--;
        }
    }

    return a;
}

// call partition fn => pivot index
// recursive call 0, pivot index
// recursive call pivot index + 1, end
function quickSort(arr = [], a = 0, b = arr.length - 1) { // O(n * log(n)) ??? O(n ^ 2)
    if (a < b) { // n
        const p = partition(arr, a, b); 
        quickSort(arr, a, p - 1); // n => n - 1
        quickSort(arr, p, b); // => 1
    }
    return arr;
}



// [ 1, 10, 100, 1000, 100000, 1000000000 ]
//           i


// [ 2, 55, 61 ]
//               j

// res = [1, 2, 10, 55, 61, 100]


// [1, 2, 10, 55, 61, 100];

function merge(arr1 = [], arr2 = []) { // O(n)
    let res = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i++]);
        } else {
            res.push(arr2[j++]);
        }
    }

    // i = 5 / 100 , j = 5/5;
    
    while(i < arr1.length) {
        res.push(arr1[i++]);
    }

    while(j < arr2.length) {
        res.push(arr2[j++]);
    }

    return res;
}


// [ 10, 2 ]

// [10], [2]
// merge([10], [2]) => 2, 10


function mergeSort(arr = []) { // O(n * log(n)), O(n)

    // if length < 2 => arr

    // arr / 2 parts
    // merge 2 recusrsive mergeSort calls on both parts

    if(arr.length < 2) {
        return arr;
    }

    let middle = arr.length >>> 1;

    return merge( // log(n)
        mergeSort(arr.slice(0, middle)),
        mergeSort(arr.slice(middle))
    );
}

// [0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,2,2,2,0,2,2,2,1,0,......]
// [ 10, 5, 7 ] => [ 0, 0, 0, ..... 1,1,1,1,1,1,2,2,2,2,2,22,]

function countingSort(arr = []) { // O(kn) => k = unique elements, O(n) memory
    const count = [];
    for(let val of arr) {
        count[val] = count[val] ? count[val] + 1 : 1 
    }
    let res = [];
    for(let i = 0; i < count.length; i++) {
        let currentValCount = count[i];

        for(let j = 0; j < currentValCount; j++) {
            res.push(i);
        }
    }    
    return res;
}

console.log(countingSort([1,1,0,5,1,1,2,2,2,1,1]));


// [ 12, 22, 10, 5 ]
// [10],[],[12, 22],[],[],[],[5]...  => 10, 12, 22, 5
// [5], [10, 12], [22], [], [] ... => 5, 10, 12, 22

function radixSort(arr = []) {
    // find max count of digits in one number => k

    // for(i = 0; i < k; i++)
    //  for(j = 0; j < arr.length; j++)
    //    let digit = getKthDigit(arr[j]) // 123, k = 2 => 1,  k = 1 => 2, k = 0 => 3, k => 77 => 0
    //      buckets[digit].push(arr[j])
    //   for(buckets) => arr
    // return arr; 
}

let a = 123; // 3

function getCountOfDigits(num) { // O(1);
    return Math.floor(Math.log10(num)) + 1
}

// 123, 0 => 3, 1 => 2, 3 => 1, 4 => 0
function getNthDigit(num, index) {
    return Math.floor(num / Math.pow(10, index)) % 10
}

console.log('test', getNthDigit(123, 234234));

function getMaxCountOfDigitsInArray(arr = [11, 321, 55555, 12]) { // 5
    let max = 1;
    for(let val of arr) {
        max = Math.max( max, getCountOfDigits(val))
    }
    return max;
    // return arr.reduce((acc, curr) => Math.max(acc, getCountOfDigits(curr)), 1);
}


module.exports = {
    checkTime,
    generateRandomArray,
    swap,
    bubbleSort,
    selectionSort,
    insertionSort,
    quickSort,
    mergeSort,
    countingSort,
}