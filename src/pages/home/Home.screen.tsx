import './Home.scss';
import { Layout, PageHeader, Typography, Space, Image, Spin,} from 'antd';
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
  const { Text, Link } = Typography;

  useEffect(() => {
    setTokenList(wallet.getTokens());
  },[wallet]);

  console.log("Render Home");
  return (
    <Layout>
      <PageHeader
        ghost={false}
        avatar={{src: Logo, shape: 'square' }}
        extra={<Connector />}
      />

      <Content className="site-layout">
        {wallet.isConnected() ? <>
          <CardBalance />
          <CardTokenContainer tokenList={tokenList} />
        </> :
        <div className="landing welcome">
            <Image
                width={200}
                src={Logo}
                className={"logo-animation"}
              />
        </div>
        }
      </Content>

      <Footer className='text-center fixed-to-bottom'>
      <Space direction="vertical">
          <Text type="secondary">Membrane Frontend Challenge ©2022</Text>
          <Text type="secondary">
            Created by <Link href="https://github.com/ceserafini/eth-token-balance-app" target="_blank"> Cecilia Serafini</Link>
          </Text>
      </Space>
      </Footer>

      {wallet.isConnecting() && <Spin size="large"/>}
    </Layout>
  )
});

export default Home;