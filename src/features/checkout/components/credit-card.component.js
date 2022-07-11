import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51LKMKWLxvzexAbQIow5CfqpbGeMuPZZrbL1fjh1OAliSop4OAs5Dwkbuim0K9DqwHc4ZYaD5jRPpJ9Ez8QyQtptu00Z4IiJ5c4"
);

export const CreditCardInput = () => {
  const onChange = async (formData) => {
    const { values, status } = formData;
    const isIncomplete = Object.values(status).includes("incomplete");
    const card = {
      number: "4242424242424242",
      exp_month: "02",
      exp_year: "24",
      cvc: "244",
    };
    const info = await stripe.createToken({ card });
  };
  return (
    <LiteCreditCardInput onChange={onChange} />
  );
};
