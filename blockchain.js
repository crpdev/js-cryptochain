const Block = require("./block");

class Blockchain {
  constructor() {
    this.chain = [Block.genesis()];
  }

  addBlock({ lastBlock, data }) {
    const newBlock = Block.mineBlock({ lastBlock, data });
    this.chain.push(newBlock);
  }
}

module.exports = Blockchain;
