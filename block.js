const {SHA256 } = require('crypto-js');

class Block{
  constructor(data, index, prevHash, timestamp){
    this.data = data;
    this.index = index;
    this.hash = this.computeHash();
    this.prevHash = prevHash;
    this.timestamp = timestamp;
  }

  getIndex() {
    return this.index
  }

  computeHash() {
    return SHA256(JSON.stringify(this.data) + this.index + this.timestamp).toString();
  }
}

module.exports = Block

let test = new Block(1, 1, 0, String(new Date()))
let test2 = new Block(1, 1, 0, String(new Date()))
let test3 = new Block(1, 2, 0, String(new Date()))

//console.log(test3)
