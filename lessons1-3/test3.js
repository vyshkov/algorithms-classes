Array.prototype.findCustom = function (el) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === el) {
            return i;
        }
    }
    return -1;
};

//console.log([7,6,1,3,100,12].findCustom(100)) // 4

// O(n)
// O(1)
Array.prototype.findCustomRec = function (comparator = () => true, i = 0) {
    if (comparator(this[i])) {
        return i;
    } else if (i < this.length) {
        return this.findCustomRec(comparator, i + 1);
    } else {
        return -1;
    }
};

//console.log([7,6,1,3,100,12].findCustomRec(el => el > 10)) // 4

//nlog(n)
function binarySearchRec(arr = [], target, a = 0, b = arr.length - 1) {
    // log(n)
    if (a > b) {
        // O(1)
        return -1; // O(1)
    }

    const index = (a + b) >>> 1; // O(1)

    if (arr[index] === target) {
        // O(1)
        return index;
    } else if (arr[index] < target) {
        // O(1)
        return binarySearchRec(arr, target, index + 1, b); // O(log n)
    }

    return binarySearchRec(arr, target, a, index - 1);
}
//                                              a b
//console.log(binarySearchRec([1,2,3,4,5,10, 100, 500], 1)) //6

function binarySearch(arr = [], target) {
    // O(log (n)), O(1)
    let a = 0;
    let b = arr.length - 1;

    while (a <= b) {
        const index = (a + b) >>> 1;

        if (arr[index] === target) {
            return index;
        } else if (arr[index] < target) {
            a = index + 1;
        } else {
            b = index - 1;
        }
    }

    return -1;
}

//                                              a b
//console.log(binarySearch([1,2,3,4,5,10, 100, 500], 501)) //6

function binarySearchLeftmost(arr, target) {
    let a = 0;
    let b = arr.length - 1;

    while (a < b) {
        const index = (a + b) >>> 1;
        if (arr[index] < target) {
            a = index + 1;
        } else {
            b = index;
        }
    }

    return arr[b] === target ? b : -1;
}

//         i
// console.log(
//     binarySearchLeftmost([1,2,2,2,2,2,3,3,3,4,5], 6) // 1
// );

function findRotatedIndex(arr = [3, 4, 5, 6, 7, 1, 2]) {
    // log(n), O(1)
    let a = 0;
    let b = arr.length - 1;
    let prev = arr[0];

    while (a < b) {
        const index = (a + b) >>> 1;
        if (arr[index] > prev) {
            a = index + 1;
        } else {
            b = index;
        }
        prev = arr[index];
    }

    if (b < arr.length - 1) {
        return b;
    }

    return arr[0] < arr[b] ? 0 : b;
}

console.log(findRotatedIndex([3, 4, 5, 6, 7, 8, 10, 1000, -10, 1, 2])); //5
console.log(findRotatedIndex([-10, 1, 2, 3, 4, 5, 6, 7, 8, 10, 1000])); //5
