# Membrane Code Evaluation
This project is web application that connects to Ethereum blockchain to retrieve token balances.

# Stack
- React JS
- Ant Desing
- Sass
- MobX State Tree
- Ether JS
- Hardhat

# Architecture

# Quick start
To run this project in you local, I will need you just follow this few steps, ready? Lest go!

### Step 1: Intall MetaMask
We will need to set some configuratios to make sure you will able to connect and see the information.

First of all, make sure you have a Metamask installed in the browser you will run this project. Do you have it done? perfect! let's continue!

### Step 2: Install packages

This step is as well know, just run ```npm install```

### Step 2: Prepare you enviroment
Now we will create a development environment to compile, deploy, test, and debug this App, to do all those staff we will use Hardhat, do you know it?. If don't, dont worry! Just follow this points:

2.1. Open a terminal in the root project and run
  2.1.1. Run `npx hardhat compile`
  2.1.2. Wait a second... 
  2.1.3. Run `npx hardhat node`
  2.1.4. Kepp this terminal with this porces runnig

### Step 3: Add a Localhost connection to you Metamask

3.1. Go to Metamask aplication
3.2. Click Connection Pill
3.3. A pop up will open, clin on  Add Network. Here you will be redirecte to a new tab. Fill the form with this infomration:

  - Network Name: Define a name for local connection, e.g: "Localhost"
  - New RCP URL: http://127.0.0.1:8545
  - Chain ID: 31337

Done! Make sure you switch you Metamask App to this network.

### Step 3: Deploy Contracts

Now, open a new terminal in the project root and run: `npx hardhat run scripts/deploy.ts --network localhost`

### Step 4: Start React App

Now is time to run the aplication! Open a new terminal, and just run `npm run start`

### Step 5: You are done!

If all works well at this point you see the screen, now you just have to connect and then you will hable to see the tokens.
