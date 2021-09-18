import React from 'react';
import './App.css';
import CoffeeBook from './containers/CoffeeBook';

const App: React.FC = () => {
  return (
    <div className="container mx-auto">
      <CoffeeBook />
    </div>
  );
}

export default App;
