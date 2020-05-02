const Migrations = artifacts.require('./Migrations.sol');
const FloatPowContract = artifacts.require('./FloatPowContract.sol');

module.exports = function (deployer) {
    deployer.deploy(Migrations);
    deployer.deploy(FloatPowContract);
};
