Membrane Code Evaluation
---

This project is web application that connects to Ethereum blockchain to retrieve token balances.

## Stack
- [React JS](https://es.reactjs.org/docs/getting-started.html)
- [Ant Desing](https://ant.design/docs/react/introduce)
- [Sass](https://sass-lang.com/)
- [MobX State Tree](https://mobx-state-tree.js.org/intro/welcome)
- [Ethers JS](https://docs.ethers.io/v5/)
- [Hardhat](https://hardhat.org/)
- [Axios](https://axios-http.com/docs/intro)

## External services
- [MetaMask](https://metamask.io/)
- [Bittrex](https://bittrex.github.io/api/v3)

## Quick start
To run this project in you local, I will need you just follow this few steps, ready? Lest go!

### **Step 1: Install MetaMask**
We will need to set some configuratios to make sure you will able to connect and see the information.

First of all, make sure you have a Metamask installed in the browser you will run this project. Do you have it done? perfect! let's continue!

### **Step 2: Install packages**

This step is as well know, just run ```npm install```

### **Step 3: Prepare you enviroment**
Now we will create a development environment to compile, deploy, test and debug this application, to do all that we will use Hardhat, do you know it? If not, don't worry! Just follow these points:

**Open a terminal in the root project and run**
  1. Run `npx hardhat compile`
  2. Wait a second... 
  3. Start local node `npx hardhat node`
  4. Kepp this terminal with this porces runnig

### **Step 4: Add a Localhost connection to you Metamask**

  1. Go to Metamask aplication
  2. Click Connection Pill
  3. A pop up will open, clin on  Add Network. Here you will be redirected to a new tab. Fill the form, fill the filed with [Hardhat Local Network](https://www.youtube.com/watch?v=FTDEX3S1eqU):

  - Network Name: Define a name for local connection, e.g: "Localhost"
  - New RCP URL: http://127.0.0.1:8545
  - Chain ID: 31337

Done! Make sure you switch you Metamask App to this network.

### **Step 5: Deploy Contracts**

Now, first make sure you are running your local node, then open a new terminal in the project root and run:

```npx hardhat run scripts/deploy.ts --network localhost```

### **Step 6: Start React App**

Now is time to run the aplication! Open another new terminal, and just run `npm run start`

### **Step 7: You are done!**

Fantastic! If everything works fine at this point you will see the screen, now you just have to connect and then you will be able to see the tokens.

https://user-images.githubusercontent.com/59506131/153772373-2abf36c1-02c8-4599-a55b-dec4885ab3c4.mp4


```
Membrabe Frontend Challenge 2022
Develop by: [Cecilia Serafini]
Date: Feb 13, 2022
```
