"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Package,
  ShieldCheck,
  ShoppingCart,
  Truck,
  Zap,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

import Button from "@/components/common/Button";
import { PRODUCTS } from "@/data/home";
import { useCart } from "@/context/CartContext";

export default function ProductDetails() {
  const router = useRouter();
  const params = useParams();
  const { addToCart, buyNow } = useCart();

  const [addedToCart, setAddedToCart] = useState(false);

  const slug = params?.slug;

  const product = PRODUCTS.find(
    (item) =>
      item.slug === slug ||
      item.name.toLowerCase().replace(/\s+/g, "-") === slug,
  );

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <Package
            size={56}
            className="mx-auto mb-5 text-gray-300 dark:text-gray-700"
          />

          <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
            Product Not Found
          </h1>

          <p className="mb-6 text-gray-500 dark:text-gray-400">
            The product you are looking for does not exist or may have been
            removed.
          </p>

          <Button href="/products">Back to Products</Button>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true);

    window.setTimeout(() => {
      setAddedToCart(false);
    }, 1800);
  };

  const handleBuyNow = () => {
    buyNow(product);
    router.push("/checkout");
  };

  return (
    <main className="min-h-screen bg-background transition-colors">
      <section className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <Link
          href="/products"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400"
        >
          <ArrowLeft size={18} />
          Back to Products
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Product Image */}
          <div>
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-gray-100 bg-gray-100 dark:border-gray-800 dark:bg-gray-900">
              <Image
                src={product.img}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <span className="absolute left-5 top-5 rounded-full bg-navy-600 px-3 py-1.5 text-xs font-bold text-white shadow-md">
                {product.cat}
              </span>
            </div>
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">
            <span className="mb-3 text-sm font-semibold uppercase tracking-widest text-navy-600 dark:text-navy-300">
              {product.cat}
            </span>

            <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
              {product.name}
            </h1>

            <div className="mt-5">
              <span className="text-2xl font-bold text-navy-600 dark:text-navy-300">
                {product.price}
              </span>
            </div>

            <p className="mt-6 leading-relaxed text-gray-600 dark:text-gray-300">
              High-quality agricultural product designed to provide reliable
              performance and excellent results for modern farming needs.
              Carefully selected to meet professional agricultural standards.
            </p>

            {/* Benefits */}
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <Feature icon={ShieldCheck} title="Quality Assured" />
              <Feature icon={Package} title="Secure Packaging" />
              <Feature icon={Truck} title="Fast Delivery" />
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-3">
              {/* Buy Now */}
              <Button onClick={handleBuyNow}>
                <span className="flex items-center gap-2">
                  <Zap size={17} />
                  Buy Now
                </span>
              </Button>

              {/* Add To Cart */}
              <button
                type="button"
                onClick={handleAddToCart}
                className={`flex min-w-37.5 items-center justify-center gap-2 rounded-xl border-2 px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                  addedToCart
                    ? "scale-105 border-green-500 bg-green-500 text-white shadow-lg shadow-green-500/20"
                    : "border-navy-600 bg-transparent text-navy-600 hover:bg-navy-600 hover:text-white dark:border-navy-400 dark:text-navy-300 dark:hover:bg-navy-400 dark:hover:text-white"
                }`}
              >
                {addedToCart ? (
                  <>
                    <span className="flex h-5 w-5 animate-bounce items-center justify-center rounded-full bg-white/20">
                      <Check size={14} strokeWidth={3} />
                    </span>

                    <span>Added to Cart</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart size={17} />
                    <span>Add To Cart</span>
                  </>
                )}
              </button>
            </div>

            {/* Highlights */}
            <div className="mt-8 border-t border-gray-100 pt-6 dark:border-gray-800">
              <h2 className="mb-3 font-semibold text-gray-900 dark:text-white">
                Product Highlights
              </h2>

              <ul className="space-y-2">
                {[
                  "Suitable for professional agricultural use",
                  "Reliable and consistent quality",
                  "Carefully selected for farming applications",
                  "Available for bulk orders",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                  >
                    <Check
                      size={16}
                      className="shrink-0 text-brand-600 dark:text-brand-400"
                    />

                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Feature({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3 dark:border-gray-800 dark:bg-gray-900">
      <Icon size={22} className="shrink-0 text-navy-600 dark:text-navy-300" />

      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
        {title}
      </span>
    </div>
  );
}
