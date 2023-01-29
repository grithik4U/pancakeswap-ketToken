// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const KetToken = await hre.ethers.getContractFactory("KetToken");
  const ketToken = await KetToken.deploy();

  await ketToken.deployed();

  console.log("KetToken deployed to :", ketToken.address );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// goerli 0xCe7b32b673aB4196C8dD9F10A2d48588f5E98E2c
// bsctest 0x56619C23228B9ff27c97B5FD7CeaD6f23a9f6c29
// kava 0x56619C23228B9ff27c97B5FD7CeaD6f23a9f6c29