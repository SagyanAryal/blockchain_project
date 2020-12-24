
const Block = require('./block');

import Block from './block.js'

class Blockchain

class Blockchain {

  constructor() {
    // this.chain = [this.GenesisBlock];
    this.chain = [this.GenesisBlock];

  }

  GenesisBlock(){
    return new Block(null, 0, null, String(new Date()))
  }

  addBlock(data, index){
    var prevHash = this.getCurrBlock().prevHash;
    var block = new Block(data, index, prevHash, String(new Date()));
    this.chain.push(block);
  }

  getCurrBlock(){
    return this.chain[this.chain.length - 1];
  }

  // returns a boolean checks if a hash been compromised
  confirmValidity (){

  }
}

let bChain = new Blockchain();
bChain.addBlock(1, 1)
console.log(bChain.getCurrBlock().getTimestamp())
