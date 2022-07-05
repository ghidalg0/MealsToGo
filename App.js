import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import { Navigation } from "./src/infrastructure/navigation/index";

import { initializeApp } from "firebase/app";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      signInWithEmailAndPassword(
        auth,
        "guilhem.hidalgo@tetraktys-cm.com",
        "azerty"
      )
        .then((user) => {
          console.log(user);
          setIsAuthenticated(true);
        })
        .catch((e) => {
          console.error(e);
        });
    }, 5000);
  }, []);

  const [robotoLoaded] = useRoboto({
    Roboto_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!robotoLoaded || !latoLoaded) {
    return null;
  }

  if (!isAuthenticated) {
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
