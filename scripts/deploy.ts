// Script that deploys a given contract to a network
import { ethers, network } from "hardhat";

async function main() {
  const CONTRACT_NAME = "Greeter";
  const [signer] = await ethers.getSigners();
  const initialOwner = signer.address;
  const ARGS = ["Hi there!", initialOwner];
  console.log(`Deploying ${CONTRACT_NAME} contract to ${network.name}`);
  const contract = await ethers.deployContract(CONTRACT_NAME, ARGS, {});
  await contract.waitForDeployment();
  const contractAddress = await contract.getAddress();
  console.log(`${CONTRACT_NAME} deployed to ${contractAddress}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// deploy the contract
// npx hardhat run ./scripts/deploy.ts

// verify the contract
// npx hardhat verify --network ZKsyncEraSepolia 0x6A382d77A41b87bb2d1487874aAF5D1978E990B7 'Hi there!'
