"use client";

import { useCart } from "@/context/CartContext";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import EmptyCart from "@/components/cart/EmptyCart";

export default function CartPage() {
  const { cartItems } = useCart();

  if (!cartItems.length) {
    return <EmptyCart />;
  }

  return (
    <main className="min-h-screen bg-background transition-colors">
      <section className="max-w-7xl mx-auto px-4 py-10 md:py-14">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <CartItem key={item.name} item={item} />
            ))}
          </div>

          <CartSummary />
        </div>
      </section>
    </main>
  );
}
