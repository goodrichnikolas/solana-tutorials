import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";


async function main() {
    const connection = new Connection(clusterApiUrl("devnet"));
    const address = new PublicKey("CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN");
    const balance = await connection.getBalance(address);
    const balance_in_lamports = balance / 1000000000;

    console.log(`The balance of the account at ${address} is ${balance} lamports`);
    console.log(`This is the equivalent of ${balance_in_lamports} SOL`);
    console.log(`✅ Finished!`);
}

main().catch(err => {
    console.error(err);
});