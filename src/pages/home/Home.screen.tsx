import { Card, Layout, PageHeader } from 'antd';
import './styles/Home.css';
import Logo  from '../../assets/ethereum.png';
import ConnectWallet from '../../components/connect/ConnectWallet.component';

const { Footer, Content } = Layout;

const Home = (): JSX.Element => {


  return (
    <Layout>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        avatar={{src: Logo, shape: 'square' }}
        title=""
        subTitle=""
        extra={[
          <ConnectWallet/>
        ]}
      ></PageHeader>

      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: "calc(100vh - 72px - 64px - 70px)" }}>
          <Card title="Wallet balance">
          </Card>
        </div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>Membrane FrontEnd Challenge ©2022 Created by Cecilia Serafini</Footer>
    </Layout>
  )
}

export default Home;