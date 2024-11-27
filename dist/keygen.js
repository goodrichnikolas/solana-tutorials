"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("@solana-developers/helpers");
require("dotenv/config");
//const keypair = Keypair.generate();
//console.log(`The public key is: `, keypair.publicKey.toBase58());
//console.log(`The secret key is: `, keypair.secretKey);
const keypair = (0, helpers_1.getKeypairFromEnvironment)("SECRET_KEY");
console.log(`✅ Finished! We've loaded our secret key securely, using an env file!`);
console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);
//# sourceMappingURL=keygen.js.map