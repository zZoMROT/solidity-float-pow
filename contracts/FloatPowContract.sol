pragma solidity ^0.5.0;

import "./FloatPow.sol";

contract FloatPowContract {
	
	using FloatPow for uint256;

	function pow(uint256 c, uint256 rank) public returns (uint256) {
        return c.pow(rank);
    }

    function precisionPow(uint256 c, uint256 rank, uint256 precision) public returns (uint256) {
        return c.precisionPow(rank, precision);
    }

}
