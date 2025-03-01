import React, {createContext, useContext, useReducer} from 'react';
import {CartAction, CartState} from '../types';

const CartContext = createContext<{
  cart: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({
  cart: [],
  dispatch: () => null,
});

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        return state.map(item =>
          item.id === action.payload.id
            ? {...item, quantity: item.quantity + action.payload.quantity}
            : item,
        );
      }
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload);
    case 'UPDATE_QUANTITY':
      return state.map(item =>
        item.id === action.payload.id
          ? {...item, quantity: item.quantity + action.payload.quantity}
          : item,
      );
    case 'RESET_CART':
      state = [];
      return state;
    default:
      return state;
  }
};

export const CartProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{cart, dispatch}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
