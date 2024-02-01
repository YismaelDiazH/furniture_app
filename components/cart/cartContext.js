// CartContext.js
import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    console.log('Adding to cart:', item.id);
    setCartItems((currentItems) => [...currentItems, item]);
  };

  const removeFromCart = (_id) => {
    console.log('Removing from cart:', _id);
    setCartItems((currentItems) =>
      currentItems.filter((item) => item._id !== _id)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
