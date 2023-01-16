const Blockchain = require("./Blockchain");

// New instance:
let newCoin = new Blockchain();

// Create Transaction:
newCoin.createTransaction(1, "0xSenderAddress", "0xRecipientAddress");
// Create Block:
newCoin.createBlock();
// ---------------------------------

// Create Transaction 2:
newCoin.createTransaction(10, "0xSenderAddress2", "0xRecipientAddress2");
// Create Block 2:
newCoin.createBlock();
// ---------------------------------

// Create Transaction 3:
newCoin.createTransaction(20, "0xSenderAddress3", "0xRecipientAddress3");
// Create Block 3:
newCoin.createBlock();
// ---------------------------------

// Transaction no. 2 details:
console.log(newCoin.chain[2].transactions);

// ---------------------------------
// Conosle log Blockchain data:
console.log(newCoin);