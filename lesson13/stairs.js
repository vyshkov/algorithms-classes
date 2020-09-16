function stairs(n) {
    if (n === 1) {
        return 1;
    }

    if (n === 2) {
        return 2
    }

    return stairs(n - 1) + strais(n - 2);
}


const stairsBottom = n => {
    if (n === 1) {
        return 1;
    }

    if (n === 2) {
        return 2;
    }

    let a = 1;
    let b = 2;
  
    for (let i = 3; i <= n; i++) {
      let res = a + b;

      a = b;
      b = res;
    }
  
    return a;
}; // O(n)