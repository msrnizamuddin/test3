"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus, Zap } from "lucide-react";

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
    <div className="group relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-border dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-brand-300 dark:hover:border-brand-800 transition-all duration-300">
      <Link href={`/products/${slug}`} className="block">
        <div className="relative overflow-hidden aspect-square bg-lime-100 dark:bg-brand-900/30">
          <Image
            src={img}
            alt={name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          <span className="absolute top-3 left-3 text-white text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-navy-600 shadow-sm">
            {cat}
          </span>
        </div>
      </Link>

      <button
        type="button"
        onClick={() => onAddToCart?.(product)}
        aria-label={`Add ${name} to cart`}
        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-navy-600 shadow-md opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-brand-600 hover:text-white"
      >
        <Plus size={17} />
      </button>

      <div className="p-5">
        <Link href={`/products/${slug}`}>
          <h3 className="font-semibold text-gray-800 dark:text-white text-[15px] mb-1.5 line-clamp-2 hover:text-brand-600 transition-colors">
            {name}
          </h3>
        </Link>

        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-bold text-navy-600 dark:text-navy-300">
            {price}
          </span>

          <Link
            href={`/products/${slug}`}
            className="text-xs font-medium text-muted-foreground hover:text-brand-600 transition-colors"
          >
            View Details
          </Link>
        </div>

        <button
          type="button"
          onClick={() => onBuy?.(product)}
          className="flex w-full items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-gradient-brand hover:brightness-105 text-white text-xs font-semibold transition-all"
        >
          <Zap size={15} />
          Buy Now
        </button>
      </div>
    </div>
  );
}
