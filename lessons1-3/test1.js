function test(n) {
    while (n > 0) {
        n = n >>> 1;
    }
    return true;
}

function test1(n) {
    console.log('inside function');
    if (n === 1) return 1;
    return n * test1(n - 1);
}

test1(3);
/*o (n ^2 )
function test2(n) {
    let res = 1;
    for(let i = n; i > n; i--) {
        res *= n
    }
    return res;
}

*/

// time complexity = O(n ^ 2)
// space complexity = O(n)
function space(n) {
    let res = null;

    for (let i = n; i > n; i--) {
        res = new Array(n).fill(i);
    }
    return res;
}

/*
 *  Input: ["h","e","l","l","o"]
 *  Output: ["o","l","l","e","h"]
 */
// time complexity O(n)
// space complexity O(1)
function reverseString(s) {
    // in-place
    for (let index = 0; index < s.length >>> 1; index++) {
        // n
        let temp = s[index];
        s[index] = s[s.length - 1 - index];
        s[s.length - 1 - index] = temp;
    }
    return s;
}

function reverse3(s) {
    var n = s.length - 1;
    for (var i = 0; i <= s.length; i++) {
        // if (n <= i){
        //     break;
        // }
        var temp = s[i];
        s[i] = s[n];
        s[n] = temp;
        n--;
    }
    return s;
}

function reverseString2(s) {
    return s.reverse();
}

let test2 = ['a', 'b', 'c', 'd', 'e'];

//console.log(reverse3(test2)); // ['c', 'b', 'a'];

/*
 *  Input: 123
 *  Output: 6
 */

// time => O(4n) => O(n)
// space => O(n)

function calc(n) {
    return n
        .toString() // O(n)
        .split('') // O(n)
        .map(Number) // O(n)
        .reduce((acc, cur) => acc + cur, 0); // O(n)ar
}

// time complexity => O(n)
// space => O(1)
function calc(n) {
    // 123 % 10 => 3
    let acc = 0;
    while (n > 0) {
        let last = n % 10;
        acc += last;
        //123 => 12
        n -= last;
        n /= 10;
    }

    return acc;
}

console.log(calc(123));

// time complexity => O(n log n + n) => n log(n)
// space complexity => O(1)
function findMissing(arr = [1, 2, 3, 6, 7, 8, 9, 5, 10]) {
    arr = arr.sort((a, b) => a - b); // n log(n)
    console.log(arr);
    for (let index = 0; index < arr.length - 2; index++) {
        // n
        const element = arr[index];
        const element2 = arr[index + 1];
        if (element2 - element != 1) {
            return element + 1;
        }
    }
}

console.log(findMissing());

// O(n)
// O(1)
const findMissingNumber = (arr) => {
    const n = arr.length + 1; // 1
    const expectedSum = (n * (n + 1)) / 2; // 1
    const actualSum = arr.reduce((cur, acc) => cur + acc, 0); // n

    return expectedSum - actualSum; // 1
};
console.log(findMissingNumber([1, 2, 3, 6, 7, 8, 9, 5, 10]));

/* Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. 
No two values have the same number of occurrences.
*/

/*
Input: arr = [1,2]
Output: false
*/

// n + k => n
// k + k => k
var uniqueOccurrences = function (arr = [1, 2, 2, 1, 1, 3]) {
    const map = {}; // 1

    arr.forEach((el) => {
        // k
        if (map[el]) {
            map[el]++;
        } else {
            map[el] = 1;
        }
    });

    console.log(map);

    const seen = {}; // 1

    const values = Object.values(map); // k
    for (let ch of values) {
        // k
        if (seen[ch]) {
            return false;
        } else {
            seen[ch] = true;
        }
    }

    return true;
};

console.log(uniqueOccurrences());
