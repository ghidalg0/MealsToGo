import { Platform } from "react-native";

const liveHost = "https://us-central1-metogo-e9c2c.cloudfunctions.net";
const localHost = "http://localhost:5001/metogo-e9c2c/us-central1";
export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = true;
export const host = !isDevelopment || isAndroid ? liveHost : localHost;
