// to run file use: ts-node index.ts
import { example, data } from "./data";

const transformData = (data: string): string[][] =>
  data.split(/\n/).map((i) => i.split(";"));

const sumNumbers = (a:number, b:number):number => a+b;  

const testInput: string[][] = transformData(example);
const input: string[][] = transformData(data);

const MAX_RED = 12;
const MAX_GREEN = 13;
const MAX_BLUE = 14;

const regExRed: RegExp = /\d+\sred/;
const regExGreen: RegExp = /\d+\sgreen/;
const regExBlue: RegExp = /\d+\sblue/;

const solutionPart1 = (input: string[][]): number => {
  const possibleGames: number[] = [];
  input.forEach((game, index) => {
    let isPossible = true;

    game.forEach((round) => {
      const blue = round.match(regExBlue);
      const green = round.match(regExGreen);
      const red = round.match(regExRed);

      const matchResultBlue = blue && blue[0].match(/\d+/);
      const matchResultGreen = green && green[0].match(/\d+/);
      const matchResultRed = red && red[0].match(/\d+/);

      const blueCount: number = matchResultBlue ? +matchResultBlue : 0;
      const greenCount: number = matchResultGreen ? +matchResultGreen : 0;
      const redCount: number = matchResultRed ? +matchResultRed : 0;

      if (blueCount > MAX_BLUE || greenCount > MAX_GREEN || redCount > MAX_RED)
        isPossible = false;
    });

    if (isPossible) possibleGames.push(index + 1);
  });
  return possibleGames.reduce(sumNumbers, 0);
};

//console.log(solutionPart1(input));

const solutionPart2 = (input: string[][]): any => {
  const games: number[] = [];

  input.forEach((game) => {
    let maxRed: number = 0;
    let maxGreen: number = 0;
    let maxBlue: number = 0;

    game.forEach((round) => {
      const red = round.match(regExRed);
      const green = round.match(regExGreen);
      const blue = round.match(regExBlue);

      const matchResultRed = red && red[0].match(/\d+/);
      const matchResultGreen = green && green[0].match(/\d+/);
      const matchResultBlue = blue && blue[0].match(/\d+/);

      const redCount: number = matchResultRed ? +matchResultRed : 0;
      const greenCount: number = matchResultGreen ? +matchResultGreen : 0;
      const blueCount: number = matchResultBlue ? +matchResultBlue : 0;

      if (redCount > maxRed) maxRed = redCount;
      if (greenCount > maxGreen) maxGreen = greenCount;
      if (blueCount > maxBlue) maxBlue = blueCount;
    });
    games.push(maxRed * maxGreen * maxBlue);
  });
  return games.reduce(sumNumbers, 0);
};

console.log(solutionPart2(input));
