import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2SivrHSSuy-7MFNNbk35Mhyv3sqZH7fM",
  authDomain: "metogo-e9c2c.firebaseapp.com",
  projectId: "metogo-e9c2c",
  storageBucket: "metogo-e9c2c.appspot.com",
  messagingSenderId: "1065520348469",
  appId: "1:1065520348469:web:e41652bf931a135115607c",
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const createUser = (email, password, repeatedPassword) =>
  createUserWithEmailAndPassword(auth, email, password, repeatedPassword);
