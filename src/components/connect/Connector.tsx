import { Button, Dropdown, Menu, Modal } from "antd";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useWallet } from "../../context/WalletStore";
import './Connector.scss';

// eslint-disable-next-line react/display-name
const Connector = observer((): JSX.Element => {
  const [isConnected, setIsConnected] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const wallet = useWallet();

  useEffect(() => {
    setIsConnected(wallet.isConnected());
  }, [wallet]);

  const startConnection = async () => {
    // TODO: show loader
    try {
      await wallet.connect();
      setIsConnected(true);
    } catch (e) {
      setErrorMessage(e.message);
      setVisible(true);
    }
    // TODO: hide loader
  }

  const startDisconnection = () => {
    console.log("disconnecting...")
    wallet.disconnect();
    setIsConnected(false);
  }

  return <>

    {isConnected
      ? <Dropdown overlay={
        <Menu>
          <Menu.Item key={0} onClick={startDisconnection}>Disconnect wallet</Menu.Item>
        </Menu>
      } trigger={['click', 'hover']}>
        <Button>{wallet.getAliasAccount()}</Button>
      </Dropdown>
      : <Button key="2" type="default" onClick={startConnection}>Log in with MetaMask</Button>
    }

    <Modal title="Oups! Something was wrong" visible={visible} onCancel={() => setVisible(false)} footer={null}>
      <p>{errorMessage}</p>
    </Modal>

  </>
});

export default Connector;
