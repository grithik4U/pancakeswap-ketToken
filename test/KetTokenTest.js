const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("Ket token", function () {
  it("Should return owner of token", async function (){
    const  owner  = await ethers.getSigner();
    const KetToken = await ethers.getContractFactory("KetToken");
    const ketToken = await KetToken.deploy();
    await ketToken.deployed();
    const owneraddress= await ketToken.owner();

    expect(owneraddress).to.equal(owner.address);
  });
});
