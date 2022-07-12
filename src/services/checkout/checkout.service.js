import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51LKMKWLxvzexAbQIow5CfqpbGeMuPZZrbL1fjh1OAliSop4OAs5Dwkbuim0K9DqwHc4ZYaD5jRPpJ9Ez8QyQtptu00Z4IiJ5c4"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });
