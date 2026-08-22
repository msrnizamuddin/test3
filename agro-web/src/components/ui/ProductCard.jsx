"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Zap } from "lucide-react";

export default function ProductCard({
  name,
  slug,
  cat,
  price,
  img,
  onBuy,
  onAddToCart,
}) {
  const product = {
    name,
    slug,
    cat,
    price,
    img,
  };

  return (
    <div className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-brand-200 dark:hover:border-brand-800 transition-all duration-300">
      <Link href={`/products/${slug}`} className="block">
        <div className="relative overflow-hidden h-44 bg-lime-100 dark:bg-brand-900/30">
          <Image
            src={img}
            alt={name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          <span className="absolute top-2 right-2 text-white text-xs font-bold px-2 py-0.5 rounded-full bg-navy-600">
            {cat}
          </span>
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/products/${slug}`}>
          <h3 className="font-semibold text-gray-800 dark:text-white text-sm mb-2 line-clamp-2 hover:text-brand-600 transition-colors">
            {name}
          </h3>
        </Link>

        <div className="flex items-center justify-between mb-4">
          <span className="font-bold text-navy-600 dark:text-navy-300">
            {price}
          </span>

          <Link
            href={`/products/${slug}`}
            className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-brand-600 transition-colors"
          >
            View Details
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onBuy?.(product)}
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold transition-colors"
          >
            <Zap size={15} />
            Buy Now
          </button>

          <button
            type="button"
            onClick={() => onAddToCart?.(product)}
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-navy-600 hover:bg-navy-700 text-white text-xs font-semibold transition-colors"
          >
            <ShoppingCart size={15} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
