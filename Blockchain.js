const SHA256 = require("sha256");

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.pendingTransactions = [];
    }

    // ---------------------------------
    createGenesisBlock() {
        return {
            index: 1, 
            timeStamp: Date.now, 
            transactions: [], 
            nonce: 0, 
            hash: "hash", 
            previousBlockHash: "previousBlockHash"
        }
    }
    // ---------------------------------
    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }
    // ---------------------------------
    generateHash(previousBlockHash, timeStamp, pendingTransactions) {
        let hash = "";
        let nonce = 0;
        while (hash.substring(0, 3) !== "000") {
            nonce++;
            hash = SHA256(previousBlockHash + timeStamp + JSON.stringify(pendingTransactions) + nonce).toString();
        };

        return { hash, nonce };
    }
    // ---------------------------------
    createTransaction(amount, sender, recipient) {
        this.pendingTransactions.push({ amount, sender, recipient });
    }
    // ---------------------------------
    createBlock() {
        const timeStamp = Date.now;
        const transactions = this.pendingTransactions;
        const previousBlockHash = this.getLastBlock().hash;
        const generateHash = this.generateHash(previousBlockHash, timeStamp, transactions);
        
        const newBlock = {
            index: this.chain.length + 1,
            timeStamp: timeStamp,
            transactions: transactions,
            nonce: generateHash.nonce,
            hash: generateHash.hash,
            previousBlockHash: previousBlockHash
        }

        this.pendingTransactions = []
        this.chain.push(newBlock);

        return newBlock;

    }

}

// ---------------------------------
// Export:
module.exports = Blockchain;





// ------------------------------------------------------------------
// let result = SHA256("Hello Wrold").toString();
// console.log(result);

// let hash = "";
// let nonce = 0;

// while (hash.substring(0, 4) !== "0000") {
//     nonce++;
//     hash = SHA256("Hello World" + nonce).toString();
// };

// console.log(nonce);
// console.log("\n");
// console.log(hash);
// ------------------------------------------------------------------


