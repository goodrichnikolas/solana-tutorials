"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
const public_key = "F5QHcqE7B8Br6GCGjWKuCMy1zmJnhhgNztAkeZWvuziS";
// Function that queries all transactions of a given account
async function getTransactionHistory(connection, address) {
    const pubKey = new web3_js_1.PublicKey(address);
    const options = {
        limit: 20, // Limit the number of results
        before: undefined,
        until: undefined,
    };
    try {
        // Get all transactions of the account with options
        const signatures = await connection.getSignaturesForAddress(pubKey, options);
        return signatures;
    }
    catch (error) {
        console.error("Error fetching transaction history:", error);
        return [];
    }
}
async function main() {
    // Create a single connection instance with commitment
    const connection = new web3_js_1.Connection((0, web3_js_1.clusterApiUrl)("mainnet-beta"), 'confirmed');
    try {
        const address = new web3_js_1.PublicKey(public_key);
        const balance = await connection.getBalance(address);
        const balance_in_sol = balance / 1000000000;
        console.log(`The balance of the account at ${address} is ${balance} lamports`);
        console.log(`This is the equivalent of ${balance_in_sol} SOL`);
        // Get and print transaction history using the same connection
        const transactionHistory = await getTransactionHistory(connection, public_key);
        if (transactionHistory.length === 0) {
            console.log("No transactions found or error occurred while fetching transactions.");
        }
        else {
            console.log(`\nFound ${transactionHistory.length} transactions:`);
            transactionHistory.forEach((tx, index) => {
                console.log(`\nTransaction ${index + 1}:`);
                console.log(`Signature: ${tx.signature}`);
                console.log(`Slot: ${tx.slot}`);
                if (tx.blockTime) {
                    console.log(`Block Time: ${new Date(tx.blockTime * 1000).toLocaleString()}`);
                }
                console.log(`Status: ${tx.confirmationStatus}`);
            });
        }
        console.log(`\n✅ Finished!`);
    }
    catch (error) {
        console.error("Main execution error:", error);
    }
    finally {
        // Optionally cleanup connection
        // connection.disconnect();  // Uncomment if needed
    }
}
// Add proper error handling for the main function
main().catch((err) => {
    console.error("Fatal error:", err);
    process.exit(1);
});
//# sourceMappingURL=connect-node.js.map