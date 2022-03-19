// https://eth-ropsten.alchemyapi.io/v2/S-jptuWrsFSqWkJoEaqbVA8fCBdoRzn3

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/S-jptuWrsFSqWkJoEaqbVA8fCBdoRzn3',
      accounts: ['7ad24d02304f644e3306ad1776ed97b16774abede0412cece0c9e80257487804'],
    },
  },
};