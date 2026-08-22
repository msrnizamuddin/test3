// src/hooks/useCheckout.js

"use client";

import { useMemo, useState } from "react";
import { useCart } from "@/context/CartContext";
import {
  DHAKA_DELIVERY_FEE,
  OUTSIDE_DHAKA_DELIVERY_FEE,
} from "@/constants/checkout.constants";

export default function useCheckout() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const [district, setDistrict] = useState("Dhaka");
  const [payment, setPayment] = useState("cod");
  const [submitting, setSubmitting] = useState(false);
  const [placed, setPlaced] = useState(false);

  const getPrice = (price) => {
    if (typeof price === "number") {
      return price;
    }

    return Number(String(price).replace(/[^0-9.]/g, "")) || 0;
  };

  const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => {
      const price = getPrice(item.price);
      const quantity = item.quantity || 1;

      return total + price * quantity;
    }, 0);
  }, [cartItems]);

  const deliveryFee =
    district === "Dhaka" ? DHAKA_DELIVERY_FEE : OUTSIDE_DHAKA_DELIVERY_FEE;

  const total = subtotal + deliveryFee;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!cartItems.length) {
      return;
    }

    setSubmitting(true);

    // Replace this with actual API call later.
    setTimeout(() => {
      setSubmitting(false);
      setPlaced(true);
      clearCart();
    }, 900);
  };

  return {
    cartItems,

    district,
    setDistrict,

    payment,
    setPayment,

    subtotal,
    deliveryFee,
    total,

    submitting,
    placed,

    removeFromCart,
    updateQuantity,

    handleSubmit,
  };
}
