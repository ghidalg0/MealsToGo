import React, { useContext, useEffect, useState } from "react";

import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { Text } from "../../../components/typography/text.component";

import { SafeArea } from "../../../utils/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { CreditCardInput } from "../components/credit-card.component";
import { CartContext } from "../../../services/cart/cart.context";

import { payRequest } from "../../../services/checkout/checkout.service";

import {
  CartIconContainer,
  CartIcon,
  NameInput,
  PayButton,
  ClearButton,
} from "../components/checkout.styles";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

export const CheckoutScreen = () => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [card, setCard] = useState(null);

  const onPay = () => {
    if (!card || !card.id) {
      return;
    }
    payRequest(card.id, sum, name);
  };

  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Spacer position="top" size="large" />
          <Text>Your cart is empty !</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <Spacer position="left" size="medium">
          <Spacer position="top" size="large">
            <Text>Your Order</Text>
          </Spacer>
          <List.Section>
            {cart.map(({ item, price }) => {
              return <List.Item title={`${item} - €${price / 100}`} />;
            })}
          </List.Section>
          <Text>Total: €{sum / 100}</Text>
        </Spacer>
        <NameInput
          label="Name"
          value={name}
          onChangeText={(t) => {
            setName(t);
          }}
        />
        <Spacer position="top" size="large">
          {name.length > 0 && (
            <CreditCardInput name={name} onSuccess={setCard} />
          )}
        </Spacer>
      </ScrollView>
      <Spacer position="top" size="large" />
      <PayButton icon="cash" mode="contained" onPress={onPay}>
        Pay Now
      </PayButton>
      <Spacer position="top" size="large" />
      <ClearButton icon="cart-off" mode="contained" onPress={clearCart}>
        Clear Cart
      </ClearButton>
      <Spacer position="top" size="large" />
    </SafeArea>
  );
};
