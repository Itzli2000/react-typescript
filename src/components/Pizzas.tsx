import React from 'react';
import { Pizza } from '../interfaces/types';
import { withAddToCart, AddToCartProps } from './AddToCart';

interface Props extends AddToCartProps {
  pizza: Pizza;
}

const Pizzas: React.FC<Props> = ({ pizza, addToCart }) => {
  const handleAddToCart = () => {
    addToCart({
      id: pizza.id, name: pizza.name, price: pizza.price,
    });
  };
  return (
    <li className="pizza-container">
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button onClick={handleAddToCart} type="button">Add to cart</button>
    </li>
  );
};

export default withAddToCart(Pizzas);
