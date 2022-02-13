import { Provider, walletStore } from './context/WalletStore';
import PagesNavigation from './pages/pages.navigation';

function App() {

  return (
    <Provider value={walletStore}>
      <PagesNavigation />
    </Provider>
  );
}

export default App;
