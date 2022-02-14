import { types } from "mobx-state-tree";
import { ethers } from "ethers";

import TokenETH from '../artifacts/contracts/TokenETH-Sandbox.sol/TokenETH.json'
const TokenETHAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

import TokenUSDT from '../artifacts/contracts/TokenUSDT-Sandbox.sol/TokenUSDT.json'
const TokenUSDTAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';

import TokenUSDC from '../artifacts/contracts/TokenUSDC-Sandbox.sol/TokenUSDC.json'
import { getMarketPrice } from "../services/service";
import { waitingReject } from "../utils/threading";
import TimeoutException from "../exceptions/TimeOutException";
import { InternalException } from "../exceptions/InternalException";
const TokenUSDCAddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';

const createToken = async (address: string, abi: any, account: string): Promise<any> => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(address, abi, provider);
  const balance = await contract.balanceOf(account);
  const symbol = await contract.symbol();
  const name = await contract.name();
  const amount = balance.toString();
  const currentMarketPrice = await getMarketPrice(symbol);
  const usd = Number(amount)*Number(currentMarketPrice.lastTradeRate);

  return TokenModel.create({
    symbol,
    name,
    amount,
    usd, // bittrex api
  })
}

export const TokenModel = types
  .model("TokenModel", {
    symbol: types.string,
    name: types.string,
    amount: types.string,
    usd: types.number,
  });


export const WalletModel = types
  .model("WalletModel", {
    address: types.optional(types.string, ""),
    tokens: types.array(TokenModel),
    connecting: false,
  })
  .actions((wallet) => ({
    setAddress(address) {
      console.log(address);
      wallet.address = address;
    },

    setTokens(tokenList: typeof TokenModel[]) {
      wallet.tokens.push(...tokenList);
    },

    setConnecting(connecting) {
      wallet.connecting = connecting;
    },

    async connect() {
      if (!window.ethereum) {
        console.log('Need to install MetaMask');
        throw new Error('Please install MetaMask browser extension to interact');
      }
      wallet.setConnecting(true);
      try {
        const addresses = await Promise.race([
          window.ethereum.request({ method: 'eth_requestAccounts' }),
          waitingReject("It seems that the connection is taking a long time. Please try again or check the connection in MetaMask.", 15000)
        ]);

        console.log("Provider List: ", addresses);
        wallet.setAddress(addresses[0]);
        wallet.setTokens(await Promise.all([
          createToken(TokenETHAddress, TokenETH.abi, wallet.address),
          createToken(TokenUSDTAddress, TokenUSDT.abi, wallet.address),
          createToken(TokenUSDCAddress, TokenUSDC.abi, wallet.address),
        ]));
      } catch(e) {
        console.log("EXCEPTION:", e);
        if (e instanceof TimeoutException) {
          throw e;
        }
        throw e; // TODO: check error
      } finally {
        wallet.setConnecting(false);
      }
    },

    async disconnect() {
      wallet.address = "";
      wallet.tokens = [];
    },
  }))
  .views( (wallet) => ({
    isConnecting() {
      return wallet.connecting;
    },

    isConnected() {
      return wallet.address !== "";
    },

    getAliasAccount(): string {
      return `${wallet.address.slice(0,5)}...${wallet.address.slice(wallet.address.length-4, wallet.address.length)}`;
    },

    getBalance(): number {
      return wallet.tokens.reduce((acc, token) => acc + token.usd, 0);
    },

    getTokens(): TokenModel[] {
      return wallet.tokens;
    },
  }));
