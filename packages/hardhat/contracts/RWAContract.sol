// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

contract RWAContract {
    address public owner;
    
    struct RWAData {
        string rwaDesc;
        string rwaPriceDate;
        string rwaCurrency;
        string rwaId;
        uint256 valuation;
    }
    
    mapping(address => bool) public signers;
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
    
    constructor() {
        owner = msg.sender;
    }
    
    function setOwner(address _owner) external onlyOwner {
        owner = _owner;
    }
    
    function setSigner(address _signer, bool _status) external onlyOwner {
        signers[_signer] = _status;
        emit SignerStatusChanged(_signer, _status);
    }
    
    function submitRWAData(
        string memory _rwaDesc,
        string memory _rwaPriceDate,
        string memory _rwaCurrency,
        string memory _rwaId,
        uint256 _valuation
    ) external {
        require(signers[msg.sender], "Only approved signers can submit data");
        
        // Store the RWA data on the blockchain
        // You can store it in any desired format or emit an event
        
        // For demonstration, let's just emit an event with the data
        emit RWADataSubmitted(_rwaDesc, _rwaPriceDate, _rwaCurrency, _rwaId, _valuation);
    }
    
    event SignerStatusChanged(address signer, bool status);
    
    event RWADataSubmitted(
        string rwaDesc,
        string rwaPriceDate,
        string rwaCurrency,
        string rwaId,
        uint256 valuation
    );
}
