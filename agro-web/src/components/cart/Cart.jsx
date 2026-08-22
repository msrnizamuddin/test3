"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
    setMounted(true);
  }, []);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQuantity = (name) => {
    updateCart(
      cart.map((item) =>
        item.name === name
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item,
      ),
    );
  };

  const decreaseQuantity = (name) => {
    const updatedCart = cart
      .map((item) =>
        item.name === name
          ? { ...item, quantity: (item.quantity || 1) - 1 }
          : item,
      )
      .filter((item) => item.quantity > 0);

    updateCart(updatedCart);
  };

  const removeItem = (name) => {
    updateCart(cart.filter((item) => item.name !== name));
  };

  const clearCart = () => {
    updateCart([]);
  };

  const getPrice = (price) => {
    if (typeof price === "number") return price;

    const numericPrice = String(price).replace(/[^0-9.]/g, "");
    return Number(numericPrice) || 0;
  };

  const subtotal = cart.reduce(
    (total, item) => total + getPrice(item.price) * (item.quantity || 1),
    0,
  );

  const delivery = subtotal > 0 ? 100 : 0;
  const total = subtotal + delivery;

  if (!mounted) {
    return (
      <main className="min-h-screen bg-background transition-colors" />
    );
  }

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-background transition-colors">
        <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-navy-50 dark:bg-navy-900/40 flex items-center justify-center">
              <ShoppingBag
                size={36}
                className="text-navy-600 dark:text-navy-300"
              />
            </div>

            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Your Cart is Empty
            </h1>

            <p className="text-gray-500 dark:text-gray-400 mb-8">
              You haven't added any products to your cart yet.
            </p>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-brand hover:brightness-110 text-white font-semibold transition-colors"
            >
              <ShoppingBag size={18} />
              Browse Products
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background transition-colors">
      <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Continue Shopping
        </Link>

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Shopping Cart
            </h1>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {cart.length} {cart.length === 1 ? "product" : "products"} in your
              cart
            </p>
          </div>

          <button
            onClick={clearCart}
            className="text-sm font-medium text-red-500 hover:text-red-700 dark:hover:text-red-400 transition-colors"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.name}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 md:p-5 shadow-sm"
              >
                <div className="flex gap-4 md:gap-6">
                  <Link
                    href={`/products/${item.slug || item.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="relative w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800"
                  >
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </Link>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-4">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-navy-600 dark:text-navy-300">
                          {item.cat}
                        </span>

                        <Link
                          href={`/products/${item.slug || item.name.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block mt-1 text-base md:text-lg font-semibold text-gray-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                        >
                          {item.name}
                        </Link>
                      </div>

                      <button
                        onClick={() => removeItem(item.name)}
                        className="shrink-0 p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                      <span className="font-bold text-navy-600 dark:text-navy-300">
                        {item.price}
                      </span>

                      <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                        <button
                          onClick={() => decreaseQuantity(item.name)}
                          className="w-9 h-9 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          <Minus size={16} />
                        </button>

                        <span className="w-10 text-center text-sm font-semibold text-gray-900 dark:text-white">
                          {item.quantity || 1}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item.name)}
                          className="w-9 h-9 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm lg:sticky lg:top-24">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Order Summary
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">
                  Subtotal
                </span>

                <span className="font-medium text-gray-900 dark:text-white">
                  ৳{subtotal.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">
                  Delivery
                </span>

                <span className="font-medium text-gray-900 dark:text-white">
                  ৳{delivery.toLocaleString()}
                </span>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-800 pt-4 flex justify-between">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Total
                </span>

                <span className="text-xl font-bold text-navy-600 dark:text-navy-300">
                  ৳{total.toLocaleString()}
                </span>
              </div>
            </div>

            <Link
              href="#" //not yet made
              className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-brand hover:brightness-110 text-white font-semibold transition-colors shadow-sm"
            >
              Proceed to Checkout
              <ArrowLeft size={18} className="rotate-180" />
            </Link>

            <Link
              href="/products"
              className="mt-3 w-full flex items-center justify-center px-6 py-3 rounded-xl border-2 border-navy-600 text-navy-600 dark:text-navy-300 dark:border-navy-400 hover:bg-navy-50 dark:hover:bg-navy-900/40 font-semibold transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
