/* eslint-disable react/display-name */
import { Card } from "antd"
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useWallet } from "../../context/WalletStore";

const CardBalance = observer(() => {
  const [balance, setBalance] = useState(0)
  const wallet = useWallet()

  useEffect(() => {
    setBalance(wallet.getBalance())
  }, [wallet]);

  return (
    <Card className='text-center card-usd-balance'>
      <div className='h4'>Balance</div>
      <div className='text-center h2'>USD ${balance.toFixed(2)}</div>
    </Card>
  );
});

export default CardBalance;