const { expect } = require('chai');

const FloatPowContract = artifacts.require('FloatPowContract');

contract('FloatPowContract', function ([_, addr1]) {
    
    let contract;

    describe('create contract', async function () {
        
        it('deploy', async function () {
            contract = await FloatPowContract.new();
        });

        it('pow', async function () {
        	expect((await contract.pow.call(2,2)).toString()).to.equal('1');
        	expect((await contract.pow.call(3,2)).toString()).to.equal('1');
        	expect((await contract.pow.call(4,2)).toString()).to.equal('2');
        	expect((await contract.pow.call(6,2)).toString()).to.equal('2');
        	expect((await contract.pow.call(100,2)).toString()).to.equal('10');

        	let value = randomInteger(10,20);
        	let rank = randomInteger(2,10);
        	expect((await contract.pow.call(Math.pow(value, rank),rank)).toString()).to.equal(value.toString());
        	expect((await contract.pow.call(Math.pow(value, rank)+1,rank)).toString()).to.equal(value.toString());
        });

        it('precisionPow', async function () {
        	expect((await contract.precisionPow.call(945632111922,3,18)).toString()).to.equal('9815386464067157016777');
        });
    });

});

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
