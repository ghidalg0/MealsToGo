import React, { useState, useEffect, useContext, createContext } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [cart, setCart] = useState([]);
  const [restaurant, setRestaurant] = useState(null);

  const add = (item, restau) => {
    if (!restaurant || restaurant.placeId !== restau.placeId) {
      setRestaurant(restau);
      setCart(item);
    }
    setCart([...CartContext, item]);
  };

  const clear = () => {
    setCart([]);
    setRestaurant(null);
  };

  return (
    <CartContext.Provider
      values={{
        addToCart: add,
        clearCart: clear,
        restaurant,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
