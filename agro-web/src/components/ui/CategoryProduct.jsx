"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ShoppingCart, Zap } from "lucide-react";
import { useState } from "react";

export default function CategoryProduct({
  name,
  slug,
  cat,
  price,
  img,
  priority = false,
  onBuy,
  onAddToCart,
}) {
  const [addedToCart, setAddedToCart] = useState(false);

  const product = {
    name,
    slug,
    cat,
    price,
    img,
  };

  const handleAddToCart = () => {
    onAddToCart?.(product);

    setAddedToCart(true);

    setTimeout(() => {
      setAddedToCart(false);
    }, 1500);
  };

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl">
      <Link href={`/products/${slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <Image
            src={img}
            alt={name}
            fill
            priority={priority}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <span className="absolute left-3 top-3 rounded-full bg-brand-800 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-sm">
            {cat}
          </span>
        </div>
      </Link>

      <div className="p-5">
        <Link href={`/products/${slug}`}>
          <h3 className="mb-1.5 line-clamp-2 text-[15px] font-semibold text-gray-800 transition-colors hover:text-brand-600">
            {name}
          </h3>
        </Link>

        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="text-lg font-bold text-navy-900">{price}</span>

          <Link
            href={`/products/${slug}`}
            className="text-xs font-medium text-gray-500 transition-colors hover:text-brand-700"
          >
            View Details
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {/* Add To Cart */}
          <button
            type="button"
            onClick={handleAddToCart}
            className={`flex items-center justify-center gap-1.5 rounded-xl border px-3 py-2.5 text-xs font-semibold transition-all duration-300 ${
              addedToCart
                ? "border-green-500 bg-green-50 text-green-600"
                : "border-brand-600 bg-white text-navy-900 hover:bg-brand-600 hover:text-white"
            }`}
          >
            {addedToCart ? (
              <>
                <Check size={15} className="animate-bounce" />
                Added
              </>
            ) : (
              <>
                <ShoppingCart size={15} />
                Add to Cart
              </>
            )}
          </button>

          {/* Buy Now */}
          <button
            type="button"
            onClick={() => onBuy?.(product)}
            className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-brand px-3 py-2.5 text-xs font-semibold text-white transition-all hover:brightness-105"
          >
            <Zap size={15} />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
