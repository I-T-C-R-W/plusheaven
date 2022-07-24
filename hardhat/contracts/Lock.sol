//SPDX-License-Identifier: MIT

pragma solidity ^0.8.11;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


contract hiLo is Ownable {
    
    mapping(address => uint256) enteredGame;
    uint256 public currentGameId;
    IERC20 public matic;

  constructor(address _maticTokenAddress) {
        matic = IERC20(_maticTokenAddress);
        currentGameId = 0;
    }

//===========================================================


    // send money from msg.sender to contract
   function deposit(uint256 amount, uint256 gameId) public payable {
       require(msg.sender.balance >= amount, "Insufficient Balance");
        matic.transferFrom(address(msg.sender), address(this), amount);
        currentGameId = gameId;
        enteredGame[address(msg.sender)] = currentGameId;
   }
 
    // send money from contract to recipient
    function send (address payable recipient, uint256 amount ) public payable onlyOwner  {
        require(enteredGame[address(recipient)] == currentGameId, "No bets placed for this round");
        require(address(this).balance >= amount, "Insufficient Balance");
        require(msg.sender != recipient, "You can't send money to yourself!");
         matic.transferFrom(address(this), address(recipient), amount);
    }

    function withdraw() external payable onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }

    function getBalance() external view returns (uint256){
        return address(this).balance;
    }

}
