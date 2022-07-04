import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { initializeApp } from "firebase/app";

import { Navigation } from "./src/infrastructure/navigation/index";

import {
  useFonts as useRoboto,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

const firebaseConfig = {
  apiKey: "AIzaSyA2SivrHSSuy-7MFNNbk35Mhyv3sqZH7fM",
  authDomain: "metogo-e9c2c.firebaseapp.com",
  projectId: "metogo-e9c2c",
  storageBucket: "metogo-e9c2c.appspot.com",
  messagingSenderId: "1065520348469",
  appId: "1:1065520348469:web:e41652bf931a135115607c",
};

initializeApp(firebaseConfig);

export default function App() {
  const [robotoLoaded] = useRoboto({
    Roboto_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!robotoLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
