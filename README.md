# Soliditemp

TruffleFramework template with travis-ci.org and coveralls.io configured

[![Build Status](https://travis-ci.org/zZoMROT/solidity-float-pow.svg?branch=master)](https://travis-ci.org/zZoMROT/solidity-float-pow)
[![Coverage Status](https://coveralls.io/repos/github/zZoMROT/solidity-float-pow/badge.svg?branch=master)](https://coveralls.io/github/zZoMROT/solidity-float-pow?branch=master)

### Installation

1. Install [truffle] (http://truffleframework.com) globally with the command `npm install -g truffle`
2. Install [ganache-cli] (https://github.com/trufflesuite/ganache-cli) globally with the command `npm install -g ganache-cli`
3. Install packages locally using the `npm install` command
4. Run ganache in a separate terminal `ganache-cli` (You may need to add the path to the npm executable using the command `PATH = $ PATH: <path_to_npm_bin>` to the PATH environment variable, you can find out this path with the command `npm bin -g`)
5. Run tests using the `npm test` command

On macOS, you need to install watchman: `brew install watchman`

To change the compiler version, you need to specify the desired version in `truffle.js` and reinstall it using the commands
```
npm uninstall -g truffle
npm install truffle
```
After that, it is recommended to update `ganache-cli` with the command `npm install -g ganache-cli`


### Library

`contracts/FloatPow.sol`

- `pow(uint256 c, uint256 rank)` - babylonian root of degree `rank` from number `c`, `Integer part of c^(1/rank)`
- `precisionPow(uint256 c, uint256 rank, uint256 precision)` - root of degree `rank` with precision of `precision` decimal places from the `n`-bit number of `c`, provided that `pk + n <78`, `c^(1/rank)`

     