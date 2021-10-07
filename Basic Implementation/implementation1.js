/* Full Implementation of Block-Chain*/
const SHA256 = require('crypto-js/sha256');
class Block{
    constructor(index, timestamp, data, previousHash = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }
//Calculate Hash
    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class Blockchain{
    //Genesis Block Creation
    constructor(){
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock(){
        return new Block(0, "06/10/2021", "Genesis block", "0");
    }

    getLatestBlock(){
        return this.chain[this.chain.length-1];
    }
    //Adding New Block
    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
}
//Inserting Data into BlockChain & Creating New Block
let BCT = new Blockchain();
BCT.addBlock(new Block(1, 07/10/2021, {amount: 7}));
BCT.addBlock(new Block(2, 09/10/2021, {amount: 9}));
//Print BlockChain
console.log(JSON.stringify(BCT, null, 4));