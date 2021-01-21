/* eslint-disable arrow-body-style */
import React from 'react';

interface PizzaO {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface Props {
  pizza: PizzaO;
}

const Pizzas: React.FC<Props> = ({ pizza }) => {
  return (
    <li>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
    </li>
  );
};

export default Pizzas;
