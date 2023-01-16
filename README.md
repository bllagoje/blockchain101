# Blockchain101 

Simple explanation how Blockchain works using JavaScript. 

----
This code defines a class called Blockchain that creates a blockchain with a genesis block and a pending transactions array. The class has several methods:

`constructor()`: Initializes an empty chain array and an empty pendingTransactions array.

`createGenesisBlock()`: Creates an object representing the first block in the blockchain, also known as the Genesis block.

`getLastBlock()`: Returns the last block in the chain.

`generateHash()`: Generates a hash for a given block using previousBlockHash, timestamp, pendingTransactions, and nonce. 
The generated hash is calculated using SHA256, it uses a while loop that continues to increment the nonce value until the generated hash starts with a certain number of 0's.

`createTransaction()`: This method takes in an amount, sender, and recipient and pushes a new transaction object to the pendingTransactions array.

`createBlock()`: This method creates a new block by taking the current timestamp, pending transactions, previous block hash and use generateHash method to calculate the new block's hash and nonce.
Then it pushes the new block to the chain and resets the pending transactions array.

