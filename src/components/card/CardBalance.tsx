/* eslint-disable react/display-name */
import { Card } from "antd"
import { observer } from "mobx-react-lite";
import { useWallet } from "../../context/WalletStore";

const CardBalance = observer(() => {
  const wallet = useWallet()

  return (
    <Card className='text-center card-usd-balance'>
      <div className='h4'>Balance</div>
      <div className='text-center h2'>USD ${wallet.getBalance().toFixed(2)}</div>
    </Card>
  );
});

export default CardBalance;