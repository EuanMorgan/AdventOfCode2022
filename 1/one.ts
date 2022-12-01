// Advent of Code - Day One
const input = await Deno.readTextFile('./input.txt');

const lines = input.split('\n\n');

const allTotals = [];
let highest = 0;
// console.log(lines.slice(0, 10));
// Loop through each line and add up the values
for (const line of lines) {
  // console.log(line);
  const lines = line.split('\n');

  const sum = lines.reduce((acc, cur) => acc + Number(cur), 0);
  if (sum > highest) {
    highest = sum;
  }
  allTotals.push(sum);
}

console.log(`Part One: Highest Total = ${highest}`);

const topThree = allTotals
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((acc, cur) => acc + cur, 0);

console.log(`Part Two: Top Three Totals = ${topThree}`);
