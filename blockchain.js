import Block from './block.js'

class Blockchain {
  constructor() {
    this.chain = [this.GenesisBlock];
  }

  GenesisBlock(){
    return new Block(null, 0, null, String(new Date()))
  }

  addBlock(newBlock){
    newBlock.prevHash = this.getCurrBlock().hash;
    newBlock.index = this.getCurrBlock().index + 1;
    newBlock.hash = newBlock.computeHash();
    newBlock.timestamp = String(new Date());
  }

  getCurrBlock(){
    return this.chain[this.chain.length - 1];
  }

  // Checks to see if a hash been compromised
  confirmValidity(newBlock){
    for(let i = 1; i < this.chain.length; i++){
      let curr = this.chain[i];
      let prevBlock = this.chain[i-1];

      if(curr.hash !== curr.computeHash()){
        return false;
      }

      if (curr.prevHash !== prevBlock.hash) {
        return false;
      }
    }
    console.log("Valid block");
    return true;
  }
}


let bChain = new Blockchain();
bChain.addBlock(new Block(1, 1, 0, String(new Date())))
console.log(bChain.getCurrBlock().getIndex())
