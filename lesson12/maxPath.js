const testData = [
    [0, 2, 1, 1],
    [1, 5, 5, 1],
    [3, 1, 5, 5],
    [40, 1, 1, 1],
];

/*

    [0, { sum: 2, from=[0, 0] }, { sum: 3, [0, 1] }, { sum: 4, [0, 2] }],
    [{ SUM: 1, [0,0] }, { sum: 7 [0, 1]}, { sum: 12 [1, 1]}, { sum: 13, from: [1, 2] }],
    [3, 1, 5, 5],
    [4, 1, 1, 1],

*/

function findMaxPath(data) {
    const dp = Array.from({ length: data.length }, () => Array.from({ length: data[0].length}, () => 0));

    for(let i = 0; i <  data.length; i++) {
        for(let j = 0; j <  data[0].length; j++) {

            let from = null;
            let maxSum = 0;


            // take left

            // if left.sum > maxSum => maxSum = left.sum, from = [i, j - 1]

            if(j > 0) {
                const left = dp[i][j - 1];
                
                if (left.sum >= maxSum) {
                    maxSum = left.sum;
                    from = [i, j - 1];
                }
            }

            if(i > 0) {
                const top = dp[i - 1][j];
                
                if (top.sum >= maxSum) {
                    maxSum = top.sum;
                    from = [i - 1, j];
                }
            }
            
        
            dp[i][j] = { from, sum: data[i][j] + maxSum }
        }
    }


    const res = [[data.length - 1, data[0].length - 1]];
    let currentPoint = dp[data.length - 1][data[0].length - 1];

    while (currentPoint.from !== null) {
        res.push(currentPoint.from);
        currentPoint = dp[currentPoint.from[0]][currentPoint.from[1]];
    }

    return res.reverse();
}

console.log(findMaxPath(testData));