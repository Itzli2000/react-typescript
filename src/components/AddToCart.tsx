/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { CartItem, useStateDispatch } from './AppState';

export interface AddToCartProps {
  // eslint-disable-next-line no-unused-vars
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
}

export function withAddToCart<OriginalProps extends AddToCartProps>(
  ChildComponent: React.ComponentType<OriginalProps>,
) {
  const addTocartHOC = (props: Omit<OriginalProps, keyof AddToCartProps>) => {
    const dispatch = useStateDispatch();
    const handleAddToCart: AddToCartProps['addToCart'] = (item) => {
      dispatch({
        type: 'ADD_TO_CART',
        payload: { item },
      });
    };
    return (<ChildComponent {...(props as OriginalProps)} addToCart={handleAddToCart} />);
  };
  return addTocartHOC;
}
