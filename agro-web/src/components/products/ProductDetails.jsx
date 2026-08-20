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
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import Button from "@/components/common/Button";
import { PRODUCTS } from "@/data/home";

export default function ProductDetails() {
  const router = useRouter();
  const params = useParams();

  const slug = params.slug;

  const product = PRODUCTS.find(
    (item) =>
      item.slug === slug ||
      item.name.toLowerCase().replace(/\s+/g, "-") === slug,
  );

  if (!product) {
    return (
      <main className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center px-4">
        <div className="text-center">
          <Package
            size={56}
            className="mx-auto mb-4 text-gray-300 dark:text-gray-700"
          />

          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Product Not Found
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mb-6">
            The product you are looking for does not exist.
          </p>

          <Button href="/products">Back to Products</Button>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingProduct = existingCart.find(
      (item) => item.name === product.name,
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = existingCart.map((item) =>
        item.name === product.name
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item,
      );
    } else {
      updatedCart = [
        ...existingCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    alert("Product added to cart");
  };

  const handleBuyNow = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingProduct = existingCart.find(
      (item) => item.name === product.name,
    );

    if (!existingProduct) {
      localStorage.setItem(
        "cart",
        JSON.stringify([
          ...existingCart,
          {
            ...product,
            quantity: 1,
          },
        ]),
      );
    }

    router.push("/checkout");
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
      <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-[#CC2229] dark:hover:text-red-400 transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
              <Image
                src={product.img}
                alt={product.name}
                fill
                priority
                className="object-cover"
              />

              <span className="absolute top-5 left-5 bg-[#CC2229] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                {product.cat}
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#1B5CA8] dark:text-blue-300 mb-3">
              {product.cat}
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              {product.name}
            </h1>

            <div className="mt-5">
              <span className="text-2xl font-bold text-[#1B5CA8] dark:text-blue-400">
                {product.price}
              </span>
            </div>

            <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed">
              High-quality agricultural product designed to provide reliable
              performance and excellent results for modern farming needs.
              Carefully selected to meet professional agricultural standards.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 mt-8">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                <ShieldCheck
                  className="text-[#1B5CA8] dark:text-blue-400"
                  size={22}
                />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  Quality Assured
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                <Package
                  className="text-[#1B5CA8] dark:text-blue-400"
                  size={22}
                />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  Secure Packaging
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                <Truck
                  className="text-[#1B5CA8] dark:text-blue-400"
                  size={22}
                />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  Fast Delivery
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button onClick={handleBuyNow}>Buy Now</Button>

              <Button onClick={handleAddToCart} variant="outline">
                <span className="flex items-center gap-2">
                  <ShoppingCart size={17} />
                  Add To Cart
                </span>
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
              <h2 className="font-semibold text-gray-900 dark:text-white mb-3">
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
                      className="text-green-600 dark:text-green-400 shrink-0"
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
