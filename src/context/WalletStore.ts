import { Instance, onSnapshot } from "mobx-state-tree";
import { createContext, useContext } from "react";
import { WalletModel } from "./WalletModel";

let initialState = WalletModel.create({
  address: "",
  tokens: [],
});

const data = localStorage.getItem('walletState');

if (data) {
  const json = JSON.parse(data);
  if (WalletModel.is(json)) {
    initialState = WalletModel.create(json);
  }
}

export const walletStore = initialState;

onSnapshot(walletStore, snapshot => {
  console.log("Snapshot: ", snapshot);
  localStorage.setItem('walletState', JSON.stringify(snapshot));
});

export type RootInstance = Instance<typeof WalletModel>;
const RootStoreContext = createContext<null | RootInstance>(null);


export const Provider = RootStoreContext.Provider;
export function useWallet() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store;
}