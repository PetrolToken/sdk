const { Keypair } = require("@solana/web3.js");

function createWallet() {
  const wallet = Keypair.generate();

  console.log("Public Key:", wallet.publicKey.toString());

  return wallet;
}

module.exports = {
  createWallet
};
