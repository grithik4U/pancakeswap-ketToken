require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.6.12",
  networks:{
    dev: {
      url: "http://localhost:7545",
      gasPrice: 20,
      saveDeployments: true
    },
    bsctest: {
      url:"https://data-seed-prebsc-2-s2.binance.org:8545/",
      accounts: [process.env.PRIV_KEY],
      gasPrice: 10000000000,
      blockGasLimit: 1000000
    },
    bsc: {
      url:"https://bsc-dataseed1.binance.org/",
      accounts: [process.env.PRIV_KEY],
      gasPrice: 5100000000,
      blockGasLimit: 1000000
    },
    goerli: {
      url: process.env.ALCHEMY_API_KEY_URL,
      accounts: [process.env.GOERLI_PRIVATE_KEY],
      chainId: 5,
    },
    kava: {
      url: 'https://evm.testnet.kava.io',
      accounts: [process.env.PRIV_KEY],
    },
  },
  etherscan:{
    // apiKey:process.env.API_KEY
    apiKey: {
      kava: "api key is not required by the Kava explorer, but can't be empty",
    },
    customChains: [
      {
        network: 'kava',
        chainId: 2221,
        urls: {
          apiURL: 'https://explorer.kava.io/api',
          browserURL: 'https://explorer.kava.io',
        },
      },
    ],
  }
};
