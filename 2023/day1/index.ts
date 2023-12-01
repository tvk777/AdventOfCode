import {example, data} from './data.js'

const transformData = (data:string): string[] => data.split(/\n/);

const testInput: string[] = transformData(example);
const input: string[] = transformData(data);

const findFirstLastDigits = (line: string):string => {
const reverseLine: string = line.split('').reverse().join('');
const regEx: RegExp = /\d/;
const firstDig: string = line[line.search(regEx)];
const lastDig: string = reverseLine[reverseLine.search(regEx)];
return `${firstDig}${lastDig}`;
}


const resultPart1: number = input.map((i: string) => findFirstLastDigits(i)).reduce((acc: number, cur: string) => acc+Number(cur), 0);

console.log(resultPart1);


