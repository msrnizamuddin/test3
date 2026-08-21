"use client";

import Link from "next/link";
import { ShoppingCart, Zap } from "lucide-react";

export default function ProductCard({
  name,
  cat,
  price,
  img,
  onBuy,
  onAddToCart,
}) {
  const slug = name.toLowerCase().replace(/\s+/g, "-");

  const product = {
    name,
    cat,
    price,
    img,
    slug,
  };

  return (
    <div className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-2xl hover:shadow-green-900/10 hover:border-[#16A34A]/30 dark:hover:border-green-800/60 hover:-translate-y-1.5 transition-all duration-300">
      <Link href={`/products/${slug}`} className="block">
        <div className="relative overflow-hidden h-44 bg-linear-to-br from-green-50 to-gray-50 dark:from-green-950/30 dark:to-gray-900">
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <span className="absolute top-2 right-2 text-white text-xs font-bold px-2 py-0.5 rounded-full bg-linear-to-r from-[#F97316] to-[#c2410c] shadow-md">
            {cat}
          </span>
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/products/${slug}`}>
          <h3 className="font-semibold text-gray-800 dark:text-white text-sm mb-2 line-clamp-2 hover:text-[#F97316] transition-colors">
            {name}
          </h3>
        </Link>

        <div className="flex items-center justify-between mb-4">
          <span className="font-bold text-[#16A34A] dark:text-green-400">
            {price}
          </span>

          <Link
            href={`/products/${slug}`}
            className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-[#F97316] transition-colors"
          >
            View Details
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onBuy?.(product)}
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-linear-to-r from-[#F97316] to-[#c2410c] hover:brightness-110 text-white text-xs font-semibold shadow-sm hover:shadow-md transition-all"
          >
            <Zap size={15} />
            Buy Now
          </button>

          <button
            type="button"
            onClick={() => onAddToCart?.(product)}
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-linear-to-r from-[#16A34A] to-[#15803d] hover:brightness-110 text-white text-xs font-semibold shadow-sm hover:shadow-md transition-all"
          >
            <ShoppingCart size={15} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
