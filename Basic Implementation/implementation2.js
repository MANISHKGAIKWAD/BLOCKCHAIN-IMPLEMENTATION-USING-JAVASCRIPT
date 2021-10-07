class Block{
    constructor(data, hash, previousHash){
        this.data = data;
        this.hash = hash;
        this.previousHash = previousHash;
    }
}

const BTC = new Block(1, 'hash', 'previousHash');
console.log(BTC);