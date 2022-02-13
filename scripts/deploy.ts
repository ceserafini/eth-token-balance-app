import { ethers } from "hardhat";

async function main() {
  const TokenETH = await ethers.getContractFactory("TokenETH");
  const eth = await TokenETH.deploy();
  await eth.deployed();
  console.log("TokenETH deployed to:", eth.address);

  const TokenUSDT = await ethers.getContractFactory("TokenUSDT");
  const usdt = await TokenUSDT.deploy();
  await usdt.deployed();
  console.log("TokenUSDT deployed to:", usdt.address);

  const TokenUSDC = await ethers.getContractFactory("TokenUSDC");
  const usdc = await TokenUSDC.deploy();
  await usdc.deployed();
  console.log("TokenUSDC deployed to:", usdc.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
