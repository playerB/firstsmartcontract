// scripts/deploy.js
async function main() {
    // We get the contract to deploy
    const Contract = await ethers.getContractFactory("Box");
    const contract = await Contract.deploy();
    console.log("Deploying ", contract);
    await contract.deployed();
    console.log("Successfully deployed to:", contract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });