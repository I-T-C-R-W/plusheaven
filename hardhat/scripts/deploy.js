// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  // deploy contract
  const plusHeaven = await hre.ethers.getContractFactory("HiLo");
  const PlusHeaven = await plusHeaven.deploy();

  await PlusHeaven.deployed();
  console.log("PlusHeaven HiLo deployed to: ", PlusHeaven.address);

  const DeploymentInfo = `
    export const PlusHeaven = "${PlusHeaven.address}"
  `;

  console.log("Saving addresses to cache/deploy.js");
  const data = JSON.stringify(DeploymentInfo);
  fs.writeFileSync(
    path.resolve(__dirname, "../cache/deploy.js"),
    JSON.parse(data)
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
