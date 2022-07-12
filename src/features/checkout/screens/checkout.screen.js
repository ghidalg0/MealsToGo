import React, { useContext } from "react";
import { Text } from "../../../components/typography/text.component";

import { SafeArea } from "../../../utils/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { CreditCardInput } from "../components/credit-card.component";
import { CartContext } from "../../../services/cart/cart.context";

import { CartIconContainer, CartIcon } from "../components/checkout.styles";

export const CheckoutScreen = () => {
  const { cart, restaurant } = useContext(CartContext);
  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text>Your cart is empty !</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }
  return (
    <SafeArea>
      <Text>{JSON.stringify(cart)}</Text>
      <Text>{JSON.stringify(restaurant)}</Text>
      <CreditCardInput />
    </SafeArea>
  );
};
