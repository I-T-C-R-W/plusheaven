//SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
// import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract HiLo is Ownable {
    mapping(address => uint256) enteredGame;
    uint256 public currentGameId;

    constructor() {
        currentGameId = 0;
    }

    //===========================================================

    // send money from msg.sender to contract
    function deposit(uint256 gameId) public payable {
        require(
            address(msg.sender).balance >= msg.value,
            "Insufficient Balance"
        );
        currentGameId = gameId;
        enteredGame[address(msg.sender)] = currentGameId;
    }

    // send money from contract to recipient
    function send(address payable recipient, uint256 amount)
        public
        payable
        onlyOwner
    {
        require(
            enteredGame[address(recipient)] == currentGameId,
            "No bets placed for this round"
        );
        require(address(this).balance >= amount, "Insufficient Balance");
        require(msg.sender != recipient, "You can't send money to yourself!");
        (bool sent, bytes memory data) = recipient.call{value: amount}("");
        require(sent, "Failed to send Ether");
    }

    function withdraw() external payable onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }

    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }
}
