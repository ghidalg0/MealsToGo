import React from "react";

import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../utils/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { CartIconContainer, CartIcon } from "../components/checkout.styles";
import { colors } from "../../../infrastructure/theme/colors";

export const CheckoutErrorScreen = ({ route }) => {
  const { error = "" } = route.params;
  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="close" bg={colors.ui.error} />
        <Spacer position="top" size="large" />
        <Text variant="label">{error}</Text>
      </CartIconContainer>
    </SafeArea>
  );
};
