require("dotenv").config();
const HDWalletProvider = require("truffle-hdwallet-provider");
const { toHex, toWei } = require("web3-utils");

const createProvider = (network) => {
  return () => {
    return new HDWalletProvider(process.env.MNEMONIC, `https://v3.${network}.infura.io/` + process.env.INFURA_API_KEY);
  };
};

module.exports = {
  compilers: {
    solc: {
      version: "0.5.11",
      settings: {
        optimizer: {
          enabled: false,
        },
      },
    },
  },
  networks: {
    development: {
      host: "127.0.0.1",
      gas: 6000000,
      gasPrice: toHex(toWei("1", "gwei")),
      network_id: "*", // eslint-disable-line camelcase
      port: 8545,
      skipDryRun: true,
    },
    kovan: {
      provider: createProvider("kovan"),
      gas: 4700000,
      network_id: "42", // eslint-disable-line camelcase
      skipDryRun: true,
    },
    rinkeby: {
      provider: createProvider("rinkeby"),
      gas: 4700000,
      network_id: "4", // eslint-disable-line camelcase
      skipDryRun: true,
    },
    ropsten: {
      provider: createProvider("ropsten"),
      gas: 4700000,
      network_id: "3", // eslint-disable-line camelcase
      skipDryRun: true,
    },
  },
};
