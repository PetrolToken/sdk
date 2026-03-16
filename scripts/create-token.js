const { createMint } = require("@solana/spl-token");
const { Keypair } = require("@solana/web3.js");
const { connection } = require("../src/config");

async function main() {

  const payer = Keypair.generate();

  console.log("Creating Petrol Token...");

  const mint = await createMint(
    connection,
    payer,
    payer.publicKey,
    null,
    9
  );

  console.log("Petrol Token Mint Address:", mint.toBase58());
}

main();
