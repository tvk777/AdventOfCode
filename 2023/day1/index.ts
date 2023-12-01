// to run file use: ts-node index.ts
import { example, example2, data } from "./data";

const transformData = (data: string): string[] => data.split(/\n/);

const testInput: string[] = transformData(example);
const testInput2: string[] = transformData(example2);
const input: string[] = transformData(data);

//Part 1
const findFirstLastDigits = (line: string): string => {
  const reverseLine: string = line.split("").reverse().join("");
  const regEx: RegExp = /\d/;
  const firstDig: string = line[line.search(regEx)];
  const lastDig: string = reverseLine[reverseLine.search(regEx)];
  return `${firstDig}${lastDig}`;
};

const resultPart1: number = input
  .map((i: string) => findFirstLastDigits(i))
  .reduce((acc: number, cur: string) => acc + Number(cur), 0);
//console.log(resultPart1);

//Part 2
const numberStrings = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const convertSpeledNumberToNumber = (string: string) => {
  if (Number.isInteger(+string)) return +string;
  const index = numberStrings.indexOf(string);

  if (index !== -1) return index + 1;

  return 0;
};

const getFirstAndLastNumberFromString = (str: string) => {
  const regexResult = str.matchAll(
    /(?=(one|two|three|four|five|six|seven|eight|nine|\d))/gi
  );

  if (!regexResult) return 0;

  const matches = [...regexResult];

  const [firstNumber, lastNumber] = [
    matches[0][1],
    matches[matches.length - 1][1],
  ].map(convertSpeledNumberToNumber);

  const result = Number(`${firstNumber}${lastNumber}`);
  return result;
};

const resultPart2 = (input: string[]) => {
  return input
    .map(getFirstAndLastNumberFromString)
    .reduce((acc: number, cur: number) => acc + cur, 0);
};

console.log(resultPart2(input));
