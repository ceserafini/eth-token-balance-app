import { ethers } from "ethers";
import { types } from "mobx-state-tree";

import TokenETH from '../artifacts/contracts/TokenETH-Sandbox.sol/TokenETH.json'
const TokenETHAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

import TokenUSDT from '../artifacts/contracts/TokenUSDT-Sandbox.sol/TokenUSDT.json'
const TokenUSDTAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';

import TokenUSDC from '../artifacts/contracts/TokenUSDC-Sandbox.sol/TokenUSDC.json'
const TokenUSDCAddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';

export const Token = types
  .model("TokenModel", {
    logo: types.string,
    symbol: types.string,
    name: types.string,
    amount: types.string,
    usd: types.number,
  });

const createToken = async (address: string, abi: any, account: string): Promise<any> => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(address, abi, provider)
  const balance = await contract.balanceOf(account);
  return Token.create({
    logo: "",
    symbol: await contract.symbol(),
    name: await contract.name(),
    amount: balance.toString(),
    usd: 0, // find value from bittrex api
  })
}

export const WalletModel = types
  .model("WalletModel", {
    address: types.optional(types.string, ""),
    tokens: types.array(Token),
  })
  .actions((wallet) => ({
    setAddress(address) {
      console.log(address);
      wallet.address = address;
    },

    setTokens(tokenList: typeof Token[]) {
      wallet.tokens.push(...tokenList);
    },

    async connect() {
      try {
        if (window.ethereum) {
          const addresses = await window.ethereum.request({ method: 'eth_requestAccounts' });
          console.log("Provider List: ", addresses);
          wallet.setAddress(addresses[0]);
          wallet.setTokens(await Promise.all([
            createToken(TokenETHAddress, TokenETH.abi, wallet.address),
            createToken(TokenUSDTAddress, TokenUSDT.abi, wallet.address),
            createToken(TokenUSDCAddress, TokenUSDC.abi, wallet.address),
          ]));
        } else {
          console.log('Need to install MetaMask');
          throw new Error('Please install MetaMask browser extension to interact');
        }
      } catch(e) {
        console.log(e);
      }
    },

    isConnected() {
      return wallet.address !== "";
    },

    async disconnect() {
      wallet.address = "";
    },

    getAliasAccount(): string {
      return `${wallet.address.slice(0,5)}...${wallet.address.slice(wallet.address.length-4, wallet.address.length)}`;
    },

    getBalance(): number {
      return wallet.tokens.reduce((acc, token) => acc + token.usd, 0);
    },

    getTokens(): Token[] {
      return wallet.tokens;
    },
  }));

export

let walletMemory;
export const useWallet = () => {
  if(!walletMemory) {
    walletMemory = WalletModel.create({});
  }
  return walletMemory;
}
