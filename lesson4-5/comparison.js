const {
    bubbleSort,
    selectionSort,
    insertionSort,
    generateRandomArray,
    checkTime,
    quickSort,
    mergeSort,
    countingSort,
} = require('./sorts');

let testArray = generateRandomArray(50000);
//console.log(checkTime(bubbleSort, [[...testArray]], 'bubbleSort').runningTime);

function printResults(fn, testArray) {
    const results = checkTime(fn, [[...testArray]]);
    console.log(fn.name, results.runningTime);
}

printResults(insertionSort, testArray);
printResults(selectionSort, testArray);
printResults(quickSort, testArray);
printResults(mergeSort, testArray);
printResults(countingSort, testArray);
/*

[
    { name: 'hello', data: 12234 },
    { name: 'test' },
    { name: 'hello', data: 346346 }
]


[
    { name: 'hello', data: 12234 },
    { name: 'hello', data: 346346 },
    { name: 'test' },
]

[
    { name: 'hello', data: 346346 }
    { name: 'hello', data: 12234 },
    { name: 'test' },
]
*/
