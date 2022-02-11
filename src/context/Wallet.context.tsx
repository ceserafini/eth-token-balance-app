import React from "react";
import { createWalletStore } from './Wallet.store'
import { useLocalStore } from 'mobx-react'

export const WalletContext = React.createContext<Record<string, any> | null>(null);

export const WalletProvider = ({children} : any) => {
  const walletStore = useLocalStore(createWalletStore);

  return <WalletContext.Provider value={walletStore}>
    {children}
  </WalletContext.Provider>
}

export const useWalletStore = () => React.useContext(WalletContext);