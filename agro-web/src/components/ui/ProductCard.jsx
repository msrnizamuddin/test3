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
    <div className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-green-200 dark:hover:border-green-900 transition-all duration-300">
      <Link href={`/products/${slug}`} className="block">
        <div className="relative overflow-hidden h-44 bg-green-50 dark:bg-green-950/30">
          <Image
            src={img}
            alt={name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          <span className="absolute top-2 right-2 text-white text-xs font-bold px-2 py-0.5 rounded-full bg-[#CC2229]">
            {cat}
          </span>
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/products/${slug}`}>
          <h3 className="font-semibold text-gray-800 dark:text-white text-sm mb-2 line-clamp-2 hover:text-[#CC2229] transition-colors">
            {name}
          </h3>
        </Link>

        <div className="flex items-center justify-between mb-4">
          <span className="font-bold text-[#1B5CA8] dark:text-blue-400">
            {price}
          </span>

          <Link
            href={`/products/${slug}`}
            className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-[#CC2229] transition-colors"
          >
            View Details
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onBuy?.(product)}
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-[#CC2229] hover:bg-[#9e1a1f] text-white text-xs font-semibold transition-colors"
          >
            <Zap size={15} />
            Buy Now
          </button>

          <button
            type="button"
            onClick={() => onAddToCart?.(product)}
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-[#1B5CA8] hover:bg-[#0d3d75] text-white text-xs font-semibold transition-colors"
          >
            <ShoppingCart size={15} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
