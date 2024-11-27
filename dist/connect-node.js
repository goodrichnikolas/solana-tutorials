"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
async function main() {
    const connection = new web3_js_1.Connection((0, web3_js_1.clusterApiUrl)("devnet"));
    const address = new web3_js_1.PublicKey("CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN");
    const balance = await connection.getBalance(address);
    const balance_in_lamports = balance / 1000000000;
    console.log(`The balance of the account at ${address} is ${balance} lamports`);
    console.log(`This is the equivalent of ${balance_in_lamports} SOL`);
    console.log(`✅ Finished!`);
}
main().catch(err => {
    console.error(err);
});
//# sourceMappingURL=connect-node.js.map