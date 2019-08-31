pragma solidity 0.5.11;

// Remove this line to make artifacts match
import "@openzeppelin/contracts-ethereum-package/contracts/math/SafeMath.sol";

contract ContractThatImportsStuff {
    // And uncomment this, otherwise an error will be thrown
    using SafeMath for uint256;
}
