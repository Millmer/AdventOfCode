const fs = require('fs');

const moduleMasses = fs.readFileSync(`${__dirname}/../inputs/day1.txt`, 'utf-8').split('\n');

module.exports.calculateFuelRequired = (mass, calculateFuleMass) => {
  const fuelRequired = Math.floor(mass / 3) - 2;
  return calculateFuleMass && fuelRequired >= 0 ? fuelRequired + this.calculateFuelRequired(fuelRequired, true) : Math.max(fuelRequired, 0);
}

module.exports.calculateSumOfFuelRequirements = (masses, calculateFuleMass) => {
  return masses.reduce((res, cur) => res + this.calculateFuelRequired(cur, calculateFuleMass), 0);
};

const part1Result = this.calculateSumOfFuelRequirements(moduleMasses);
const part2Result = this.calculateSumOfFuelRequirements(moduleMasses, true);
console.log({part1Result, part2Result });