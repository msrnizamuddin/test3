"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartSummary() {
  const { cartItems } = useCart();

  const total = cartItems.reduce((sum, item) => {
    const price = Number(String(item.price).replace(/[^0-9.]/g, ""));
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="h-fit p-6 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm lg:sticky lg:top-24">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        Order Summary
      </h2>

      <div className="flex justify-between text-sm mb-3">
        <span className="text-gray-500 dark:text-gray-400">Subtotal</span>
        <span className="font-medium text-gray-900 dark:text-white">
          ৳{total.toFixed(2)}
        </span>
      </div>

      <div className="flex justify-between text-sm mb-4">
        <span className="text-gray-500 dark:text-gray-400">Delivery</span>
        <span className="text-gray-900 dark:text-white">
          Calculated at checkout
        </span>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
        <div className="flex justify-between">
          <span className="font-bold text-gray-900 dark:text-white">Total</span>
          <span className="text-xl font-bold text-[#16A34A] dark:text-green-400">
            ৳{total.toFixed(2)}
          </span>
        </div>
      </div>

      <Link
        href="/checkout"
        className="block w-full text-center px-6 py-3.5 bg-linear-to-r from-[#F97316] to-[#c2410c] hover:brightness-110 text-white font-semibold rounded-xl transition-all shadow-lg shadow-orange-900/20 hover:-translate-y-0.5"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
}
