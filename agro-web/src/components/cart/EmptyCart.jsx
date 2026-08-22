import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function EmptyCart() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center px-4">
      <div className="text-center">
        <ShoppingCart
          size={64}
          className="mx-auto mb-5 text-gray-300 dark:text-gray-700"
        />

        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Your Cart Is Empty
        </h1>

        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Add some products to your cart before checking out.
        </p>

        <Link
          href="/products"
          className="inline-block px-6 py-3 bg-gradient-brand hover:brightness-110 text-white font-semibold rounded-xl transition-colors"
        >
          Browse Products
        </Link>
      </div>
    </main>
  );
}
