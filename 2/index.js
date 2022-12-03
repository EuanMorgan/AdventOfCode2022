// read input.txt
const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');
// split input into array of lines
const lines = input.split('\n');

console.log(lines);
const scoreMap = {
  X: 1,
  Y: 2,
  Z: 3,
};

let score = 0;
for (const i of lines) {
  let turns = i.replace('\r', '').split(' ');
  if (turns[0] === 'A' && turns[1] === 'X') {
    // draw
    score += scoreMap.X + 3;
  }
  if (turns[0] === 'A' && turns[1] === 'Y') {
    // win
    score += scoreMap.Y + 6;
  }
  if (turns[0] === 'A' && turns[1] === 'Z') {
    // lose
    score += scoreMap.Z;
  }

  if (turns[0] === 'B' && turns[1] === 'X') {
    // lose
    score += scoreMap.X;
  }
  if (turns[0] === 'B' && turns[1] === 'Y') {
    // draw
    score += scoreMap.Y + 3;
  }
  if (turns[0] === 'B' && turns[1] === 'Z') {
    // win
    score += scoreMap.Z + 6;
  }

  if (turns[0] === 'C' && turns[1] === 'X') {
    // win
    score += scoreMap.X + 6;
  }
  if (turns[0] === 'C' && turns[1] === 'Y') {
    // lose
    score += scoreMap.Y;
  }
  if (turns[0] === 'C' && turns[1] === 'Z') {
    // draw
    score += scoreMap.Z + 3;
  }
}

console.log(score);

let score2 = 0;

const rpsMap = {
  A: 'Rock',
  B: 'Paper',
  C: 'Scissors',
};
const scoreMap2 = {
  Rock: 1,
  Paper: 2,
  Scissors: 3,
};

for (const i of lines) {
  let turns = i.replace('\r', '').split(' ');
  let opponentMove = rpsMap[turns[0]];
  console.log(opponentMove);
  if (opponentMove === 'Rock' && turns[1] === 'X') {
    // Lose
    score2 += scoreMap2.Scissors;
  }
  if (opponentMove === 'Rock' && turns[1] === 'Y') {
    // Draw
    score2 += scoreMap2.Rock + 3;
  }
  if (opponentMove === 'Rock' && turns[1] === 'Z') {
    // Win
    score2 += scoreMap2.Paper + 6;
  }

  if (opponentMove === 'Paper' && turns[1] === 'X') {
    // lose
    score2 += scoreMap2.Rock;
  }
  if (opponentMove === 'Paper' && turns[1] === 'Y') {
    // draw
    score2 += scoreMap2.Paper + 3;
  }
  if (opponentMove === 'Paper' && turns[1] === 'Z') {
    // win
    score2 += scoreMap2.Scissors + 6;
  }

  if (opponentMove === 'Scissors' && turns[1] === 'X') {
    // lose
    score2 += scoreMap2.Paper;
  }
  if (opponentMove === 'Scissors' && turns[1] === 'Y') {
    // draw
    score2 += scoreMap2.Scissors + 3;
  }
  if (opponentMove === 'Scissors' && turns[1] === 'Z') {
    // win
    score2 += scoreMap2.Rock + 6;
  }
}

console.log(score2);
