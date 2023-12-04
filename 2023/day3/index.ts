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

const resultPart1 = (input: string[]): any => {
    
}
