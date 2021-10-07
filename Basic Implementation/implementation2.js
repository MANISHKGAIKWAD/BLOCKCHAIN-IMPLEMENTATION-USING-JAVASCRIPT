//Creating Block
class Block{
    constructor(data, hash, previousHash){
        this.data = data;
        this.hash = hash;
        this.previousHash = previousHash;
    }
}
//Inserting Data into New Block
const BTC = new Block(1, 'hash', 'previousHash');
console.log(BTC);