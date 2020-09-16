function lcs(a = '', b = '') {

    let max = 0;
    let idx = 0;
    const cache = Array.from({ length: a.length + 1 }, () => []);

    for(let i = 1; i <= a.length; i++) {
        for(let j = 1; j <= b.length; j++) {
            if (a[i - 1] === b[j - 1]) {
                cache[i][j] = (cache[i - 1][j - 1] || 0) + 1;
                if (cache[i][j] > max) {
                    max = cache[i][j];
                    idx = i;
                }
            }            
        }
    }

    console.log(cache);
    console.log(max, idx);

    return a.slice( idx - max,  idx );
}

console.log(lcs('a12345sdABCDas', 'a12345567_ABCD_89')) // ABCD

//    '1234'
//     'a34bc'
