const Stack = require('./Stack');

const openBrackets = ['(', '{', '['];
const closeBrackets = [')', '}', ']'];

const openBracketsMap = {
    '(': 0, '{': 1, '[': 2,
};

const closeBracketsMap = {
    ')': 0, '}': 1, ']': 2,
};

function testBrackets(str = '((()))') { // time complexity = O(n)
    const symbols = str.split(''); // O(n)
    const stack = new Stack(); // O(1)
    
    for(let i = 0; i < symbols.length; i++) { // O(n)
        const symbol = symbols[i];

        if (openBracketsMap[symbol] !== undefined) {
            stack.push(symbol);
        } else {
            const peak = stack.peak();
            if (openBracketsMap[peak] === closeBracketsMap[symbol]) {
                stack.pop()
            } else {
                stack.push(symbol);
            }
        }
    }

    return stack.length === 0;
} // [(]]

console.log(testBrackets('()')) // true
console.log(testBrackets('()(')) // false
console.log(testBrackets('[{()}]')) // true
console.log(testBrackets('[{()]}')) // false
