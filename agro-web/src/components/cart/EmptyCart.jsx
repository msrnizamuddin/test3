import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function EmptyCart() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center px-4">
      <div className="text-center animate-fade-in-up">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-linear-to-br from-[#16A34A]/10 to-[#16A34A]/5 dark:from-green-500/10 dark:to-green-500/5 flex items-center justify-center">
          <ShoppingCart
            size={40}
            className="text-[#16A34A] dark:text-green-400"
          />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Your Cart Is Empty
        </h1>

        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Add some products to your cart before checking out.
        </p>

        <Link
          href="/products"
          className="inline-block px-6 py-3 bg-linear-to-r from-[#16A34A] to-[#15803d] hover:brightness-110 text-white font-semibold rounded-xl shadow-lg shadow-green-900/20 transition-all hover:-translate-y-0.5"
        >
          Browse Products
        </Link>
      </div>
    </main>
  );
}
