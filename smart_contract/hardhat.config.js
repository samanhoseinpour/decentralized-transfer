require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/-7GeufcLmIKPfeMAYzwxpy2Va6I7tmbz",
      accounts: [
        "83c95616a7adfe90b12020eaaa508c62cc1ba4ead255a843b031cd19361ec4b1",
      ],
    },
  },
};
