import React, { useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import { SafeArea } from "../../../utils/safe-area.component";
import { Text, Button } from "react-native";

export const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button title="Log Out" onPress={() => onLogout()} />
    </SafeArea>
  );
};
