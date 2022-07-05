import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Main" component={() => null} />
    <Stack.Screen name="Login" component={() => null} />
  </Stack.Navigator>
);
