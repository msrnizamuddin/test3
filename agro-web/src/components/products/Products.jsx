"use client";

import { useState } from "react";
import SectionHeader from "@/components/common/SectionHeader";
import ProductCard from "@/components/ui/ProductCard";
import Button from "@/components/common/Button";
import { PRODUCT_CATEGORIES, PRODUCTS } from "@/data/home";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.cat === activeCategory);

  const handleBuy = (product) => {
    console.log("Buy Now:", product);
  };

  const handleAddToCart = (product) => {
    console.log("Add to Cart:", product);
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
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  active
                    ? "bg-[#1B5CA8] text-white shadow-md"
                    : "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-red-400 hover:text-red-700 dark:hover:border-red-400 dark:hover:text-red-400"
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

        <div className="text-center mt-10">
          <Button href="#products" variant="secondary">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
