import React from 'react';
import Pizzas from './components/Pizzas';
import pizzas from './data/pizzas.json';

function App() {
  return (
    <div className="App">
      {
        pizzas.map((pizza) => <Pizzas key={pizza.id} pizza={pizza} />)
      }
    </div>
  );
}

export default App;
