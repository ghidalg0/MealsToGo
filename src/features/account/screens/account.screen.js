import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <Title>Spices</Title>
        <Spacer size="large" />
        <Spacer size="large" />
        <AuthButton
          icon="food"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="account-check-outline"
            mode="contained"
            dark={true}
            onPress={() => navigation.navigate("Register")}
          >
            Sign Up
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
