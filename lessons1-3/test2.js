/* Understand the Problem
 * Explore Concrete Examples
 * Break It Down
 * Writy a naive solution
 * Solve/Simplify
 * Look Back and Refactor
 */

// Input: 121
// Output: true
//
// Input: -121
// Output: false
//
// Input: 10
// Output: false
function isPalindrome(number) {
    const reversed = number
        .toString() // O(n), O(n)
        .split('') // O(n)
        .reverse() // O(n)
        .join(); // O(n)

    return number.toString() === reversed; // O(n)
}

// O(n), O(1)
function isPalindrome(number) {
    // 121

    // while loop
    // take last digit
    // put it in reversed nuber
    // multiply reversed 10
    // number / 10

    let reversed = 0; // O (1)
    let temp = number; // O (1)

    // 123
    while (temp > 0) {
        // // O (n)
        let lastNumber = temp % 10; // O (1)
        reversed *= 10; // O (1)
        reversed += lastNumber; // O (1)
        temp -= lastNumber; // O (1)
        temp = temp / 10; // O (1)fo
    }

    console.log({ number, reversed, result: number === reversed });

    return number === reversed; // O(1)
}

//console.log(isPalindrome(123));

/*

 1  2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18  
 *  *  *  *  *  *  *  *  *  *   *   *   *   *   *   *   *   *
    *     *     *     *     *       *       *       *       * 
       *        *        *          *           *           *
          *           *             *               *
             *              *                   *
                *                   *                       *
                   *                        *
                      *                             * 
                         *                                  *
                            *    
                               *
                                  *
                                    *
                                       *
                                          *
                                             *
                                               *
                                                  *
                                                    *  
                                                        *
                                                             *           
1, 4, 9, 16 => n ^ 2

                            */

function is100hDoorOpened(n) {
    // time O(n ^ 2), space O(n)
    let doors = new Array(n + 1).fill(false); // O(n)

    for (let i = 1; i < doors.length; i++) {
        // O(n)
        for (var j = 1; j < doors.length; j++) {
            // O(n)
            if (j % i === 0) {
                doors[j] = !doors[j];
            }
        }
    }

    return doors[n];
}

function is100hDoorOpened2(n) {
    // O(1)
    let sqrt = Math.sqrt(n); // O(1)
    return Number.isInteger(sqrt); // O(1)
}

//console.log(is100hDoorOpened2(99));

// "abcd" => "cdba" FALSE

// 1 abcd => dabc
// 2 dabc => cdab

// "1234" => "2341" TRUE

// O(n)
function isRotated(str1, str2) {
    const check = (str1, str2) => {
        return str1.length !== str2.length;
    };

    let temp = str1; // O(1)
    for (let i = 0; i < str1.length; i++) {
        // O(n)
        temp = temp.slice(-1) + temp.slice(0, -1); // O(n)
        if (temp === str2) {
            return true;
        } // O(1)
    }

    return false;
}

// abcd => abcdabcd
// dabc
function isRotated2(str1, str2) {
    let double = str1 + str1;
    return double.includes(str2) && str1.length === str2.length;
}

// console.log(isRotated2('1234', '2341')) // true  12341234  2341
// console.log(isRotated2('1234', '2314')) // false

// console.log(isRotated2('abba', 'baab')) // false abba => aabb => baab

function containsAll2(arr1 = [1, 2, 2, 3], arr2 = [2, 1, 2, 3]) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    const toMap = (arr) => {
        let map = {};
        for (let el of arr) {
            map[el] = (map[el] || 0) + 1;
        }
        return map;
    };
    var map1 = toMap(arr1);
    var map2 = toMap(arr2);
    return Object.keys(map1).every((el) => map1[el] === map2[el]);
}

//console.log(containsAll2())

function containsAll(arr1 = [1, 2, 2, 3], arr2 = [2, 1, 6, 3]) {
    // n log n, O(n)
    let s1 = arr1.sort(); // n log n
    let s2 = arr2.sort(); // n log n

    return s1.every((el, index) => el === s2[index]); // n
}

function findPair(arr = [1, 2, 4, 10], x = 6) {
    // O(n^2)
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === x && i !== j) {
                return { a: arr[i], b: arr[j] };
            }
        }
    }
    return null;
} // [2,4]

// 1, 2, 4, 10
//    i  j
function findPair2(arr = [1, 2, 3, 4, 10], x = 7) {
    // O(n^2)
    let i = 0;
    let j = arr.length - 1;
    let sum;

    while (i < j) {
        sum = arr[i] + arr[j]; // 5
        if (sum === x) {
            return [arr[i], arr[j]];
        } else if (sum > x) {
            j--;
        } else {
            i++;
        }
    }

    return null;
} // [2,4]

//console.log(findPair2());

/**
 * 	
Input  : arr = [100, 200, 300, 400]
         k = 2
Output : 700
 */

function maxSum(arr = [100, 200, 1000, 300, 400], k = 1000) {
    let maxSum = arr.slice(0, k).reduce((acc, cur) => acc + cur, 0);
    let sum = maxSum;

    for (var i = k; i < arr.length; i++) {
        sum = sum + arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
}

//console.log(maxSum());

// 1 1 2 3 5 8

//    4
//   / \
//    3  2
//   / \  \
//  2  1  1
function fib(n, cache = {}) {
    if (cache[n] !== undefined) {
        return cache[n];
    }

    if (n < 2) {
        return 1;
    } else {
        let res = fib(n - 1, cache) + fib(n - 2, cache);
        cache[n] = res;
        return res;
    }
}

console.log(fib(5)); // 2^n

const fib = (n) => {
    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        [a, b] = [b, a + b];
    }

    return b;
};
