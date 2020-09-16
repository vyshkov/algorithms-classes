function drop(floors = 10, eggs = 2, cache) {


    // case 1 => 1 floor;


    if (floors < 2) {
        return floors;
    }

    if (eggs === 1) {
        return floors;
    }


    let min = Infinity;

    for(let i = 1; i <= floors; i++) {
        const candidate = 1 + Math.max(drop(i - 1, eggs - 1), drop(floors - i, eggs));
        min = Math.min(min, candidate);
    }

    return min;
    
}

function dropDP(floors = 10, eggs = 2) {

    const cache = Array.from({ length: eggs + 1 }, () => []);

    for(let i = 0; i < floors; i++) {
        cache[1][i] = i;
    }

    for( let j = 1; j <= eggs; j++) {
        cache[j][1] = 1;
        cache[j][0] = 0;
    }

    console.log(cache);

    for(let j = 2; j <= eggs; j++) {
        for(let i = 2; i <= floors; i++) {
            cache[j][i] = Infinity;

            for(let k = 1; k <= i; k++) {

                const candidate = 1 + Math.max(cache[j - 1][k - 1], cache[j][i - k]);
                cache[j][i] = Math.min(cache[j][i], candidate);
            }

        }
    }
    return cache[eggs][floors];    
}

//console.log(drop());
console.log(dropDP(1000, 5));
