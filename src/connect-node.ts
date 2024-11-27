import { 
    Connection, 
    PublicKey, 
    clusterApiUrl, 
    ConfirmedSignatureInfo 
} from "@solana/web3.js";

const public_key: string = "F5QHcqE7B8Br6GCGjWKuCMy1zmJnhhgNztAkeZWvuziS";

// Function that queries all transactions of a given account
async function getTransactionHistory(connection: Connection, address: string): Promise<ConfirmedSignatureInfo[]> {
    const pubKey: PublicKey = new PublicKey(address);
    const options = {
        limit: 20, // Limit the number of results
        before: undefined,
        until: undefined,
    };

    try {
        // Get all transactions of the account with options
        const signatures: ConfirmedSignatureInfo[] = await connection.getSignaturesForAddress(
            pubKey,
            options
        );
        return signatures;
    } catch (error) {
        console.error("Error fetching transaction history:", error);
        return [];
    }
}

async function main(): Promise<void> {
    // Create a single connection instance with commitment
    const connection: Connection = new Connection(
        clusterApiUrl("mainnet-beta"),
        'confirmed'
    );

    try {
        const address: PublicKey = new PublicKey(public_key);
        const balance: number = await connection.getBalance(address);
        const balance_in_sol: number = balance / 1000000000;

        console.log(`The balance of the account at ${address} is ${balance} lamports`);
        console.log(`This is the equivalent of ${balance_in_sol} SOL`);
        
        // Get and print transaction history using the same connection
        const transactionHistory = await getTransactionHistory(connection, public_key);
        
        if (transactionHistory.length === 0) {
            console.log("No transactions found or error occurred while fetching transactions.");
        } else {
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
    } catch (error) {
        console.error("Main execution error:", error);
    } finally {
        // Optionally cleanup connection
        // connection.disconnect();  // Uncomment if needed
    }
}

// Add proper error handling for the main function
main().catch((err: Error) => {
    console.error("Fatal error:", err);
    process.exit(1);
});