import { Keypair } from "@solana/web3.js";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import "dotenv/config"; 
//const keypair = Keypair.generate();
 
//console.log(`The public key is: `, keypair.publicKey.toBase58());
//console.log(`The secret key is: `, keypair.secretKey);
 
const keypair = getKeypairFromEnvironment("SECRET_KEY");
 
console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`,
);

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);