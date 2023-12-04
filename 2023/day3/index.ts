// to run file use: ts-node index
import { example } from "./data";

const transformData = (data: string): string[] => data.split(/\n/);

const testInput = transformData(example);

console.log(testInput);

const hasSymbol = (rows: string[], row: number, col: number): boolean => {
  // Check if the cell is within the boundaries of the schematic
  if (row >= 0 && row < rows.length && col >= 0 && col < rows[row].length) {
    const cell = rows[row][col];
    // Check if the cell contains a symbol (not a period)
    return cell !== ".";
  }
  return false;
};

const isAdjacentToSymbol = (rows: string[], i: number, j: number): boolean =>
  hasSymbol(rows, i - 1, j - 1) ||
  hasSymbol(rows, i - 1, j) ||
  hasSymbol(rows, i - 1, j + 1) ||
  hasSymbol(rows, i, j - 1) ||
  hasSymbol(rows, i, j + 1) ||
  hasSymbol(rows, i + 1, j - 1) ||
  hasSymbol(rows, i + 1, j) ||
  hasSymbol(rows, i + 1, j + 1);

const extractWholeNumber = (
  rows: string[],
  row: number,
  col: number
): string => {
    const regexDigit = /\d/;
    let wholeNumber = '';
  
    // Check the current cell and move left until a non-digit is encountered
    for (let i = col; i >= 0 && regexDigit.test(rows[row][i]); i--) {
      wholeNumber = rows[row][i] + wholeNumber;
    }
  
    // Check the cell to the right of the original position and move right until a non-digit is encountered
    for (let i = col + 1; i < rows[row].length && regexDigit.test(rows[row][i]); i++) {
      wholeNumber += rows[row][i];
    }
  return wholeNumber;
};

const markProcessedCells = (processedCells:Set<string>, rows:string[], row:number, col:number) => {
    const regexDigit = /\d/;

  // Mark the current cell as processed
  processedCells.add(`${row}-${col}`);

  // Check adjacent cells (including diagonals) for symbols
  for (let i = row - 1; i <= row + 1; i++) {
    for (let k = col - 1; k <= col + 1; k++) {
      if (regexDigit.test(rows[i]?.[k]) && !processedCells.has(`${i}-${k}`)) {
        markProcessedCells(processedCells, rows, i, k);
      }
    }
  }
  }
  

const resultPart1 = (rows: string[]): number => {
  let sum: number = 0;
  const processedCells:Set<string> = new Set();

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows[i].length; j++) {
      const currentChar = rows[i][j];
      // Check if the current character is a part number
      if (/\d/.test(currentChar) && !processedCells.has(`${i}-${j}`)) {
        if (isAdjacentToSymbol(rows, i, j)) {
          // Find the whole number and add it to the sum
          const wholeNumber = extractWholeNumber(rows, i, j);

          sum += parseInt(wholeNumber, 10);
          markProcessedCells(processedCells, rows, i, j);
        }
      }
    }
  }

  return sum;
};

const sumOfPartNumbers = resultPart1(testInput);
console.log("Sum of part numbers:", sumOfPartNumbers);
