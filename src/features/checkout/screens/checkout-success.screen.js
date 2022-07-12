import React from "react";

import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../utils/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { CartIconContainer, CartIcon } from "../components/checkout.styles";

export const CheckoutSuccessScreen = () => (
  <SafeArea>
    <CartIconContainer>
      <CartIcon icon="check-bold" />
      <Spacer position="top" size="large" />
      <Text variant="label">Successfully ordered !</Text>
    </CartIconContainer>
  </SafeArea>
);
