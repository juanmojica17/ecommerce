import React, { createContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  user: "Juan Mojica",
  totalPrice: 0,
  cart: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        totalPrice: state.totalPrice + action.payload.price,
        cart: [...state.cart, action.payload]
      };

    case "REMOVE":
      return {
        ...state,
        totalPrice: state.totalPrice - action.payload.price,
        cart: state.cart.filter(product => product.id !== action.payload.id) //<-- cart: [{id: 1, name: ""}, ]
      };

      

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const data = { state, dispatch };

  return (
    <CartContext.Provider value={data}>{children}</CartContext.Provider>
  );
};

export default CartContext;
export { CartProvider };