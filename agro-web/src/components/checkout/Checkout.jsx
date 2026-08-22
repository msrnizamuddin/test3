// src/components/checkout/Checkout.jsx

"use client";

import Link from "next/link";

import useCheckout from "@/hooks/useCheckout";

import CheckoutHeader from "./CheckoutHeader";
import ContactInformation from "./ContactInformation";
import DeliveryAddress from "./DeliveryAddress";
import PaymentMethod from "./PaymentMethod";
import OrderSummary from "./OrderSummary";
import OrderSuccess from "./OrderSuccess";

export default function Checkout() {
  const {
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
  } = useCheckout();

  /*
   * Order successfully placed
   */
  if (placed) {
    return <OrderSuccess />;
  }

  /*
   * Empty cart
   */
  if (cartItems.length === 0) {
    return (
      <section className="bg-background px-4 py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="mb-3 text-3xl font-black text-navy-700">
            Your Cart is Empty
          </h1>

          <p className="mb-8 text-gray-600">
            Add some products to your cart before checking out.
          </p>

          <Link
            href="/products"
            className="inline-block rounded-full bg-gradient-brand px-7 py-3 font-bold text-white shadow-md transition-all hover:scale-105"
          >
            Browse Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-background px-4 py-14 md:py-20">
      <div className="mx-auto max-w-7xl">
        <CheckoutHeader />

        <form
          onSubmit={handleSubmit}
          className="grid items-start gap-10 lg:grid-cols-[1fr_400px]"
        >
          {/* LEFT */}
          <div className="space-y-8">
            <ContactInformation />

            <DeliveryAddress district={district} setDistrict={setDistrict} />

            <PaymentMethod payment={payment} setPayment={setPayment} />
          </div>

          {/* RIGHT */}
          <div className="lg:sticky lg:top-24">
            <OrderSummary
              cartItems={cartItems}
              subtotal={subtotal}
              deliveryFee={deliveryFee}
              total={total}
              district={district}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
              submitting={submitting}
            />
          </div>
        </form>
      </div>
    </section>
  );
}
