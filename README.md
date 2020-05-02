# solidity-float-pow

TruffleFramework template with travis-ci.org and coveralls.io configured

[![Build Status](https://travis-ci.org/zZoMROT/solidity-float-pow.svg?branch=master)](https://travis-ci.org/zZoMROT/solidity-float-pow)
[![Coverage Status](https://coveralls.io/repos/github/zZoMROT/solidity-float-pow/badge.svg?branch=master)](https://coveralls.io/github/zZoMROT/solidity-float-pow?branch=master)

### Library

`contracts/FloatPow.sol`

Uses the [following](https://github.com/zZoMROT/solidity-float-pow/blob/master/FloatPow.Rus.pdf) calculations (RUS version)

- `pow(uint256 c, uint256 rank)` - babylonian root of degree `rank` from number `c`, `Integer part of c^(1/rank)`
- `precisionPow(uint256 c, uint256 rank, uint256 precision)` - root of degree `rank` with precision of `precision` decimal places from the `n`-bit number of `c`, provided that `pk + n <78`, `c^(1/rank)`

     
