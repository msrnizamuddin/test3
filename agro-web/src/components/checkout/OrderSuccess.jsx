// src/components/checkout/OrderSuccess.jsx

import Link from "next/link";

export default function OrderSuccess() {
  return (
    <section className="bg-background px-4 py-24">
      <div className="mx-auto max-w-lg text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-brand text-3xl text-white shadow-lg">
          ✓
        </div>

        <h1 className="mb-3 text-2xl font-black text-navy-700 md:text-3xl">
          Order Placed
        </h1>

        <p className="mb-8 leading-relaxed text-gray-600">
          Thanks for your order. We&apos;ll call you shortly to confirm your
          delivery details.
        </p>

        <Link
          href="/products"
          className="inline-block rounded-full bg-gradient-brand px-7 py-3 font-bold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Continue Shopping
        </Link>
      </div>
    </section>
  );
}
