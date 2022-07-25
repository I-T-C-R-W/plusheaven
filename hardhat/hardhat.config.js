require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    ropsten: {
      url: process.env.ROPSTEN_URL || "",
      allowUnlimitedContractSize: true,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    mumbai: {
      url: process.env.MUMBAI_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    hardhat: {
      gas: 120000000000,
      blockGasLimit: 0x1fffffffffffff,
      allowUnlimitedContractSize: true,
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: {
      polygonMumbai: "99Y9J9TXGKE9M63MYHJVUKATAJRF6ANEYW",
    },
  },
};
