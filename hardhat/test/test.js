const { expect } = require("chai");
const { BigNumber } = require("ethers");
const { ethers, waffle } = require("hardhat");

let PlusHeaven;

describe("PlusHeaven HiLo contract", () => {
  it("Should deploy", async () => {
    const plusHeaven = await ethers.getContractFactory("HiLo");
    PlusHeaven = await plusHeaven.deploy();

    await PlusHeaven.deployed();

    const balance = await PlusHeaven.getBalance();

    // Balance should be 0, as no deposit has been made to the contract
    expect(Number(balance)).to.equal(0);
  });

  it("Should accept deposit", async () => {
    // get address
    const [, user1] = await ethers.getSigners();

    // amount to deposit
    const amount = ethers.utils.parseUnits("100", "ether");

    // set gameId
    const gameId = 1;

    // deposit funds
    await PlusHeaven.connect(user1).deposit(gameId, { value: amount });

    // check balance of contract, should increase due to deposit
    const balance = ethers.utils.formatEther(await PlusHeaven.getBalance());

    // console.log({ _balance, balanceBefore, balanceAfter, _balance2 });
    expect(Number(balance)).to.be.equal(100);
  });

  it("Should fail to send to a user who didn't place a bet", async () => {
    // get address
    const [owner, , user2] = await ethers.getSigners();

    // amount to send
    const amount = ethers.utils.parseUnits("10", "ether");

    await expect(
      PlusHeaven.connect(owner).send(user2.address, amount)
    ).to.be.revertedWith("No bets placed for this round");
  });

  it("Should send payout", async () => {
    // get address
    const [owner, user1] = await ethers.getSigners();

    // amount to send
    const amount = ethers.utils.parseUnits("10", "ether");

    // send payout
    await PlusHeaven.connect(owner).send(user1.address, amount);
  });

  it("Should not allow non-owner to call withdraw function", async () => {
    // get address
    const [, user1] = await ethers.getSigners();

    // send all funds to user1
    await expect(PlusHeaven.connect(user1).withdraw()).to.be.revertedWith(
      "Ownable: caller is not the owner"
    );
  });

  it("Should transfer entire balance to owner", async () => {
    // get address
    const [owner, user1] = await ethers.getSigners();

    // get owner balance before transaction by user1
    const balanceBefore = Number(
      ethers.utils.formatEther(await ethers.provider.getBalance(owner.address))
    );

    //<----------------- make dummy transaction ---------------//
    // amount to deposit
    const amount = ethers.utils.parseUnits("4000", "ether");
    // deposit
    await PlusHeaven.connect(user1).deposit(1, { value: amount });

    // send all funds to owner
    await PlusHeaven.connect(owner).withdraw();

    // get owner balance after transaction by user1
    const balanceAfter = Number(
      ethers.utils.formatEther(await ethers.provider.getBalance(owner.address))
    );

    expect(balanceAfter).to.be.greaterThan(balanceBefore);
  });
});
