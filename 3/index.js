import fs from 'fs';

const input = fs.readFileSync('input.txt', 'utf-8');

const rucksacks = input.replace(/(\r)/, '').split('\n');

let total = 0;

for (let sack of rucksacks) {
  sack = sack;
  let half = sack.length / 2;
  let r1 = sack.slice(0, half).split('');
  let r2 = sack.slice(half);

  const match = r1.find(item => r2.includes(item));

  // if uppercase
  if (match === match.toUpperCase()) {
    // It's uppercase
    total += match.charCodeAt(0) - 38;
  } else {
    // It's lowercase
    total += match.charCodeAt(0) - 96;
  }
}

console.log(`Part One: ${total}`);

// Group the rucksacks into groups of 3
const groups = [];
for (let i = 0; i < rucksacks.length; i += 3) {
  groups.push(rucksacks.slice(i, i + 3));
}

let total2 = 0;

for (let group of groups) {
  const [r1, r2, r3] = group;
  const match = r1
    .split('')
    .find(item => r2.includes(item) && r3.includes(item));
  // if uppercase
  if (match === match.toUpperCase()) {
    // It's uppercase
    total2 += match.charCodeAt(0) - 38;
  } else {
    // It's lowercase
    total2 += match.charCodeAt(0) - 96;
  }
}

console.log(`Part Two: ${total2}`);
