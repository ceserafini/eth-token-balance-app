import './styles/Home.css';
import { Card, Layout, PageHeader } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';
import { observer } from "mobx-react-lite";
import { useWallet } from '../../context/Wallet.store';
import Connector from '../../components/connect/Connector';
import Logo  from '../../assets/ethereum.png';

const Home = (): JSX.Element => {
  const wallet = useWallet();

  console.log("Redner Home");
  return (
    <Layout>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        avatar={{src: Logo, shape: 'square' }}
        extra={<Connector />}
      />

      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: "calc(100vh - 72px - 64px - 70px)" }}>
          <Card title="Wallet balance">{wallet.getBalance()}</Card>
          {wallet.getTokens().map((token, index) => <Card key={index} >{token.symbol} {token.amount}</Card>)}
        </div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>Membrane FrontEnd Challenge ©2022 Created by Cecilia Serafini</Footer>
    </Layout>
  )
}

export default observer(Home);