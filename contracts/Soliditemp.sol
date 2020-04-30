pragma solidity ^0.5.0;

import "../lib/Sqrt.sol";

contract Soliditemp {
	
	using Sqrt for uint256;

	function sqrt(uint256 c, uint256 rank) public returns (uint256) {
        return c.sqrt(rank);
    }

    function precisionSqrt(uint256 c, uint256 rank, uint256 precision) public returns (uint256) {
        return c.precisionSqrt(rank, precision);
    }

}
