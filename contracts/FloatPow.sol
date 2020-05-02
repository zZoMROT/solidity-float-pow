pragma solidity ^0.5.0;

import "@openzeppelin/contracts/math/SafeMath.sol";

library FloatPow {

    using SafeMath for uint256;

    /*
     *  c^(1/rank) with accurate to `precision` decimal places
     *  provided that `precision * rank + n < 78`, where `n` is number of digits of `c`
     */
    function precisionPow(uint256 c, uint256 rank, uint256 precision) internal pure returns (uint256) {

        uint256 addDigits = 10 ** precision.mul(rank);
        
        uint256 result = pow(c.mul(addDigits), rank);

        return result;
    }

    /*
     *  Quotient[c^(1/rank), 1]
     */
    function pow(uint256 c, uint256 rank) internal pure returns (uint256) {
        
        uint256 prevResult = 0;
        uint256 result = 1;
        uint256 loopCount = 0;
        bool firstStep = true;

        while (loopCount < 3) {
        
            prevResult = result;
            result = calculateRoundup(c, rank, result);

            if(result == prevResult){
                loopCount = loopCount.add(1);
            } else {
                loopCount = 0;
            }
            
            if(!firstStep && result > prevResult){
                return prevResult;
            }

            if(firstStep){
                firstStep = false;
            }
        }

        return result;
    }

    function calculateRoundup(uint256 c, uint256 rank, uint256 prevValue) private pure returns (uint256) {

        uint256 part1 = rank.sub(1).mul(prevValue);
        uint256 part2 = c;

        for (uint256 i = 0; rank.sub(1) > i; i = i.add(1)) {
            part2 = part2.div(prevValue);
        }

        return part1.add(part2).div(rank);
    }
}