import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { LoadingSpinner } from './components/LoadingSpinner';
import CoffeeBook from './containers/CoffeeBook';
import { CoffeeProvider, useCoffeeContext } from './providers/CoffeeProvider';
import store from './redux/store';

const App: React.FC = () => {
  const { loading } = useCoffeeContext()
  return (loading ?
    <div className="w-screen h-screen flex items-center justify-center">
      <LoadingSpinner />
    </div>
    :
    <Provider store={store}>
      <CoffeeProvider>
        <div className="container mx-auto font-body">
          <CoffeeBook />
        </div>
      </CoffeeProvider>
    </Provider>
  );
}

export default App;
