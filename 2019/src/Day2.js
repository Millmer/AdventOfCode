const fs = require('fs');

const input = fs.readFileSync(`${__dirname}/../inputs/day2.txt`, 'utf-8').split(',').map(i => +i);

module.exports.calculate = input => {
  MainLoop:
  for (let i = 0; i < input.length; i = i + 4) {
    const op = input[i];
    switch (op) {
      case 1:
        input[input[i+3]] = input[input[i+1]]+input[input[i+2]];
        break;
      case 2:
        input[input[i+3]] = input[input[i+1]]*input[input[i+2]];
        break;
      case 99:
        break MainLoop;
    }
  }
  return input;
};

input[1] = 12;
input[2] = 2;
const part1Result = this.calculate(input);
console.log(part1Result[0]);