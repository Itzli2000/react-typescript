import React from 'react';
import Pizzas from './components/Pizzas';
import pizzas from './data/pizzas.json';
import { ReactComponent as PizzaSvg } from './assets/images/pizza.svg';
import Cart from './components/Cart';
import AppStateProvider from './components/AppState';
import SpecialOffer from './components/SpecialOffer';

function App() {
  const specialOfferPizza = pizzas.find((pizza) => pizza.specialOffer);
  return (
    <AppStateProvider>
      <div className="container">
        <div className="header">
          <PizzaSvg width="100px" height="100px" />
          <div className="siteTitle">Delicious Pizza</div>
          <Cart />
        </div>
        {specialOfferPizza && <SpecialOffer pizza={specialOfferPizza} />}
        <ul className="pizzaList">
          { pizzas.map((pizza) => <Pizzas key={pizza.id} pizza={pizza} />) }
        </ul>
      </div>
    </AppStateProvider>
  );
}

export default App;
