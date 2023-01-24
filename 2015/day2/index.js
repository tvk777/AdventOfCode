const data = "data.txt";
const example = 'example.txt';
const fs = require('fs');
const input = fs.readFileSync(data, 'utf-8').split(/\r\n/);
const dimentions = input.map(i => i.split('x').map(Number).sort((a, b) => a - b));
//console.log(dimentions);

const resultPart1 = dimentions.reduce((acc, curr) => {
    const first = curr[0] * curr[1];
    const second = curr[1] * curr[2];
    const third = curr[0] * curr[2];
    const min = Math.min(first, second, third);
    return acc + 2 * first + 2 * second + 2 * third + min;
}, 0);

console.log(resultPart1);

const resultPart2 = dimentions.reduce((acc, curr) => {
    const bow = curr[0] * curr[1] * curr[2];
    const ribbon = 2 * curr[0] + 2 * curr[1];
    return acc + bow + ribbon;
}, 0);

console.log(resultPart2);


