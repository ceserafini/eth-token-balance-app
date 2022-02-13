import './Home.scss';
import { Layout, PageHeader } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';
import { observer } from "mobx-react-lite";
import { useWallet } from '../../context/WalletStore';
import Connector from '../../components/connect/Connector';
import Logo  from '../../assets/blockchain.png';
import CardBalance from '../../components/card/CardBalance';
import CardTokenContainer from '../../components/card/CardTokenContainer';
import { useEffect, useState } from 'react';

// eslint-disable-next-line react/display-name
const Home = observer((): JSX.Element => {
  const [tokenList, setTokenList] = useState([]);
  const wallet = useWallet();

  useEffect(() => {
    setTokenList(wallet.getTokens());
  },[wallet]);

  console.log("Render Home");
  return (
    <Layout>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        avatar={{src: Logo, shape: 'square' }}
        extra={<Connector />}
      />

      <Content className="site-layout">
        {wallet.isConnected() && <>
          <CardBalance />
          <CardTokenContainer tokenList={tokenList} />
        </>}
      </Content>

      <Footer className='text-center fixed-to-bottom'>Membrane FrontEnd Challenge ©2022 Created by Cecilia Serafini</Footer>
    </Layout>
  )
});

export default Home;