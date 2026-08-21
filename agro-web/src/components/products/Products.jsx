"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SectionHeader from "@/components/common/SectionHeader";
import ProductCard from "@/components/ui/ProductCard";
import { useCart } from "@/context/CartContext";
import { PRODUCT_CATEGORIES, PRODUCTS } from "@/data/home";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { addToCart } = useCart();
  const router = useRouter();

  const filteredProducts =
    activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.cat === activeCategory);

  const handleBuy = (product) => {
    addToCart(product);
    router.push("/checkout"); //not yet added.
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <section
      id="products"
      className="py-20 px-4 bg-white dark:bg-gray-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="আমাদের পণ্য"
          title="Our Products"
          description="Browse our full range of certified agricultural products for every farming need."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {PRODUCT_CATEGORIES.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  active
                    ? "bg-linear-to-r from-[#1B5CA8] to-[#123f73] text-white shadow-lg shadow-blue-900/25 scale-105"
                    : "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-[#CC2229]/50 hover:text-[#CC2229] dark:hover:border-red-400 dark:hover:text-red-400 hover:-translate-y-0.5"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.name}
              {...product}
              onBuy={handleBuy}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
