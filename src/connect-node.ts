import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";


const public_key = "F5QHcqE7B8Br6GCGjWKuCMy1zmJnhhgNztAkeZWvuziS";

//Function that queries all transactions of a given account
async function getTransactionHistory(address) {
    //Connect to server and provide it the key
    const connection = new Connection(clusterApiUrl("mainnet-beta"));
    const pubKey = new PublicKey(address);

    try {
        //Get all transactions of the account
        const signatures = await connection.getSignaturesForAddress(pubKey);
        console.log("Signatures: ", signatures);
    }
}
async function main() {
    
    const connection = new Connection(clusterApiUrl("mainnet-beta"));
    const address = new PublicKey(public_key);
    const balance = await connection.getBalance(address);
    const balance_in_sol = balance / 1000000000;

    console.log(`The balance of the account at ${address} is ${balance} lamports`);
    console.log(`This is the equivalent of ${balance_in_sol} SOL`);
    console.log(`✅ Finished!`);
}

main().catch(err => {
    console.error(err);
});