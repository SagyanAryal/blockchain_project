const {SHA256 } = require('crypto-js');

class Block{
  constructor(data, index, prevHash, timestamp){
    this.index = index;
    this.data = data;
    this.hash = this.computeHash();
    this.prevHash = prevHash;
    this.timestamp = timestamp;

  }


  computeHash() {
    return SHA256(JSON.stringify(this.data) + this.index + this.timestamp).toString();
  }
}

module.exports = Block

let test = new Block(1, 1, 0, String(new Date()))
let test2 = new Block(1, 1, 0, String(new Date()))
let test3 = new Block(1, 2, 0, String(new Date()))

console.log(test.timestamp)
console.log(test2.hash)
console.log(test3.hash)
