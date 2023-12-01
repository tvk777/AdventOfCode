"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_js_1 = require("./data.js");
const transformData = (data) => data.split(/\n/);
const testInput = transformData(data_js_1.example);
const input = transformData(data_js_1.data);
//Part 1
const findFirstLastDigits = (line) => {
    const reverseLine = line.split('').reverse().join('');
    const regEx = /\d/;
    const firstDig = line[line.search(regEx)];
    const lastDig = reverseLine[reverseLine.search(regEx)];
    return `${firstDig}${lastDig}`;
};
const resultPart1 = input.map((i) => findFirstLastDigits(i)).reduce((acc, cur) => acc + Number(cur), 0);
//console.log(resultPart1);
//Part 2
const spelledOutToDigits = {
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9'
};
const substrings = '7pqrstsixteen'.match(/[\dA-Za-z]+/g);
console.log('qqq', substrings);
