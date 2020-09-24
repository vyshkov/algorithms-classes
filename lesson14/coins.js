function coins(amount = 33, nominals = [3, 5, 25, 50]) {
    const res = []
    for (let i = nominals.length - 1; i >= 0; i--) {
        let count = Math.floor(amount / nominals[i]);
        if (count >= 1) {
            amount -= count * nominals[i];
            res.push({ coins: nominals[i], count });
        }
    }
    return res;
}


function coinsRecursive(amount = 33, nominals = [1, 5, 25, 50]) {
    if (amount <= 0) return [];
    if (nominals[0] > amount) return { length: Infinity }

    let min = { length: Infinity };

    for(let curr of nominals) {
        if (curr <= amount) {

           const rest = coinsRecursive(amount - curr, nominals);

           if (rest.length !== Infinity) {
                let candidate = [ curr, ...rest ];
            
                if (candidate.length < min.length) {
                    min = candidate;
                }
           }
        }
    }

    return min;
}


function coinsDP(amount = 33, nominals = [1, 5, 25, 50]) {
    const cache = [[]];

    for(let curr of nominals) {
        for(let i = 1; i <= amount; i++) {
            let min = { length: Infinity };

            if (curr <= i) {
                let rest = cache[i - curr];
                
                if (rest.length + 1 < min.length) {
                    min = [curr, ...rest];
                }
            }

            if (!cache[i] || cache[i].length > min.length) {
                cache[i] = min;
            }
        }
    }

    console.log(cache);

    return cache[amount];
}

//console.log(coins(6, [3, 5])); [curr, ...rest]
//console.log(coinsDP(45, [1, 3, 5, 15, 25, 50]));
//console.log(coinsDP(9, [1, 3, 5]));


// AABBBABABABABAAABAAABBAAABBBBBAABBBBAA
// ['AABB', 'BA', 'AAAAAAAABBBBBBBBB']

function randomize(arr = ['Ruslan Levkov','Oleksii Popov', 'Roman Denysiuk', 'Maksym Kondzera', 'Serhii Lesnik' ,'Ievgen Pavlenko']) { 
    let ind = Math.round(Math.random() * (arr.length -  1));

    console.log('And the winner is: ');
    setTimeout(() => {
        console.log('And the winner is: ' + arr[ind]);
    }, 10000)
}

randomize();