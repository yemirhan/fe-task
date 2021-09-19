import React from 'react';
import './App.css';
import { LoadingSpinner } from './components/LoadingSpinner';
import CoffeeBook from './containers/CoffeeBook';
import { useCoffeeContext } from './providers/CoffeeProvider';

const App: React.FC = () => {
  const { loading } = useCoffeeContext()
  if (loading) return <div className="w-screen h-screen flex items-center justify-center">
    <LoadingSpinner />
  </div>
  return (
    <div className="container mx-auto font-body">
      <CoffeeBook />
    </div>
  );
}

export default App;
