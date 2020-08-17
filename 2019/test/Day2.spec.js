const { expect } = require('chai');
const { calculate } = require('../src/Day2');

describe('Compute state', () => {
  it('Should compute correct state', () => {
    const input = [1,0,0,0,99];
    const output = calculate(input);
    expect(output).to.deep.equal([2,0,0,0,99]);
  });

  it('Should compute correct state', () => {
    const input = [2,3,0,3,99];
    const output = calculate(input);
    expect(output).to.deep.equal([2,3,0,6,99]);
  });

  it('Should compute correct state', () => {
    const input = [2,4,4,5,99,0];
    const output = calculate(input);
    expect(output).to.deep.equal([2,4,4,5,99,9801]);
  });

  it('Should compute correct state', () => {
    const input = [1,1,1,4,99,5,6,0,99];
    const output = calculate(input);
    expect(output).to.deep.equal([30,1,1,4,2,5,6,0,99]);
  });

  it('Should compute correct state', () => {
    const input = [1,9,10,3,2,3,11,0,99,30,40,50];
    const output = calculate(input);
    expect(output).to.deep.equal([3500,9,10,70,2,3,11,0,99,30,40,50]);
  });
});