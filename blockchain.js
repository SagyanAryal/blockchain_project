import Block from './block.js'


class Blockchain {

  constructor() {
    // this.chain = [this.GenesisBlock];
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
    if(confirmValidity(newBlock)){
      this.chain.push(newBlock);
    }
  }

  getCurrBlock(){
    return this.chain[this.chain.length - 1];
  }

  // returns a boolean checks if a hash been compromised
  confirmValidity(newBlock){

    for(int i = 1; i < this.chain.length; i++){
      let curr = this.chain[i];
      let prevBlock = this.chain[i-1];

      if(curr.index !== prevBlock.index + 1){
        return false;
      }

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


let bChain = new Blockchain();
let newB = new Block(1, 1, 0, 3))
bChain.addBlock(new Block(1, 1, 0, 3))
console.log(bChain.getCurrBlock().timestamp)
bChain.addBlock(new Block(1, 1, 0, 3))
