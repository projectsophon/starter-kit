require('@darkforest/hardhat-circom');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.6.7",
  circom: {
    circuits: [
      {
        name: `hash`,
      },
    ],
  },
};
