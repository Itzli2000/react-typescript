/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { AppStateContext } from './AppState';

interface Props {}

interface State {
    isOpen: boolean;
}

class Cart extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    const { isOpen } = this.state;
    return (
      <AppStateContext.Consumer>
        {(state) => {
          const itemsCount = state.cart.items.reduce((sum, item) => (sum + item.quantity), 0);
          return (
            <div className="cartContainer">
              <button
                className="button"
                type="submit"
                onClick={this.handleClick}
              >
                <FiShoppingCart />
                <span>
                  {itemsCount}
                  {' '}
                  pizza
                  {itemsCount > 1 ? '(s)' : null}
                </span>
              </button>
              <div className="cartDropDown" style={{ display: isOpen ? 'block' : 'none' }}>
                <ul>
                  {state.cart.items.map((item) => (
                    <li key={item.id}>
                      {item.name}
                      {' '}
                      {item.quantity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        }}
      </AppStateContext.Consumer>
    );
  }
}

export default Cart;
