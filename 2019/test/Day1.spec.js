const { expect } = require('chai');
const { calculateFuelRequired, calculateSumOfFuelRequirements } = require('../src/Day1');

describe('Fuel required', () => {
    it('For mass 12 it should return 2', () => {
      const result = calculateFuelRequired(12);
      expect(result).to.equal(2);
    });

    it('For mass 14 it should return 2', () => {
      const result = calculateFuelRequired(14);
      expect(result).to.equal(2);
    });

    it('For mass 1969 it should return 654', () => {
      const result = calculateFuelRequired(1969);
      expect(result).to.equal(654);
    });

    it('For mass 100756 it should return 33583', () => {
      const result = calculateFuelRequired(100756);
      expect(result).to.equal(33583);
    });

    it('For mass 1969 it should return 966 with fuel mass calculation', () => {
      const result = calculateFuelRequired(1969, true);
      expect(result).to.equal(966);
    });

    it('For mass 100756 it should return 50346 with fuel mass calculation', () => {
      const result = calculateFuelRequired(100756, true);
      expect(result).to.equal(50346);
    });
});

describe('Total fuel requirments', () => {
  it('For all module masses it should return 2', () => {
    const moduleMasses = ['12', '14', '1969', '100756'];
    const result = calculateSumOfFuelRequirements(moduleMasses);
    expect(result).to.equal(34241);
  });
});