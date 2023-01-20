const data = "data.txt";
const example = 'example.txt';
const fs = require('fs');
const input = fs.readFileSync(data, 'utf-8').split('');
//console.log(input);
const resultPart1 = input.reduce((acc, curr) => curr==='(' ? acc+1 : acc-1, 0);
console.log(resultPart1);