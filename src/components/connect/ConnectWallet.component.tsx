import {useState, useEffect} from 'react'
import {ethers} from 'ethers'
import { Alert, Button, Dropdown, Menu } from 'antd';

const ConnectWallet = () => {

	const [errorMessage, setErrorMessage] = useState<null | string>(null);
	const [defaultAccount, setDefaultAccount] = useState<null | string>(null);
	const [userBalance, setUserBalance] = useState<null | string>(null);
	const [connButtonText, setConnButtonText] = useState<null|string>('Connect Wallet');
	const [provider, setProvider] = useState<null | any>(null);
	const [isConnect, setIsConnect] = useState<boolean>(false);

  const [visible, setVisible] = useState(false);

	const connectWalletHandler = () => {
		if (window.ethereum && defaultAccount == null) {
			// set ethers provider
			setProvider(new ethers.providers.Web3Provider(window.ethereum));

			// connect to metamask
			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then((result: any) => {
				setDefaultAccount(result[0]);
				setIsConnect(true);
			})
			.catch((error: any) => {
				setErrorMessage(error.message);
        setVisible(true);
			});

		} else if (!window.ethereum){
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

	const disconnectWalletHandler = () => {

		window.ethereum.request({method: 'disconnect'})
		.then((res: any)=> {
			setProvider(null);
			console.log("IS CONNECT?: ", window.ethereum.isConnected());
			//TODO CONNECT
			setIsConnect(false);
			setDefaultAccount(null);
			setUserBalance(null);
			setErrorMessage(null);
		});
		

	}

  const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e, 'I was closed.');
    setVisible(false);
  };

	useEffect(() => {
		if(defaultAccount){
		provider.getBalance(defaultAccount)
		.then((balanceResult: any) => {
			setUserBalance(ethers.utils.formatEther(balanceResult));
			setConnButtonText(defaultAccount);
		})
		};
	}, [defaultAccount, isConnect]);
	
	return (
		<>
			{
				isConnect===true ?
				<Dropdown overlay={
					<Menu>
						<Menu.Item onClick={disconnectWalletHandler}>{"Disconnect wallet"}</Menu.Item>
					</Menu>}>
					<Button>{connButtonText}</Button>
				</Dropdown> :
				<Button key="2" type="default" onClick={connectWalletHandler}>{connButtonText}</Button> 
			}
			
      { visible ?
          <Alert
          message={'Connection Error'}
          description={errorMessage}
          type="error"
          closable
          onClose={onClose}
          style={{ position: 'absolute', right: 0, left: 0, marginLeft: 'auto', marginRight: 'auto', width: '60%' }}
        /> : null }
		</>
	);
}

export default ConnectWallet;