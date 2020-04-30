const { expect } = require('chai');

const Soliditemp = artifacts.require('Soliditemp');

contract('Soliditemp', function ([_, addr1]) {
    
    let contract;

    describe('create contract', async function () {
        
        it('deploy', async function () {
            contract = await Soliditemp.new();
        });

        it('sqrt', async function () {
        	expect((await contract.sqrt.call(2,2)).toString()).to.equal('1');
        	expect((await contract.sqrt.call(3,2)).toString()).to.equal('1');
        	expect((await contract.sqrt.call(4,2)).toString()).to.equal('2');
        	expect((await contract.sqrt.call(6,2)).toString()).to.equal('2');
        	expect((await contract.sqrt.call(100,2)).toString()).to.equal('10');

        	let value = randomInteger(10,30);
        	let rank = randomInteger(2,20);
        	expect((await contract.sqrt.call(Math.pow(value, rank),rank)).toString()).to.equal(value.toString());
        	expect((await contract.sqrt.call(Math.pow(value, rank)+1,rank)).toString()).to.equal(value.toString());
        });

        it('precisionSqrt', async function () {
        	expect((await contract.precisionSqrt.call(945632111922,3,18)).toString()).to.equal('9815386464067157016777');
        });
    });

});

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
