/* eslint-disable react/display-name */
import { Card, Col, Row } from "antd";
import { observer } from "mobx-react-lite";
import './Card.scss';
import Eth from '../../assets/eth.svg'
import Usdt from '../../assets/usdt.svg'
import Usdc from '../../assets/usdc.svg'

const logoSymbol = {
  ETH: Eth,
  USDT: Usdt,
  USDC: Usdc,
}

const CardTokenBalance = observer(({ token }: any):JSX.Element => {
  const logo = logoSymbol[token.symbol];
  return (
    <Card className="card-token-balance">
      <Row>
        <Col className='col-1 col-token-logo'><img src={logo} alt='' width="40px"/></Col>
        <Col className='col-4 gutter-row'>
          <div className='h4'>{token.symbol}</div>
          <div className='h5'>{token.name}</div>
        </Col>
        <Col className='col-4 text-right'>
          <div className='h4'>{token.amount}</div>
          <div className='h5'>$ {token.usd.toFixed(2)}</div>
        </Col>
      </Row>
    </Card>
  )
});

export default CardTokenBalance;
