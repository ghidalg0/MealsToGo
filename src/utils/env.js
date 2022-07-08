const liveHost = "https://us-central1-metogo-e9c2c.cloudfunctions.net";
const localHost = "http://localhost:5001/metogo-e9c2c/us-central1";
export const isDevelopment = process.env.NODE_ENV === "development";
export const host =
  process.env.NODE_ENV === "development" ? localHost : liveHost;
