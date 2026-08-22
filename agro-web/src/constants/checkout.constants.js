// src/components/checkout/checkout.constants.js

export const DISTRICTS = [
  "Dhaka",
  "Chattogram",
  "Rajshahi",
  "Khulna",
  "Sylhet",
  "Barishal",
  "Rangpur",
  "Mymensingh",
  "Comilla",
  "Gazipur",
  "Narayanganj",
];

export const DHAKA_DELIVERY_FEE = 70;
export const OUTSIDE_DHAKA_DELIVERY_FEE = 130;

export const PAYMENT_METHODS = [
  {
    id: "cod",
    title: "Cash on Delivery",
    description: "Pay in cash when your order arrives at your door.",
    badge: "Most popular",
  },
  {
    id: "bkash",
    title: "bKash",
    description:
      "Send payment to our bKash merchant number after placing the order.",
  },
  {
    id: "nagad",
    title: "Nagad",
    description:
      "Send payment to our Nagad merchant number after placing the order.",
  },
];
