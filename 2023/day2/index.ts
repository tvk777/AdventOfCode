// to run file use: ts-node index.ts
import { example, data } from './data';

const transformData = (data: string): string[][][] =>
  data.split(/\n/).map((i) => i.split(';').map((i) => i.split(',').map((i) => i.trim())));

const testInput: string[][][] = transformData(example);
const input: string[][][] = transformData(data);

console.log(testInput);

//const regExB: RegExp = /\d+\sblue/;
console.log('6 blue'.indexOf('blue'));
const MAX_BLUE = 14;
const MAX_GREEN = 13;
const MAX_RED = 12;

const solutionPart1 = (input: string[][][]): number[] => {
  const possibleGames: number[] = [];
  input.forEach((game, index) => {
    let isPossible = true;

    game.forEach((round) => {
      round.forEach((color) => {
        if(color.indexOf('blue')>0) {
            
        }
      });
    });

    if (isPossible) possibleGames.push(index + 1);
  });
  return possibleGames;
};

console.log(solutionPart1(testInput));
