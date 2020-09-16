const prices = [1,5,8,9,10, 17, 17, 20, 24, 30];

const cache = {}

function rodsRevenue(n, prices) {
    if (n === 0) {
        return 0;
    }

    // *****  10
    // **** * 9 + 1
    // *** ** 9 + 5
    // ** ** *
    // * ****

    let max = 0;

    for(let i = 0; i < n; i++) {
        // i = 0; prices[n - i - 1] = 10,  rodsRevenue(0, prices) = 0 => 10 , max = 10
        // i = 1; prices[n - i - 1] = 9,  rodsRevenue(1, prices) = 1 => 10 , max = 10
        // i = 1; prices[n - i - 1] = 8,  rodsRevenue(2, prices) = 5 => 13 , max = 13
        //                                    -> 2 + 0  => 5
        //                                    -> 1 + 1  => 2
        //                                    -> 0 + 2  => 5
        max = Math.max(max, prices[n - i - 1] + rodsRevenue(i, prices));
    }

    return max;
}

function rodsRevenueDP(n, prices) {
    const cache = [0]; // O(n)

    for(let i = 1; i <= n; i++) {

        let max = 0;

        for(let j = 0; j < i; j++) {
            let candidate = prices[i - 1 - j] + cache[j]; // 5 + 0, 1 + 1  
            max = Math.max(max, candidate);
        }

        cache[i] = max;
    }

    return cache[n];
}

console.log(rodsRevenueDP(6, prices));
console.log(rodsRevenue(6, prices));