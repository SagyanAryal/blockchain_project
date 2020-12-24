computeHash() {
  return SHA256(JSON.stringify(this.data) + this.index + this.timestamp).toString();
}
}

let test = new Block(1, 1, 0, String(new Date()))
let test2 = new Block(1, 1, 0, String(new Date()))
let test3 = new Block(1, 2, 0, String(new Date()))
getTimestamp() {
  return this.timestamp;
}
}

console.log(test.hash)
console.log(test2.hash)
console.log(test3.hash)
// let test = new Block(1, 1, 0, String(new Date()))
// let test2 = new Block(1, 1, 0, String(new Date()))
// let test3 = new Block(1, 2, 0, String(new Date()))
//
// console.log(test.hash)
// console.log(test2.hash)
// console.log(test3.hash)
module.exports = Block
