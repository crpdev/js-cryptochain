const Blockchain = require("./blockchain");
const Block = require("./block");

describe("Blockchain", () => {
  const blockchain = new Blockchain();

  it("is an instance of an Array", () => {
    expect(blockchain.chain instanceof Array).toBe(true);
  });

  it("starts the chain with the genesis block", () => {
    expect(blockchain.chain[0]).toEqual(Block.genesis());
  });

  it("adds new block to the blockchain", () => {
    const lastBlock = blockchain.chain[blockchain.chain.length - 1];
    const data = "new-data";
    blockchain.addBlock({ lastBlock, data });
    expect(blockchain.chain[blockchain.chain.length - 1].data).toEqual(data);
  });
});
