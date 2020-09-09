function nthFibonacci(n) {
    if (n <= 1) return n;
    return nthFibonacci(n - 1) + nthFibonacci(n - 2);
}  // O(2^n)


// 0 1 1 2 3 5 8 ...

//   5
//  4  3
// 3 2  2 1


function nthFibonacciTop(n, cache = {}) {
    if (n <= 1) return n;

    if (cache[n] !== undefined) {
        return cache[n];
    } 

    const res =  nthFibonacciTop(n - 1, cache) + nthFibonacciTop(n - 2, cache);
    cache[n] = res;
    return res
} // O(n)

// 0 1 1 2 3 5 8 ...
const getFibonacciBottom = n => {
    let a = 0;
    let b = 1;
  
    for (let i = 0; i < n; i++) {
      let res = a + b;

      a = b;
      b = res;
    }
  
    return a;
}; // O(n)

console.log(nthFibonacci(43))
console.log(nthFibonacciTop(43))
console.log(getFibonacciBottom(43))