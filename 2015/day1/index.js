const data = "data.txt";
const example = 'example.txt';
const fs = require('fs');
const input = fs.readFileSync(data, 'utf-8').split('');
//console.log(input);
const resultPart1 = input.reduce((acc, curr) => curr === '(' ? acc + 1 : acc - 1, 0);
console.log(resultPart1);

let resultPart2 = 0;
let floor = 0;
for (let i = 0; i < input.length; i++) {
    if (input[i] === '(') floor += 1;
    if (input[i] === ')') floor -= 1;
    if (floor === -1) {
        resultPart2 = i + 1;
        break;
    }
}

console.log(resultPart2);

let base = null;
const result = input.reduce((acc, curr, index) => {
    if(acc===-1 && !base) {
        base = index;
    }
    if(curr === '(') return acc + 1; 
    if(curr === ')') return acc - 1;
    
}, 0);

console.log('part1', result);
console.log('part2', base);

