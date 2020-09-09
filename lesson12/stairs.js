function stairs(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (n === 3) return 4;

    return stairs(n - 1) + stairs(n - 2) + stairs(n - 3);
}



// base case (1, 2 stairs)
// general case n = |N -1| + |N - 2|


// 0 1 1 2 3 5 8 ...
const stairsBottom = n => {
    let a = 1;
    let b = 1;
  
    for (let i = 0; i < n; i++) {
      let res = a + b;

      a = b;
      b = res;
    }
  
    return a;
}; // O(n)