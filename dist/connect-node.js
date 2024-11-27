"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
async function main() {
    const connection = new web3_js_1.Connection((0, web3_js_1.clusterApiUrl)("mainnet-beta"));
    const address = new web3_js_1.PublicKey("F5QHcqE7B8Br6GCGjWKuCMy1zmJnhhgNztAkeZWvuziS");
    const balance = await connection.getBalance(address);
    const balance_in_sol = balance / 1000000000;
    console.log(`The balance of the account at ${address} is ${balance} lamports`);
    console.log(`This is the equivalent of ${balance_in_sol} SOL`);
    console.log(`✅ Finished!`);
}
main().catch(err => {
    console.error(err);
});
//# sourceMappingURL=connect-node.js.map