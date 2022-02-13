import CardTokenBalance from './CardTokenBalance';
import './Card.scss';
import { observer } from 'mobx-react-lite';

const CardTokenContainer = ({ tokenList }: any): JSX.Element => {

  return <div className='card-token-container'>
    {tokenList.map((token, index: number) => <CardTokenBalance key={index} token={token} />)}
  </div>
}

export default observer(CardTokenContainer);
