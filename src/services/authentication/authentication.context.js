import React, { useState, createContext } from "react";

import { loginRequest } from "./authentication.service";

import { initializeApp } from "firebase/app";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    isLoading(true);
    loginRequest(email, password)
      .then((u) => {
      setUser(u);
      isLoading(false);
    })
      .catch((e) => {
      setIsLoading(false);
      setError(e);
    })
  }

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
      }}
    >{children}</AuthenticationContext.Provider>
  );
};
