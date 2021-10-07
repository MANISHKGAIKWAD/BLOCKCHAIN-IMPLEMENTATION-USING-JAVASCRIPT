//Creating Simple Hash Value
const createHash = (data) =>{
    return data + '$'; 
}
class Block{
    constructor(data, previousHash, hash){
        this.data = data;
        this.previousHash = previousHash;
        this.hash = hash;
    }
}

class blockChain{
    constructor(){
        //Create Genesis Block (IMP)
        const Genesis = new Block('genData', 'genPreviousHash', 'genHash')
        this.chain = [Genesis];        
    }

    addBlock(data){
        const previousHash = this.chain[this.chain.length-1].hash;
        const hash = createHash(data + previousHash);

        const block = new Block(data, previousHash, hash);
        this.chain.push(block);
    }
}

const BTC = new blockChain();
BTC.addBlock('1');
BTC.addBlock('2');
BTC.addBlock('3');

console.log(BTC);